const express=require("express");
const UserModel = require("../models/user.model");
require("dotenv").config();
const redis=require("redis");
const client=redis.createClient();
client.on("error",(error)=>{
    console.log(error);
})
client.connect();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const userrouter=express.Router();

userrouter.get("/",(req,res)=>{
    res.send("user Router")
})

userrouter.post("/register",async(req,res)=>{
let {name,email,password}=req.body;
// console.log(email,name,password);
try {
    let data1=await UserModel.find({"email":email});
    // console.log(data1);
    if(data1.length!=0){
        res.status(409).send({"msg":"user already exits"})
    }else{
        // console.log(password);
        bcrypt.hash(password,5,async function(err, hash) {
            // Store hash in your password DB.
            pass=hash
            // console.log(password,hash);
            let data=new UserModel({email,name,"password":hash});
            await data.save();  
            res.status(200).send({"msg":"done"});
        });
    }
} catch (error) {
    console.log(error);
    res.status(404).send({"msg":"error"})
}
})

userrouter.post("/login",async(req,res)=>{
let {email,password}=req.body;
try {
    let data1=await UserModel.find({"email":email});
    if(data1.length==0){
        res.status(409).send({"msg":"user not exits"})
    }else {
        bcrypt.compare(password, data1[0].password, function(err, result) {
            if(err){
                res.status(404).send({"msg":"password incorrect"}) 
                       }else {
            let token=jwt.sign({
                "email":data1[0].email,"role":data1[0].role
              }, 'typebattle', { expiresIn: '1h' });
              res.status(200).send({"msg":"login successfull","token":token,"user":data1});
            }
        });
    }
} catch (error) {
    console.log(error);
    res.status(404).send({"msg":"error"});
}
})







userrouter.get("/logout",async(req,res)=>{
    let token=req.headers.authorization;
   await client.SETEX(`${token}`,60*60,"true")
   res.status(200).send({"msg":"logout successfull"});
})





module.exports=userrouter;