
const mongoose=require("mongoose");
const MandonSchema=new mongoose.Schema({
fullName:{
    type :String,
    required:true,
},
surname:{
    type:String,
    required:true,
},
image:{

    type:"",
}




});
const Mandon=mongoose.model("employee", MandonSchema);
module.exports=Mandon;




