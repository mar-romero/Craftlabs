import React from 'react'
import Navbar from "../components/Navigation/Navigation";
import DescriptionCareers from '../components/NewCareers/DescriptionCareers';
import Footer from "../components/Footers/Footer";
import NewCareers from '../components/NewCareers/NewCareers';
const Contact = () => {
  return (
    <div className="min-vh-100 d-flex flex-column 
    justify-content-between">
      <div>
        <Navbar />
        <DescriptionCareers />
        <NewCareers />
      </div>
      <Footer />
    </div>
  )
}

export default Contact