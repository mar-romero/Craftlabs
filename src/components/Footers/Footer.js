import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .color-footer {
                    background-color: #8c16c3;
    }
    `}
            </style>
            <Container fluid md="auto" className="color-footer  text-white text-center ">
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