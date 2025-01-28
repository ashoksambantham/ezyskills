import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import CreateAccount from './Pages/Singup/Singup';
import CourseSelector from './Pages/CourseSelector/CourseSelector';
import FAQ from './Pages/Faq/Faq';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Course from './Pages/courses/course';
import ContactUs from './Pages/ContactUs/ContactUs';
import Aboutus from './Pages/AboutUs/aboutus';

const theme = createTheme();
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once
      // easing: 'ease-out-back', // Easing effect
    });
  }, []);
  return (
    <BrowserRouter basename='/ezyskills'>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/singup' element={<CreateAccount />} />
          <Route path='/courseselector' element={<CourseSelector />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/courses' element={<Course />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
