import React, { useState } from "react";
import './form.css'
import axios from 'axios';

function Form() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [ContactNumber, setContactNo] = useState('');
    const [Query, setQuery] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');




    const handleSubmit = async (event) => {

        event.preventDefault();
        // Add form submission logic here






        try {

            let omlformDetails = { 'Name': Name, 'Email': Email, 'ContactNumber': ContactNumber, 'Query': Query }
            await axios.post('http://localhost:5000/handlesubmit', omlformDetails);
            setSuccessMessage('Query has been received. Our team will contact you soon.');

            setErrorMessage('');
            // Clear the form fields
            setName('');
            setEmail('');
            setContactNo('');
            setQuery('');

        } catch (error) {

            setErrorMessage('There was an error submitting your query. Please try again later.');
            setSuccessMessage('');


        }

    };



    // Define the style object for the container
    const containerStyle = {
        backgroundImage: 'url(/meetingbg.jpg)', // Ensure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '150px' // Adjust padding as needed


    }

    return (

        <div className="form-container" style={containerStyle}>  {/* Flexbox container to arrange form and contact info side by side */}
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="heading">JOIN OPEN MIND LEARNING</h2>
                <div className="row">

                    <div className="col-lg-4">

                        <input type="text" name="text" placeholder="Your Name*" className="textgrp" onChange={(e) => { setName(e.target.value); }} required  ></input>

                    </div>
                    <div className="col-lg-4">

                        <input type="email" name="email" placeholder="Your Email*" className="textgrp" onChange={(e) => { setEmail(e.target.value); }} required></input>

                    </div>
                    <div className="col-lg-4">

                        <input type="contact" name="telno" placeholder="Contact Number*" className="textgrp" onChange={(e) => { setContactNo(e.target.value); }} required ></input>
                    </div>


                    <div className="col-lg-12 message">

                        <input type="message" name="message" placeholder="How can we help you...*" className="textgrp" onChange={(e) => { setQuery(e.target.value); }} required ></input>
                    </div>


                </div>


                <button type="submit" className="submitbutton">SEND MESSAGE NOW</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

            </form>


            <div className="contact-info">

                <ul className="formlist">
                    <li className="list">
                        <h6 className="listtext" >Contact Number</h6>
                        <span className="span">+91 78385 00561</span>
                    </li>
                    <li className="list">
                        <h6 className="listtext">Email Address</h6>
                        <span className="span">info@openmindlearning.in</span>
                    </li>
                    <li className="list">
                        <h6 className="listtext">Street Address</h6>
                        <span className="span"> 237, First Floor, Gaur City Centre, Noida Extension West, Gautam Budh Nagar, Uttar Pradesh - 201301, INDIA</span>
                    </li>
                    <li className="list">
                        <h6 className="listtext">Locations</h6>
                        <span className="span"> Delhi | Noida | Ghaziabad | Meerut</span>
                    </li>
                </ul>



            </div>


        </div>




    );
}


export default Form;
