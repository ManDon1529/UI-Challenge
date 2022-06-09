const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());
const regUser=require("./models/RegisterSchema")

mongoose.connect("mongodb://localhost:27017/Mandon",{
    useNewUrlParser: true,
});
//Registering aAdmin
app.post('/register',async(req,res)=>{

    const fullName=req.body.fullName
    const email=req.body.email
    const password=req.body.password
    const user=new regUser({fullName:fullName,email:email,password:password});
    
        try{
         await user.save(); 
     
    }
    catch(err)
    {
        console.log(err);
    }

});





const Employeee=require("./models/AddingEmp");
//const Mandon = require("./models/Mandon");

mongoose.connect("mongodb://localhost:27017/Mandon",{
    useNewUrlParser: true,
});
app.post('/employee',async(req,res)=>{

    const fullName=req.body.fullName
    const surname=req.body.surname
   
    const manemp=new Employeee({fullName:fullName,surname:surname});
    try{
         await manemp.save();
     
    }
    catch(err)
    {
        console.log(err);
    }

});

app.get('/reademp',async(req,res)=>{
Employeee.find({},(err, result)=>{
    if(err){
        res.send(err);
    }
    res.send(result);
})

});



app.put('/update',async(req,res)=>{

    const newName=req.body.newName;
     const newSurname=req.body.newSurname; 
    const id=req.body.id;
   
      try{
     await  Employeee.findById(id, (error,updatedEmp)=>{
     updatedEmp.fullName=newName;
     
     
    updatedEmp.surname=newSurname; 
      
    updatedEmp.save();
    
         
         })
       
    }
    
    catch(err)
    {
        console.log(err);
    }
    
});

 app.delete("/delete/:id",async(req,res)=>{

  const id=req.params.id;
   await Employeee.findByIdAndRemove(id).exec();
   res.send("deleted")
 })


app.listen(3001,()=>{
    console.log("Server running on port 3001");
});