import React from 'react'
import Navbar from "../components/Navigation/Navigation";
import Slider from "../components/Slider/Slider"
import Whatwedo from "../components/Whatwedo/Whatwedo";
import Welcome from "../components/Welcome/Welcome";
import Footer from "../components/Footers/Footer";


const Home = () => {
  return (

    <div style={{position: 'relative'}}>
      <Navbar />
      <Slider />
      <Whatwedo id="about" />
      <Welcome id="wahtwedo" />
      <Footer />
    </div>
  )
}

export default Home