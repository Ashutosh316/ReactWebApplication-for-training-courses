import React from "react";
import './footer.css';

const Footer = ()=>{

    const containerStyle = {
        backgroundImage: 'url(/meetingbg.jpg)', // Ensure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px' // Adjust padding as needed
    };

    return(
        
        <div className="fcontainer" style={containerStyle}>
            <div className="footer">
                <p className="fpara">
                    <img src="oml.png"  alt="OML Logo" className="nav-logo" ></img>
                    Copyright © 2019-2023 Open Mind Learning. All Rights Reserved. 
    
                </p>

            </div>
        </div>
    );

}
export default Footer;