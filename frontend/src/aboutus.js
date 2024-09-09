import React from "react";
import './about.css';

const About=()=>{
 
  const containerStyle = {
    backgroundImage: 'url(/meetingbg.jpg)', // Ensure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '130px', // Adjust padding as needed
    width: '100vw',  // Full width of viewport
    
    
};
    


    return(
        <div className="Aboutcontainer" id='about' style={containerStyle}>
          
            <div className="row">
            <video autoPlay muted loop className="background-video">
                <source src="/course-video.mp4" type="video/mp4" />
                {/* Add other video formats here if needed */}
            </video>
                <div className="col=lg-12">
        <div className="Aboutheading">
            <h1>ABOUT US</h1>
        </div>
        <div>
            <p className="p"> The Open Mind Learning is a service based organization providing training and career services in the 
              field of emerging technologies (e.g. Augmented Reality, Virtual Reality, Artificial Intelligence, Data 
              Science, Business Analytics, Cyber Security, Digital Forensic Investigation, Automation, Blockchain etc.) along with established and 
              well known technologies (e.g. Enterprise Resource Planning, Customer Relationship Management, 
              Digital Marketing etc.) for engineering and management students.</p>
              <p className="p">
              We analyse the skills of the students and prepare them for industry to fill the gap between demand 
              and supply. It helps the students in getting higher package jobs and helps for industry to get right 
              candidate for right job.
            </p>
            <p className="p">
             We the established the <strong>incubation centres</strong> within the campus to build an environment for the 
              entrepreneurship. The students who have the capabilities and willing to start their own start-ups can 
              get the support and guidance from that centre.
            
            </p>
            <p className="p">
              We build an <strong>organizational culture</strong> within the campus by combining students from different streams 
              and branches (e.g. MBA and BBA for marketing, sales, finance and B.Tech, MCA, BCA student for 
              delivery).
            </p>
            <p className="p">
            We provide  to the students and give a chance to earn money with us while they are 
              learning (<strong>earn while learn</strong>). It builds a confidence among the students and they can achieve industry 
              certificates which is required for <strong>higher packages</strong> in the industry
            
            </p>
        </div>
        </div>
        </div>
        </div>
    );
}

export default About;