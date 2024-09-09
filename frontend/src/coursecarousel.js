import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import CourseCard from "./coursecard";
const courses =[
     { image: 'course-01.jpg', description: 'Digital Marketing is highly demanding course that gives flexibility to go for the job or build your own startup.', rating: 5, price: '₹19999' },
    { image: 'course-02.jpg', description: 'Hybrid Mobile App Development is the key course taken by many students who want to go for Full Stack Development.', rating: 5,price: '₹14999' },
    { image: 'course-03.jpg', description: 'Adobe Premiere foundation course builds understanding of video editing. It is 20 hours course that is must for any YouTuber.', rating: 5, price: '₹9999' },
    { image: 'meeting-03.jpg', description: 'CUET Crash Course is most demanding course by XI and XII students in online, offline and campus modes.',rating: 5, price: '₹5999' },
    { image: 'meeting-04.jpg', description: 'Mean Stack developer is one of the demanding cource among the Btech & MCA Students.', rating: 5, price: '₹14999' },
    { image: 'course-03.jpg', description: 'JEE Mains Preparation is one of highest demanding courses among the students of XI and XII on online and offline modes', rating: 5, price: '₹90000'},
];

const CardCarousel=()=>{
  const firstSlideImages = courses.slice(0, 4);
  const secondSlideImages = courses.slice(2);

  const containerStyle = {
    backgroundImage: 'url(/meetingbg.jpg)', // Ensure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px' // Adjust padding as needed
};
    return(
         
        <div className="carousel-container"  style={containerStyle}>
        <h2 className="carousel-heading">Our Popular Offline Courses</h2>
        <Carousel interval={4000}>
            <Carousel.Item>
                <Container>
                    <Row>
                        {firstSlideImages.map((course, index) => (
                            <Col key={index} md={3}>
                                <CourseCard 
                                    image={course.image}
                                    description={course.description}
                                    rating={course.rating}
                                    price={course.price}
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
                            <Col key={index} md={3}>
                                <CourseCard 
                                    image={course.image}
                                    description={course.description}
                                    rating={course.rating}
                                    price={course.price}
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
export default CardCarousel;