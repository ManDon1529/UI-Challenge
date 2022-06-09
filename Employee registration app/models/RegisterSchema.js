
const mongoose=require("mongoose");
const MandonSchema=new mongoose.Schema({
fullName:{
    type :String,
    required:true,
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},




});
const Mandon=mongoose.model("register", MandonSchema);
module.exports=Mandon;




