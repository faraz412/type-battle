const mongo=require("mongoose");

const RaceSchema=mongo.Schema({
users:Array
}, { timestamps: true });
const RaceModel=mongo.model("UaersRace",RaceSchema);


module.exports=RaceModel;