import React from "react";
import './productcomponent.css';
const ProductComponent =()=>{
    return(
        <div className="col-md-4">
        <div className="product">
        <div className="img-container">
            <img src="meeting-03.jpg" alt="product" className="img-fluid" />
            <div className="badge">₹499</div>
        </div>
        <div className="content">
            <div className="header">
                <div className="date">FEBRUARY 5</div>
                <div className="title">Python Programming</div>
            </div>
            <p className="description">
                Join us to learn Python programming to build your skills for Data Science, Business Analytics, Artificial Intelligence, and Machine Learning, etc.
            </p>
        </div>
    </div>
    </div>
    );
}
export default ProductComponent;