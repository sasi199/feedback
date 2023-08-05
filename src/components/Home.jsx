import React from 'react';
import logo from './image/logo.jpeg';
import './Home.css';
import Forms from './Forms';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <img src={logo} alt="Digital Marketing Course Logo" className="logo" />
      <h1 className="home-container">Digital Marketing Course Feedback Form</h1>
      <p className='para'>
        We value your feedback, as it helps us improve our program and provide a better learning experience.
        Please take a few moments to complete this feedback form. Your responses will remain anonymous.
      </p>
      <h4 className="course-name">Course Name: <span>Digital Marketing Course</span></h4>
      {/* Include the Forms component */}
      <Forms />
      <Footer />
    </div>
  );
};

export default Home;
