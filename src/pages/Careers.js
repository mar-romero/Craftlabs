import React from 'react'
import Navbar from "../components/Navigation/Navigation";
import DescriptionCareers from '../components/NewCareers/DescriptionCareers';
import Footer from "../components/Footers/Footer";
import NewCareers from '../components/NewCareers/NewCareers';
const Contact = () => {
  return (
    <div style={{position: 'relative',body::after{content: '',display: 'block' ,height: 50px; }}}>
      <Navbar />
      <DescriptionCareers />
      <NewCareers />
      <Footer />
      </div>
  )
}

export default Contact