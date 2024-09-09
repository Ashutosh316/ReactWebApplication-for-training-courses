import React from "react";
import './school.css';

const schooldata=[
    {
        apply:"Apply for School Integrated Program",
        inviting: " Inviting schools for our special campus connect program to join us to prepare their students for CUET and IIT-JEE to excel them",
        button:"JOIN US NOW!"
}, 

{
    imageSrc: "499.png"
},

{
    apply: "Apply for College Integrated Program",
    inviting: "Inviting colleges and universities to join hands with us to provide the skill trainings to your students and get placed through us with Job Guarantee rather than Job Assistance",
    button: "JOIN US NOW!"
}, 

{
    imageSrc: "499next.png"
},

];

const SchoolProgram=()=>{

    const containerStyle = {
        backgroundImage: 'url(/bg.jpg)', // Ensure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px' // Adjust padding as needed
    };
    return(
        <div className="school-container" style={containerStyle}>
            
            <div className="row row-cols-1 row-cols-md-2">
                {schooldata.map((data , index)=>(
                    data.apply ? (
                        <div key={index}>

                            <div className="school-card">
                               
                                <h3 className="Schooltitle">{data.apply}</h3>
                                <p className="school-paragraph">{data.inviting}</p>
                                <button className={`sch-btn ${index === 2 ? 'btn-warning' : 'btn-danger'}`}>
                                        {data.button}
                                    </button>
                           
                            </div>

                        </div>

                    ) : (
                        <div key={index}>
                            <div className="schimg-container">
                           
                            <img src={data.imageSrc} alt="Program Visual" className="card-img-top img-fluid" />
                            </div>
                           
                        </div>
                        
                    )
                ))}
            </div>
        </div>
    );
        

       

}
export default SchoolProgram;