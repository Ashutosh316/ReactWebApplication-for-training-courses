import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import BestStudents from './cardstudents';
import BestEducation from './cardeducation';
import BestNetworking from './bestnetworking';
import CardDel from './carddelivery';
import BestTeachers from './bestteacher';

const Cardfirstcarousel = () => {
  return (
    <Carousel interval={5000}>
    <Carousel.Item>
      <Container>
        <Row>
          <Col md={4}>
            <BestStudents />
          </Col>
          <Col md={4}>
            <BestEducation />
          </Col>
          <Col md={4}>
            <BestNetworking />
          </Col>
        </Row>
      </Container>
    </Carousel.Item>
    <Carousel.Item>
      <Container>
        <Row>
          <Col md={4}>
            <CardDel />
          </Col>
          <Col md={4}>
            <BestTeachers />
          </Col>
          <Col md={4}>
            <BestStudents />
          </Col>
        </Row>
      </Container>
    </Carousel.Item>
  </Carousel>
);
};



export default Cardfirstcarousel;