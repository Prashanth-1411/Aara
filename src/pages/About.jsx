import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaCar, FaPlane, FaCogs, FaIndustry, FaBolt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="pt-5 mt-4">
            {/* Page Header */}
            <section className="position-relative py-5 text-white overflow-hidden text-center"
                style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container className="position-relative z-1 py-5">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="display-3 fw-bold font-display mb-3 text-secondary">About Us</h1>
                        <p className="lead opacity-90 text-muted">Driving Innovation in Precision Engineering</p>
                    </motion.div>
                </Container>
            </section>

            {/* Company Profile */}
            <section className="py-5">
                <Container className="py-4">
                    <Row className="align-items-center gy-5">
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                                <h2 className="display-6 fw-bold text-secondary mb-4">Company Profile</h2>
                                <p className="text-muted lead mb-4">
                                    Aara Engineering is a distinguished name in the field of precision machining and heavy engineering based in Chennai, India. Established with a commitment to quality and innovation, we serve as a critical partner to major OEMs.
                                </p>
                                <p className="text-muted">
                                    Our core strength lies in our ability to handle complex components requiring high precision (10-15 microns) using advanced CNC and VMC (4th Axis) technology. Beyond machining, we offer comprehensive solutions including Tool Room services and specialized MRO services.
                                </p>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                                <div className="text-center p-4 border rounded-4 shadow-sm">
                                    <img src="/assets/images/logo.png" alt="Aara Engineering Logo" className="img-fluid" style={{ maxHeight: '250px' }} />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Vision & Mission */}
            <section className="py-5 bg-light">
                <Container className="py-4">
                    <Row className="g-4">
                        <Col md={6}>
                            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="h-100 border-0 shadow-lg p-4">
                                    <Card.Body>
                                        <div className="text-primary-blue fs-1 mb-3"><FaEye /></div>
                                        <Card.Title className="h3 fw-bold mb-3">Our Vision</Card.Title>
                                        <Card.Text className="text-muted">
                                            To be a globally recognized leader in precision engineering, setting benchmarks for quality, reliability, and technological advancement in the manufacturing sector.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col md={6}>
                            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="h-100 border-0 shadow-lg p-4">
                                    <Card.Body>
                                        <div className="text-accent-gold fs-1 mb-3"><FaBullseye /></div>
                                        <Card.Title className="h3 fw-bold mb-3">Our Mission</Card.Title>
                                        <Card.Text className="text-muted">
                                            To deliver superior engineering solutions that enhance our clients' operational efficiency through precision manufacturing, timely delivery, and continuous improvement.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Industries Served */}
            <section className="py-5 bg-white text-center">
                <Container className="py-4">
                    <h2 className="display-6 fw-bold text-secondary mb-5">Industries We Serve</h2>
                    <Row className="g-4 justify-content-center">
                        {[
                            { icon: FaCar, name: 'Automobile' },
                            { icon: FaPlane, name: 'Aerospace' },
                            { icon: FaCogs, name: 'General Engg' },
                            { icon: FaBolt, name: 'Power & Energy' },
                        ].map((item, index) => (
                            <Col xs={6} md={2} key={index}>
                                <motion.div whileHover={{ scale: 1.1 }} className="p-4 border rounded-3 shadow-sm h-100">
                                    <div className="text-primary-blue fs-1 mb-3"><item.icon /></div>
                                    <h5 className="fw-bold text-secondary fs-6">{item.name}</h5>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default About;
