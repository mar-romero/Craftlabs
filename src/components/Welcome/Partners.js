import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import gsk from '../../img/gsk.png'
import mic from '../../img/mic.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Partners = () => {
    return (
        <>
        <style type="text/css">
        {`
    .color-navbar {
      background-color: #8c16c3;
      
    }
    `}
      </style>
            <Row >
                <Col md={{ span: 36, offset: 3 }} className="text-center text-margin">
                    <h3>PARTNERS</h3>
                </Col>
            </Row>
            <CardGroup >
                <Card className="border-0">
                    <Card.Img variant="top" src={gsk} />
                </Card>
            </CardGroup>
        </>
    )
}

export default Partners