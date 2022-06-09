import Homecss from"./Home.module.css";
import {Link} from "react-router-dom";
import image from './img3.jpg';

const Home = () => {
    return ( 
        <div className={Homecss.Home}>

<body className={Homecss.body}>
    
    <div className={Homecss.wrapper}>
    
      
     <nav className="navv">
 
  <ul>
      <li>{/* <img style="opacity: 0.6;" src="logo2.png" alt=""> */}</li>
  </ul>
 
 
       <ul>
       <li><Link className={Homecss} to="/">Home</Link></li>
         
       <li><Link className={Homecss} to="/Conatct">Contact</Link></li>
       <li><Link className={Homecss} to="/About">About</Link></li>
       <li><Link className={Homecss.linkhome} to="/Login">Sign In</Link></li>
       <li><Link className={Homecss.linkhome} to="/Register">Sign up</Link></li>
       </ul>
 
      
       
       </nav>
       
    <div>

      <h1 className={Homecss.homeh1}>Welcome to ManDon</h1>
      <h1 className={Homecss.homeh2}>Website</h1>
     
    </div>
       
      
       
     </div>
     <img src={image} alt=""/>
   </body>




        </div>

     );
}
 
export default Home;