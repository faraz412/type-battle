const mongo=require("mongoose");

const UserSchema=mongo.Schema({

})
const UserModel=mongo.model("user",UserSchema);


module.exports=UserModel;