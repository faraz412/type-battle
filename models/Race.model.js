const mongo=require("mongoose");

const RaceSchema=mongo.Schema({
user_1:String,
user_2:String,
result:String,

}, { timestamps: true });
const RaceModel=mongo.model("UaersRace",RaceSchema);


module.exports=RaceModel;