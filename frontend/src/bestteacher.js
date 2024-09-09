import React from "react";

import './cardteacher.css';

const BestTeachers =()=>{
   return(
    
       <div className=" card text-center">
           <div className="card-body"> 
               <div className="icon mb-3">
                   <img src="logo.png" alt="Best Students Icon" className="img-fluid" ></img>
               </div>
           </div>
           <h5 className="card-title">Best Teachers</h5>
           <p className="card-text">We provide best teachers having good domain knowledge and experience in that domain to prepare best students </p>
       </div>
      
   );
}
export default BestTeachers;