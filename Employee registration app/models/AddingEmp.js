
const mongoose=require("mongoose");
const MandonSchema=new mongoose.Schema({
fullName:{
    type :String,
    required:false
},
surname:{
    type:String,
    required:false
},
image:{

    type:"",
}




});
const Mandon=mongoose.model("employee", MandonSchema);
module.exports=Mandon;




