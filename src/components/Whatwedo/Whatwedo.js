import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cloud from '../../img/Cloud Solution.png'
import Enterpise from '../../img/ENTERPRISE.png'
import MobileApp from '../../img/MOBILE APPLICATIONS.png'
import IdentityMan from '../../img/Identity Management.png'



const Whatwedo = () => {

    return (
        <>
            <style type="text/css">
                {`
.text-margin{
    margin: 120px 0px 50px;
}
    `}
            </style>
            <Container id="wahtwedo">
                    <Row>
                        <Col md={{ span: 36, offset: 3 }} className="text-center text-margin">
                            <h1>WHAT WE DO</h1>
                            <h4>WE BUILD HIGH QUALITY SOFTWARE PRODUCTS</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src={Cloud} />
                                <Card.Body>
                                    <Card.Text>
                                        From Amazon to Azure, there are over 40 cloud computing providers. Our vast experience will help you architect your solution, implement identity management, application interdependence, and keep confidential data integrity safe. Our consultants are recognized as industry experts and we can assist your organization assess and build cloud-ready applications for the future.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src={Enterpise} />
                                <Card.Body>
                                    <Card.Text>
                                        Developing an enterprise scale application is challenging and critical for the success of your business, but it is part of our core business. They need to scale, perform, and integrate seamlessly into your IT architecture. Our consultants will work with you to determine the most appropriate architecture, and ensure your requirements are met. Whether you engage us to develop a world changing application, or extend its life through dedicated code-level support, we’re here to help.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src={MobileApp} />
                                <Card.Body>
                                    <Card.Text>
                                        Our focus is to provide the best user experience, and helping customers choose between native applications (iOS, Android, Windows) or Web (HTML5/CSS3) based user requirements. Our expertise in this area enable us to develop your mobile applications rapidly, securely, and cost effectively.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src={IdentityMan} />
                                <Card.Body>
                                    <Card.Text>
                                        Our identity experts help organizations to manage user accounts, identity information and security entitlements on a variety of systems and applications including Microsoft Active Directory Federation Services (AD FS), Microsoft Azure Active Directory, Microsoft Azure Access Control Service (ACS), Ping Identity PingFederate, CA SiteMinder Federation among others.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default Whatwedo;