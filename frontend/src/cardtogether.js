import React from "react";
import ServiceCategories from "./servicecategories";
import Card from "./cardcomponent";

const Cardtogether = () => {
    // Define the style object for the container
    const containerStyle = {
        backgroundImage: 'url(/meetingbg.jpg)', // Ensure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 15px', // Adjust padding for responsiveness
    };

    return (
        <div className="together-container" style={containerStyle}>
            <div className="row">
                <div className="col-12 col-md-4">
                    <ServiceCategories />
                </div>
                <div className="col-12 col-md-4">
                    <Card
                        image="4992.jpg"
                        price="499"
                        date="February"
                        title="German Language"
                        description="Join us for our special 40-hour course to learn the foreign language German just for ₹499 only and add a new skill in your profile"
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Card
                        image="4993.jpg"
                        price="499"
                        date="February "
                        title="Adobe Premier"
                        description="Learn the Adobe Premiere course to build your video editing skills by the video editing experts. Advance your skills as YouTuber and as Digital Media Influencer"
                    />
                </div>
                <div className="col-12 col-md-4">
                    {/* Empty column for spacing */}
                </div>
                <div className="col-12 col-md-4">
                    <Card
                        image="4994.jpg"
                        price="499"
                        date="February "
                        title="Python Programming"
                        description="Join us to learn Python programming to build your skills for Data Science, Business Analytics, Artificial Intelligence, and Machine Learning, etc.."
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Card
                        image="meeting-03.jpg"
                        price="499"
                        date="February"
                        title="Flutter and Dart"
                        description="Join our special course on Hybrid Mobile App Development using Flutter and Dart. Learn to Deploy Apps on Google App Store and Mac Store."
                    />
                </div>
            </div>
        </div>
    );
}

export default Cardtogether;
