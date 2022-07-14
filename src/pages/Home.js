import React from 'react'
import Navbar from "../components/Navigation/Navigation";
import Slider from "../components/Slider/Slider"
import Whatwedo from "../components/Whatwedo/Whatwedo";
import Welcome from "../components/Welcome/Welcome";
import Footer from "../components/Footers/Footer";


const Home = () => {
  return (
<div className="min-vh-100 d-flex flex-column 
    justify-content-between">
      <div>
        <Navbar />
        <Slider id="home"/>
        <Whatwedo id="about" />
        <Welcome id="wahtwedo" />
      </div>
      <Footer />
    </div>
  )
}

export default Home