const express=require("express");
const UserModel = require("../models/user.model");
require("dotenv").config();
const client=require("../config/redis");
const RaceModel = require("../models/Race.model");

const racerouter=express.Router();

racerouter.post("/",async(req,res)=>{
    let payload=req.body;
    let data=new RaceModel(payload);
    await data.save();
})

racerouter.get("/race_detail/:id",async(req,res)=>{
    let id=req.params.id
    let data=await new RaceModel.find({"_id":id});
    res.status(200).send({"msg":"user info","data":data});
})

racerouter.patch("/:id",async(req,res)=>{
    let id=req.params.id
    let payload=req.body;
    await new RaceModel.findByIdAndUpdate({"_id":id },payload);
    res.status(200).send({"msg":"data updated"});
})






module.exports=racerouter;