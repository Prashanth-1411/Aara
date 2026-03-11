import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3 mt-auto position-relative" style={{ zIndex: 10 }}>
            <Container>
                <Row className="gy-4">
                    {/* Left Column - Sits on Blue Wave - White Text */}
                    <Col md={4} className="text-white">
                        <div className="d-flex align-items-center mb-3">
                            <img src="/assets/images/logo.png" alt="Logo" height="50" className="bg-white p-1 rounded" />
                        </div>
                        <h5 className="font-display fw-bold">Aara Engineering Works</h5>
                        <p className="small opacity-75">
                            Delivering excellence in precision machining and fabrication since 2010. ISO 9001:2015 Certified.
                        </p>
                    </Col>

                    {/* Middle Column - Transition Area - Dark Text */}
                    <Col md={2} xs={6} className="text-secondary offset-md-1">
                        <h6 className="fw-bold text-primary-blue mb-3">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#home" className="text-secondary text-decoration-none hover-text-primary">Home</a></li>
                            <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none hover-text-primary">About Us</a></li>
                            <li className="mb-2"><a href="#services" className="text-secondary text-decoration-none hover-text-primary">Services</a></li>
                            <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none hover-text-primary">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Middle Column - Dark Text */}
                    <Col md={2} xs={6} className="text-secondary">
                        <h6 className="fw-bold text-primary-blue mb-3">Services</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2">CNC Machining</li>
                            <li className="mb-2">VMC 4th Axis</li>
                            <li className="mb-2">Heavy Fabrication</li>
                            <li className="mb-2">Tool Room</li>
                        </ul>
                    </Col>

                    {/* Right Column - Sits on White - Dark Text */}
                    <Col md={3} className="text-secondary">
                        <h6 className="fw-bold text-primary-blue mb-3">Contact Info</h6>
                        <div className="small">
                            <div className="d-flex mb-2"><i className="fas fa-user me-3 mt-1 text-primary-blue" style={{ width: '16px' }}></i> <span>JAYA KUMAR C</span></div>
                            <div className="d-flex mb-2"><i className="fas fa-map-marker-alt me-3 mt-1 text-primary-blue" style={{ width: '16px' }}></i> <span>No.1/36 Brahmin Street, Korattur, Chennai - 600 080</span></div>
                            <div className="d-flex mb-2"><i className="fas fa-phone me-3 mt-1 text-primary-blue" style={{ width: '16px' }}></i> <span>+91-9710 111 579</span></div>
                            <div className="d-flex mb-2"><i className="fas fa-envelope me-3 mt-1 text-primary-blue" style={{ width: '16px' }}></i> <span>Marketing@aaraengineerings.com</span></div>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4 opacity-25 border-secondary" />

                <div className="text-center small text-secondary opacity-75">
                    &copy; {new Date().getFullYear()} Aara Engineering Works. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
