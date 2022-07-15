import React, { useState } from "react";
import styled from "styled-components";
import {
  Responsive1900,
  Responsive1200,
  Responsive800,
  Responsive450,
} from "../../responsive";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { sliderItems } from "../../img/data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Responsive1900({ marginBottom: "-10vh" })};
  ${Responsive1200({ marginBottom: "-30vh" })};
  ${Responsive800({ marginBottom: "-50vh" })};
  ${Responsive450({ marginTop: "5vh" })};
  `;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  ${Responsive800({ height: "30px" })};
  ${Responsive800({ width: "30px" })};
  ${Responsive450({ width: "25px" })};
  ${Responsive450({ height: "25px" })};
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${Responsive1900({ margin: "350px 2px" })};
  ${Responsive1200({ margin: "300px 2px" })};
  ${Responsive800({ margin: "250px 2px" })};
  ${Responsive450({ margin: "200px 2px" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
  width: 100vw;
  height: 100vh;
  ${Responsive1900({  height: "90vh" })};
  ${Responsive800({  height: "60vh" })};
  ${Responsive450({  height: "55vh" })};
  align-items: center;
  
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;

`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  margin-top: 6%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin: 290px 70px;
  position: absolute;
  top: 10px;
  left: 10px;
  color:white;
  text-shadow: -3px 3px black;
  ${Responsive1900({ margin: "220px 0 0 70px" })};
  ${Responsive1200({ margin: "180px 0 0 70px" })};
  ${Responsive800({ margin: "130px 0 0 30px" })};
  ${Responsive450({ margin: "50px 0 0 10px" })};
  ${Responsive450({ textShadow: "-1px 1px black;" })};
`;

const Title = styled.div`
  font-size: 70px;
  color:white;
  ${Responsive1900({ fontSize: "60px"})};
  ${Responsive1200({ fontSize: "40px"})};
  ${Responsive800({ fontSize: "40px"})};
  ${Responsive450({ fontSize: "18px"})};
`;

const Desc = styled.p`
  width: 50vw;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color:white;
  ${Responsive1900({ fontSize: "18px"})};
  ${Responsive1200({ fontSize: "16px"})};
  ${Responsive800({ fontSize: "16px"})};
  ${Responsive450({ fontSize: "10px"})};
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container id="home">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiFillStepBackward />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiFillStepForward />
      </Arrow>
    </Container>
  );
};

export default Slider;