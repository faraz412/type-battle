const mongo=require("mongoose");

const BlockuserSchema=mongo.Schema({
user_id:String
}, { timestamps: true });
const BlockuserModel=mongo.model("blockuser",BlockuserSchema);


module.exports=BlockuserModel;