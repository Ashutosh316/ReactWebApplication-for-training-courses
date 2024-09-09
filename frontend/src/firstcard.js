import React from "react";
import './firstcard.css';

const FirstCard = ({ image, title, description }) => {
    return (
        <div className="Custom-card text-center">
            <div className="card-body">
                <div className="icon mb-3">
                    <img src={image} className="card-img-top img-fluid" alt="card image"></img>
                </div>
                <div className="text-center">
                    <h3 className="firstcara-title">{title}</h3>
                    <p className="card-cus-description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FirstCard;
