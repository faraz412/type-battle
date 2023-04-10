const express=require("express");
const UserModel = require("../models/user.model");
require("dotenv").config();
const client=require("../config/redis");
const otpvalidator=require("../config/mailer")
var genratedotp;
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const BlockuserModel = require("../models/block.model");
const userrouter=express.Router();

// User Base Route
userrouter.get("/",(req,res)=>{
    res.send("user Router")
})

// User Rregistration email verification Route
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

// User Rregistration Route
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

// User Login Route
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

// User Race Update Route
userrouter.get("/updateRaceCount/:id",async(req,res)=>{
    let user_id=req.params.id;
    try {
        let data=await UserModel.findByIdAndUpdate({_id:user_id},{ $inc: {'races': 1 }});
        let user=await UserModel.findOne({_id:user_id});
        res.status(200).send({"msg":"races updated","user":user});
    } catch (error) {
        console.log(error);
        res.status(404).send({"msg":"Something went wrong!",err:error.message});
    }
})

// User Race Update Route
userrouter.get("/updateWPM",async(req,res)=>{
    let {user_id,wpm}=req.query;
    console.log(user_id,wpm)
    try {
        let data=await UserModel.findByIdAndUpdate({_id:user_id},{wpm: wpm});
        let user=await UserModel.findOne({_id:user_id});
        res.status(200).send({"msg":"wpm updated","user":user});
    } catch (error) {
        console.log(error);
        res.status(404).send({"msg":"Something went wrong!",err:error.message});
    }
})

// User Logout Route
userrouter.get("/logout",async(req,res)=>{
    let token=req.headers.authorization;
   await client.SETEX(`${token}`,60*60,"true")
   res.status(200).send({"msg":"logout successfull"});
})


module.exports=userrouter;