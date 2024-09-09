import React from "react";
import './coursefees.css';

const CourseFees = () => {
    return (
        <div className="card mb-4 shadow-sm course-card">
            <img src="img4.jpg" alt="feespic" className="card-img-top img-fluid" />
            <div className="card-body text-center">
                <h4 className="card-text">Digital Marketing is highly demanding course that gives flexibility to go for the job or build your own startup.</h4>
                <div className="underline"></div>
                <div className="d-flex justify-content-between align-items-center mt-3">
               
                    <div className="rating text-warning">
                        ★★★★★
                    </div>
                    <div className="price text-danger">
                        ₹19999
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CourseFees;