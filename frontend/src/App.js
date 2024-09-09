
import './App.css';
// import { BrowserRouter} from 'react-router-dom'; 
 import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Nav from './nav';
import About from './aboutus';
import Services from './services';
import Course from './courses';
import Associate from './associate';
import Contact from './contact';
 import Footer from './footer';
//import BestStudents from './cardstudents';
//import ProductComponent from './productcomponent';
//import ImageContainer from './imagecontainer';
//import CourseFees from './coursefees';
//import BestTeachers from './bestteacher';
//import BestEducation from './cardeducation';
//import BestNetworking from './bestnetworking';
//import CardDel from './carddelivery';
 import CardCarousel from './coursecarousel';
 import Cardtogether from './cardtogether';
 import Associates from './asssociates';
// import Cardfirstcarousel from './cardcarousel';
 import SchoolProgram from './schoolprogra';
 import Organisation from './organisation';
 import Welcome from './welcome';
 import Form from './form';
import FirstCardCarousel from './firstcardcarousel';
import Login from './admin';
import Dashboard from './dashboard';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
   
    
      {/* <BestStudents/> */}
      {/* <ProductComponent/> */}
      {/* <ImageContainer/> */}
      {/* <CourseFees/> */}
      {/* <BestTeachers/> */}
      {/* <BestEducation/> */}
      {/* <BestNetworking/> */}
      {/* <CardDel/> */}
      
      <Nav/>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="coursecarousel" element={<CardCarousel />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
         
        </Routes>
      
      
      {/* <Cardfirstcarousel/> */}
      <FirstCardCarousel/>
      <About/>
    
      
      <Cardtogether />
     
      
      <SchoolProgram/>
      <CardCarousel/>
      <Organisation/> 
      <Associates/> 
      
       <Form/>
       <Footer/>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
