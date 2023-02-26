const express=require("express");
const UserModel = require("../models/user.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const adminrouter=express.Router();

adminrouter.get("/",(req,res)=>{
    res.send("admin Router")
})
adminrouter.post("/register",async(req,res)=>{
    let {name,email,password}=req.body;
    // console.log(email,name,password);
    try {
        let data1=await UserModel.find({"email":email});
        // console.log(data1);
        if(data1.length!=0){
            res.status(409).send({"msg":"admin already exits"})
        }else{
            // console.log(password);
            bcrypt.hash(password,5,async function(err, hash) {
                // Store hash in your password DB.
                pass=hash
                // console.log(password,hash);
                let data=new UserModel({email,name,"password":hash,role:"admin"});
                await data.save();  
                res.status(200).send({"msg":"Admin saved in db"});
            });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({"msg":"error"})
    }
    })

    adminrouter.post("/login",async(req,res)=>{
        let {email,password}=req.body;
        try {
            let data1=await UserModel.find({"email":email});
            if(data1.length==0){
                res.status(409).send({"msg":"user not exits"})
            }else {
                bcrypt.compare(password, data1[0].password, function(err, result) {
                    if (result) {
                        let token=jwt.sign({
                            "email":data1[0].email,"role":data1[0].role
                          }, 'typebattle', { expiresIn: '1h' });
                          res.status(200).send({"msg":"login successfull","adminToken":token});
                    } else {
                        res.status(401).send({"msg":"Wrong Credentials!"});
                    }
                });
            }
        } catch (error) {
            console.log(error);
            res.status(404).send({"msg":"error"});
        }
        })

        adminrouter.get("/block/:id",async(req,res)=>{
            let id=req.params.id;
            let data=new BlockuserModel({"user_id":id});
            await data.save();
            res.status(200).send({"msg":"user has been blocked"})
            })

adminrouter.get("/read",async(req,res)=>{
    let data=await UserModel.find();
    res.status(200).send(data);
})





module.exports=adminrouter;