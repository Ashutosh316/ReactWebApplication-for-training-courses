import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import FirstCard from "./firstcard";
const coursecard =[
     { image: 'logo.png', title: 'Best Students', description: ' We prepare best students to deliver best from them for their assigned roles and responsibilities in an organization.' },
    { image: 'logo.png', title: 'Best Education', description: ' We provide best Education as per industry standards to fill the gap between demand and supply' },
    { image: 'logo.png', title: 'Best Networking', description: ' We provide best networking among the students, teachers and resource personsso that they can help each other.'},
    { image: 'logo.png', title: 'Delivery Mode', description: ' We train the students using hybrid mode using campus training and online trainings.'},
    {image: 'logo.png', title: 'Best Teachers', description: ' We provide best teachers having good domain knowledge and experience in that domain to prepare best students.'},
];
const containerStyle = {
    backgroundImage: 'url(/meetingbg.jpg)', // Ensure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '130px', // Adjust padding as needed
    width: '100vw',  // Full width of viewport
    
    
};
  
const FirstCardCarousel=()=>{
  const firstSlideImages = coursecard.slice(0, 3);
  const secondSlideImages = coursecard.slice(2);
    return(
       <div className="firstcara-container" style={containerStyle}>
        <Carousel interval={4000}>
            <Carousel.Item>
            <Container>
                    <Row>
                        {firstSlideImages.map((course, index) => (
                            <Col key={index}  xs={12} sm={6} md={4}>
                                <FirstCard 
                                    image={course.image}
                                    title={course.title}
                                    description={course.description}
                                   
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
            <Container> 
                    <Row>
                        {secondSlideImages.map((course, index) => (
                            <Col key={index}  xs={12} sm={6} md={4}>
                                <FirstCard 
                                    image={course.image}
                                    title={course.title}
                                    description={course.description}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
        </div>
       
    );
}
export default FirstCardCarousel;