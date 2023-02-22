const mongo=require("mongoose");

const UserSchema=mongo.Schema({
name:String,
email:String,
password:String,
role:{type:String, enum:["user","admin"],default:"user"},
wpm:{type:Number,default:0},
races:{type:Number,default:0}
// date:Date
},{
     timestamps: true 
})
const UserModel=mongo.model("user",UserSchema);


module.exports=UserModel;