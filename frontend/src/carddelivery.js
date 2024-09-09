import React from "react";
import './carddel.css';

const CardDel =()=>{
   return(
    
       <div className=" card text-center">
           <div className="card-body"> 
               <div className="icon mb-3">
                   <img src="logo.png" alt="Best Students Icon" className="img-fluid" ></img>
               </div>
           </div>
           <h5 className="card-title">Delivery Mode</h5>
           <p className="card-text"> We train the students using hybrid mode using campus training and online trainings.</p>
       </div>
      
   );
}
export default CardDel;