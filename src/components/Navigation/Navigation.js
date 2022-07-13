import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/Logo.png"
import { Link } from "react-router-dom";



const Navigation = () => {
  let url = window.location.pathname;

  return (
    <>
      <style type="text/css">
        {`
    .color-navbar {
      background-color: #8c16c3;
    }
    .navbar-height{
      height:4.5em;
    }
    .letter-color {
      color:white;
      margin: 0.5em;
      padding:1.0em;
    }
    .letter-color:hover{
      background-color: #67128f;
      color:white;
      border-radius:5px;
    }
    .navbar-dark .navbar-toggler-icon {
      background-image: url("");
    }
    @media only screen and (max-width: 1200px) {
      .navbar-height{
        height:2.5em;
      }
    }
    `}
      </style>
        <Navbar collapseOnSelect expand="lg" justify variant="tabs" className="color-navbar" >
          <Container>
            <Navbar.Brand href="#home" >
              <img className="navbar-height" src={Logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <Nav className="letter-color" href="">HOMEPAGE</Nav>
                </Link>

                {url !== '/careers' ?
                  <>
                    <Nav.Link className="letter-color" href="#wahtwedo">WHAT WE DO</Nav.Link>
                    <Nav.Link className="letter-color" href="#about">ABOUT US</Nav.Link>
                  </> : null
                }
                <Link to="/careers" style={{ textDecoration: "none", color: "black" }}>
                  <Nav className="letter-color" >CAREERS</Nav>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Navigation