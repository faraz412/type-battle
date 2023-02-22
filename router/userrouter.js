const express=require("express");

const userrouter=express.Router();

userrouter.get("/",(req,res)=>{
    res.send("user Router")
})




module.exports=userrouter;