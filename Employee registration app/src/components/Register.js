import RegisterCss from"./Register.module.css";
import images from './back2.jpg';
 import Axios from 'axios';
 import mail from './mail.png';
 import lock from './lock.png';
 import user from './user.png';
 import LoginCss from"./Login.module.css";
 


import {Link} from "react-router-dom";
import { useState } from "react";

const Register = () => {

  const [fullName,setfullName]=useState("");

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const addToList=()=>{
   /*  console.log(foodName+days); */
   ////this working
   Axios.post("http://localhost:3001/register",{fullName:fullName,email:email,password:password});
  //  //end here 


  };


    return ( 
<div className="Register">
<body >

      <ul>
      
      <li><Link className='' to="/Register">Sign up</Link></li>
      </ul>

     
      
      
    
      
  
      <div className={ RegisterCss.backimg}>
       
<img src={images} alt=""/>


      </div>
    
       <h1 className={RegisterCss.signup}>Sign Up</h1>
       
       <h1  className={RegisterCss.welcome}>Welcome to ManDon</h1>
    
      <div className={RegisterCss.form}>

     

      
<form action="">


       <input className={RegisterCss.email} type="text" placeholder="FullName" onChange={(event)=>{

setfullName(event.target.value)
}}required/><br/> 
   
       <input className={RegisterCss.email} type="email" placeholder="Email"onChange={(event)=>{

setEmail(event.target.value)
}}/><br/> 
         <input className={RegisterCss.password} type="Password" placeholder="Password"onChange={(event)=>{

setPassword(event.target.value)
}}/><br/>
        <input className={RegisterCss.box} type="checkbox"/> 
        <button className={RegisterCss.btnacc} onClick={addToList}>CREATE ACCOUNT</button>
        </form>

      </div>
      <p className="agree">I read and agree to<span /* style="color: #0A9F9E; " */> Terms and Conditions</span></p>
 
      <img className={RegisterCss.mail} src={mail}alt=""/>
      <img className={RegisterCss.lock} src={lock} alt=""/>
      <img className={RegisterCss.user} src={user} alt=""/>
      <img className={RegisterCss.eye}src="hcNameden.png" alt=""/>

      <p className={RegisterCss.para1}>Already have an account? </p> <Link className={RegisterCss.link} to="/Login">Sign in</Link>      
      <script src="index.js"></script><Link className={LoginCss.link3} to="/">HOME</Link>

    </body>





</div>



     );
}
 
export default Register;