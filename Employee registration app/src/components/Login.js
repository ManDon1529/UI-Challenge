// import "./login.css";
import LoginCss from"./Login.module.css";
import image from './back2.jpg';
import mail from './mail.png';
import lock from './lock.png';
import facebook from './facebook.png';
import google from './google.png';



import {Link} from "react-router-dom";

const Login = () => {
  

//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
  
//   const addToList=()=>{
//    /*  console.log(foodName+days); */
//    Axios.post("http://localhost:3001/login",{fullName:fullName,email:email,password:password});


//   };

    return ( 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      <div className="Login">
         <body  className={LoginCss.bodylogin}>
      <div className={LoginCss.backimg}>
       
<img src={image} alt=""/>

      </div>
    
       <h1 clasName={LoginCss.login}>Login</h1>
       
       <h1  className={LoginCss.welcomelogin} >The Best Way To Predict <br/> Your Future Is To Create It.</h1>
      
      <div className={LoginCss.formlogin}>
   
        <input className={LoginCss.emaillogin} type="email" placeholder="Email" required/><br/> 
        <input className={LoginCss.passwordlogin} type="password" placeholder="Password" required/><br/>
        <input className={LoginCss.boxlogin} type="checkbox" required/>
        <button className={LoginCss.btnlogin} type="button">LOGIN</button>

      </div>
      <p className={LoginCss.keeplogin}>keep me signed in</p>
 
      <img className={LoginCss.maillogin} src={mail} alt=""/>
      <img className={LoginCss.locklogin} src={lock} alt=""/>
      <img className={LoginCss.eyelogin} src="hidend.png" alt=""/>
      <img className={LoginCss.facebooklogin} src={facebook} alt=""/>
      <img className={LoginCss.googlelogin} src={google} alt=""/>
      <p className={LoginCss.forgetpasslogin}>forget password ?</p>
      <p className={LoginCss.loginwithlogin}>Or login with</p>
      <p className={LoginCss.haveaccountlogin}>Do not have an account ?</p>
      <Link className={LoginCss.link2} to="/register">JOIN NOW</Link>
      <Link className={LoginCss.link3} to="/">HOME</Link>
    </body>

  </div>
    );
}
 
export default Login;