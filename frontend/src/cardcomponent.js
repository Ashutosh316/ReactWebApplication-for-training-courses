import React from "react";
import './card.css';

const Card =({image ,  price, date , title , description })=>{
    return(
         
        <div className="card-together mb-4">
            <div className="product">
            <div className="image-container">
            <img src={image} className="card-img-top img-fluid" alt="carcimg"></img>
            
                <span className="pricecard">₹{price}</span>
                </div>
                <div className="body">
                <div className="header">
                    <div className="date mb-2">{date}<br></br> 
                    <span className="five">5</span>
                    
                    
                    </div>
                    
                    <h3 className="course">{title}</h3>
                    
                    </div>
                   
                    <p className="description">{description}</p>
                </div>
                </div>
            
        </div>

    );
}
export default Card;