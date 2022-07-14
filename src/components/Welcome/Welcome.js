import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Partners from './Partners';
import { FaTwitterSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Welcome = () => {
    return (
        <>
            <style type="text/css">
                {`
    icon-size{
        height:4.5em;
    }
    `}
            </style>
            <Container fluid="md" id="about">
                <Row>
                    <Col className="text-center text-margin">
                        <h1>Welcome to our website</h1>
                        <p>We are software artisans passionate about what we do: help you building awesome solutions. With an agile process that is built on top of the best engineering practices.
                            Our staff is comprised of full-stack developers and architects, who are versed in the very latest technologies and love what they do!
                            We foster a culture of diversity and empathy, with strong communication skills that enable our staff to deeply understand our customer’s desires.
                            While we promote Agile Practices, our consultants have considerable enterprise experience, and will easily adapt to your methodologies, processes, and toolsets.
                            We believe transparent, honest and fluent communication, both remotely and on-site is a key factor to the success of any project.
                            <br /><b>Our happy clients are our best credentials. Let us do a trial to show our skills.</b>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card>
                            <Card.Header as="h5" className="text-center" >CONTACT US</Card.Header>
                            <Card.Body>
                                <Card.Title className="text-center">Have a project in mind</Card.Title>
                                <Card.Text>
                                    <Col className="text-center margin-text">
                                        <h5>WE'D LOVE TO CRAFT IT TOGETHER</h5>
                                        <h5>Mail: info@craftlabs.net</h5>
                                        <a className="text-center margin-text" href="https://twitter.com/thecraftlabs"><FaTwitterSquare size="100px" color="purple" /></a>
                                    </Col>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Partners />
            </Container>
        </>
    )
}

export default Welcome