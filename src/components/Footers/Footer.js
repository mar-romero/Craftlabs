import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <>

            <Container style={{position: 'absolute', bottom:0}} fluid md="auto" className="color-navbar text-white text-center align-items-start text-margin2">
                <Row>
                    <Col>
                        © CRAFTLABS. ALL RIGHTS RESERVED.
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer