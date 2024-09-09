import React from "react";
import './cardstudent.css';

const BestStudents =()=>{
   return(
    
       <div className=" card text-center">
           <div className="card-body"> 
               <div className="icon mb-3">
                   <img src="logo.png" alt="Best Students Icon" className="img-fluid" ></img>
               </div>
           </div>
           <h5 className="card-title">Best Students</h5>
           <p className="card-text"> We prepare best students to deliver best from them for their assigned roles and responsibilities in an organization</p>
       </div>
      
   );
}
export default BestStudents;