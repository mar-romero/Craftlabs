
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import uno from '../../img/1.jpg'
import dos from '../../img/2.jpg'
import tres from '../../img/3.jpg'
function Slider() {


  return (
    <>
      <style type="text/css">
        {`
    .img-slider {
      height:45.5em;

    }    
    #home{
      margin-top:6%;
      z-index:1;
    }  
    @media only screen and (max-width: 950px) {
      .img-slider {
        height:25.5em;
    }
    @media only screen and (max-width: 650px) {
      .img-slider {
        height:20.5em;
    }
    @media only screen and (max-width: 400px) {
      .img-slider {
        height:15.5em;
    }
    `}
      </style>
      <Carousel id="home">
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 img-slider"
            src={dos}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 img-slider"
            src={uno}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 img-slider"
            src={tres}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;