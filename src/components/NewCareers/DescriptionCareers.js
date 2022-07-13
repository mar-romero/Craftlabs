import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DescriptionCareers = () => {
    return (
        <>
            <Container fluid="md" id="about">
                <Row>
                    <Col className="text-center text-margin">
                        <h1>Join our company and prepare for big changes</h1>
                        <p>We are software artisans passionate about what we do: help you building awesome solutions. With an agile process that is built on top of the best engineering practices.
                            Our staff is comprised of full-stack developers and architects, who are versed in the very latest technologies and love what they do!
                            We foster a culture of diversity and empathy, with strong communication skills that enable our staff to deeply understand our customer’s desires.
                            While we promote Agile Practices, our consultants have considerable enterprise experience, and will easily adapt to your methodologies, processes, and toolsets.
                            We believe transparent, honest and fluent communication, both remotely and on-site is a key factor to the success of any project.
                            <br /><b>Our happy clients are our best credentials. Let us do a trial to show our skills.</b>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DescriptionCareers