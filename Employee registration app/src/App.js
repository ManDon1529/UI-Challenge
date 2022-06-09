import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
 

  
 import Login from './components/Login'; 
  import Register from './components/Register';
  import Employee from './components/Employee';
  import Home from './components/Home';

 
 

function App() {
 
  return (
    
    <div className="App">
    
     <Router>
     
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/register" element={<Register/>}/>
             <Route exact path="/login" element={<Login/>}/>

        
           <Route   path="/employee" element={<Employee/>}/>

          

  
         
       </Routes>


     </Router>
    
     </div>
      
  );


}






export default App;




