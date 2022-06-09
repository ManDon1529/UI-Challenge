import EmployeeCss from"./Employee.module.css";
import { useState ,useEffect} from "react";
import Axios from 'axios';

import {Link} from "react-router-dom";
import image1 from './j.webp';
/* import hugo from './hugo.webp';
import image2 from './jack.jpg';
import kate from './kate.jpg';
import ben from './ben.jpg';
import walt from './walt.jpg';
import sun from './sun.webp';
import mike from './mike.webp' */
const Employee = () => {

  const [fullName,setfullName]=useState("");
  const [surname,setSurname]=useState("");
  const [newName,setnewName]=useState("");
  const [newSurname,setnewSurname]=useState("");
 
  const [employeeList,setEmployeeList]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/reademp").then((response)=>{

        setEmployeeList(response.data)

    });
  },[])
  const addToList=()=>{
   /*  console.log(foodName+days); */
   Axios.post("http://localhost:3001/employee",{fullName:fullName,surname:surname});


  };


const updateemp=(id) =>{
  Axios.put("http://localhost:3001/update",{
    id:id, 
    newName:newName,
    newSurname:newSurname
  });

}

const deleteEmp=(id) =>{
  Axios.delete(`http://localhost:3001/delete/${id}`);
  };



    return ( 
            <div className="Employee">

      <body className={EmployeeCss.body}> <br /><br /><br /><br />
    
        <div className={EmployeeCss.wrapperemp}>
      
         <nav className="navemp">
        
        <ul>
         {/* <li><input className={EmployeeCss.searchemp} type="text"/></li> */}
        </ul>
 
 
       <ul>
       <li> <Link className="" to="/">Home</Link></li>
         
         <li> <Link className="" to="">ContactUs</Link></li>
         <li> <Link className="" to="">About</Link></li>
       
       </ul>
 
       {/* <ul className={EmployeeCss.signoutemp}>
         <li> <Link className="" to="/login">Sign in</Link></li>
       </ul> */}
       
       </nav>
       <section className={EmployeeCss.lemp}>
       <form action="">
         <ul  >
           <li>Name:
           <input  type="text" name="name" placeholder="Enter Name"required className={ EmployeeCss.in}onChange={(event)=>{

setfullName(event.target.value)
}}/>
           </li>
           <li>
           Surname:<input type="text" name="surname" required placeholder="Enter Surname" className={ EmployeeCss.in} onChange={(event)=>{

setSurname(event.target.value)
}}/>
           </li>
                      
           <li>{/* 
             <FileBase64 multiple={false}
             onDone={({base64})=>setImage({ image:base64})}
             /> */}{/* 
             Upload Image:<input type="file" name="img" accept="image/*"  className={ EmployeeCss.in}/>
             */} </li>
             <li><button type="submit" className={EmployeeCss.btnemp}onClick={addToList}>Add Employee</button></li>
         </ul>
         </form>
       </section>
       <p className={EmployeeCss.pp}>ll</p>
       <form action="">
       
       <section className={EmployeeCss.flexcontaineremp}>
        {employeeList.map((val, key)=>{
          
  
        return <div className={EmployeeCss.boxemp }>  <img  src={image1} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>{val.fullName}</span><span className={EmployeeCss.span}> {val.surname}</span> <br /><input type="text" name="" id="" placeholder="Name" onChange={(event)=>{

          setnewName(event.target.value)
          }}/> <input type="text"  placeholder="Surname"onChange={(event)=>{

            setnewSurname(event.target.value)
            }}/> <button className={EmployeeCss.editemp} onClick={()=> updateemp(val._id)} >Update</button> <button className={EmployeeCss.deleteemp}onClick={()=> deleteEmp(val._id)}>Delete</button> </div> 
            
              })}


       {/*   <div className={EmployeeCss.boxemp }><img  src={image2} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Jack Shephard</span><button className={EmployeeCss.editemp}type="submit">Edit</button> <button className={EmployeeCss.deleteemp}type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src={kate} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Kate</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src={hugo} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Hugo Hurly</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src={sun}height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Sun-Hwa Kwon</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src={ben} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Ben Linus</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src={mike} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Michael Dawnson</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src={walt} height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Walt Llyod</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src="ana.jpg" height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Ana Lucia</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src="eko.png" height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>Mr Eko</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
         <div className={EmployeeCss.boxemp }><img  src="eko.png" height="170" width="130" alt=""/><br /><span className={EmployeeCss.span}>John Lock</span><button className={EmployeeCss.editemp} type="submit">Edit</button> <button className={EmployeeCss.deleteemp} type="submit">Delete</button></div>
       */}  
       </section>
       </form>
       
     </div>
     <footer><br /><br /> <br /><br /><br /></footer>
   </body>
  





            </div>




     );
}
 
export default Employee;