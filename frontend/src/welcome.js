import React from "react";
import './welcome.css';

const Welcome=()=>{
    return(
        
        <div className=" container-fluid welcome-container">
             <video autoPlay muted loop className="background-video">
                <source src="/course-video.mp4" type="video/mp4" />
                {/* Add other video formats here if needed */}
            </video>
            <div className="row justify-content-center text-center wel-caption">
                <h2 className="wel-header">Welcome to Open mind Learning</h2>
                <p className="wel-para">This is an EduTech providig services to the K12 schools, Engineering &amp; Management Colleges and the Universities for Career Councelling, Technical Trainings, Foreign Languages, Certification, and Placements</p>

            </div>
            
                <button className="wel-button">JOIN US NOW!</button>
            

        </div>
    );
}
export default Welcome;