import React from 'react';
import './video.css';

const VideoBackground = ({ children }) => {
    return (
        <div className="video-background">
            <video autoPlay muted loop className="background-video">
                <source src="/course-video.mp4" type="video/mp4" />
                {/* Add other video formats here if needed */}
            </video>
            <div className="video-overlay">
                {children}
            </div>
        </div>
    );
}

export default VideoBackground;
