const express=require("express");
const UserModel = require("../models/user.model");
require("dotenv").config();
const client=require("../config/redis");
const otpvalidator=require("../config/mailer")
var genratedotp;
// client.on("error",(error)=>{
//     console.log("error");
// })

// client.connect();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const BlockuserModel = require("../models/block.model");
const userrouter=express.Router();

userrouter.get("/",(req,res)=>{
    res.send("user Router")
})

// userrouter.post("/validate",(req,res)=>{
//     let otp=req.body.otp
//     console.log(otp,genratedotp)
//     if(otp==genratedotp){
//       res.status(200).send({"msg":"Otp verified"})
//     }else {
//         res.status(404).send({"msg":"wrong otp"})
//     }
// })

userrouter.post("/register_validate",async(req,res)=>{
    let {name,email,password}=req.body;
    try {
        let data=await UserModel.findOne({"email":email});
        if(data){
            res.status(409).send({"msg":"User with same email address already exits."})
        }else{
            bcrypt.hash(password,5,async function(err, hash) {
                if(err){
                    console.log(err); 
                }else{
                    genratedotp=otpvalidator(email);
                    res.status(200).send({"msg":"Otp sent to email.", otp:genratedotp, name, email, password:hash});  
                }
            });
        }
    } catch (error) {
        console.log(error); 
        res.status(404).send({"msg":"Something went wrong!",err:error.message});
    }
})

userrouter.post("/register",async(req,res)=>{
    try {
        let user=new UserModel(req.body);
        await user.save();  
        res.status(200).send({"msg":"Registration Succesful"});
    } catch (error) {
        console.log(error); 
        res.status(404).send({"msg":"Something went wrong!",err:error.message});
    }
})

userrouter.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    try {
        let data=await UserModel.findOne({"email":email});
        if(!data){
            res.status(409).send({"msg":"User does not exits. Please register!"})
        }else if(data){
            let data1=await BlockuserModel.findOne({"user_id":data.id});
            if(data1){
                res.status(409).send({"msg":"Your account has been blocked"})
            }else {
            bcrypt.compare(password, data.password, function(err, result) {
                if(result){
                    let token=jwt.sign(
                        {"email":data.email,"role":data.role},
                        'typebattle', 
                        { expiresIn: '1h' }
                    );
                    res.status(200).send({"msg":"Login successfull","token":token,"user":data});
                }else {
                    res.status(404).send({"msg":"Incorrect Password"}) 
                }
            });
        }
    }
    } catch (error) {
        console.log(error);
        res.status(404).send({"msg":"Something went wrong!",err:error.message});
    }
})

// userrouter.post("/register",async(req,res)=>{
// let {name,email,password}=req.body;
// // console.log(email,name,password);
// try {
//     let data1=await UserModel.find({"email":email});
//     // console.log(data1);
//     if(data1.length!=0){
//         res.status(409).send({"msg":"user already exits"})
//     }else{
//         // console.log(password);
//         bcrypt.hash(password,5,async function(err, hash) {
//             // Store hash in your password DB.
//             pass=hash
//             // console.log(password,hash);
//             let data=new UserModel({email,name,"password":hash});
//             await data.save();  
//             genratedotp=otpvalidator(email)
//             console.log(genratedotp)
//             res.status(200).send({"msg":"done"});
//         });
//     }
// } catch (error) {
//     console.log(error);
//     res.status(404).send({"msg":"error"})
// }
// })

// userrouter.post("/login",async(req,res)=>{
// let {email,password}=req.body;
// try {
//     let data1=await UserModel.find({"email":email});
//     if(data1.length==0){
//         res.status(409).send({"msg":"user not exits"})
//     }else {
//         bcrypt.compare(password, data1[0].password, function(err, result) {
//             if(err){
//                 res.status(404).send({"msg":"password incorrect"}) 
//                        }else {
//             let token=jwt.sign({
//                 "email":data1[0].email,"role":data1[0].role
//               }, 'typebattle', { expiresIn: '1h' });
//               res.status(200).send({"msg":"login successfull","token":token,"user":data1});
//             }
//         });
//     }
// } catch (error) {
//     console.log(error);
//     res.status(404).send({"msg":"error"});
// }
// })





userrouter.get("/logout",async(req,res)=>{
    let token=req.headers.authorization;
   await client.SETEX(`${token}`,60*60,"true")
   res.status(200).send({"msg":"logout successfull"});
})


module.exports=userrouter;