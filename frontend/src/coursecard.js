import React from 'react';
import './coursecard.css';

const CourseCard = ({ image, description,rating, price }) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };
    return (
      
      <div className="course-card card text-center">
        

        <img src={image} className="card-img-top img-fluid" alt="Course" />
        <div className="card-body  text-center">
          <p className="card-text">{description}</p>
          <div className="underline"></div>
        </div>
      
        <div className="card-footer d-flex justify-content-between align-items-center mt-3">
          <div className='rating'> {renderStars()}</div>
          <span className="price">{price}</span>
        </div>
       
      </div>
    );
  };

export default CourseCard;