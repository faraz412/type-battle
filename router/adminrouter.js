const express=require("express");

const adminrouter=express.Router();

adminrouter.get("/",(req,res)=>{
    res.send("admin Router")
})




module.exports=adminrouter;