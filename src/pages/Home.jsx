import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

const Home = () => {
    // Service Data
    const services = [
        { title: 'CNC Machining', img: '/assets/images/CNc.png', desc: 'High-precision turning and milling.' },
        { title: 'VMC 4th Axis', img: '/assets/images/VMC machine.png', desc: 'Complex geometrics with multi-axis precision.' },
        { title: 'Heavy Fabrication', img: '/assets/images/Heavy Fab.png', desc: 'Robust structural fabrication solutions.' }
    ];

    return (
        <div className="bg-light">
            <HeroSection />

            {/* Services Preview Section */}
            <section id="services" className="py-5">
                <Container>
                    <div className="text-center mb-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h6 className="text-accent-gold text-uppercase fw-bold letter-spacing-2">Our Expertise</h6>
                            <h2 className="display-5 fw-bold font-display text-primary-blue">Engineering Solutions</h2>
                        </motion.div>
                    </div>

                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-100 border-0 shadow-sm hover-shadow-lg transition-all card-hover-effect">
                                        <div className="overflow-hidden" style={{ height: '200px' }}>
                                            <Card.Img
                                                variant="top"
                                                src={service.img}
                                                className="h-100 w-100 object-fit-cover transition-transform duration-500 hover-scale"
                                            />
                                        </div>
                                        <Card.Body className="text-center p-4">
                                            <Card.Title className="fw-bold font-display text-secondary">{service.title}</Card.Title>
                                            <Card.Text className="text-muted small">
                                                {service.desc}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* About Preview */}
            <section id="about" className="py-5 bg-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <img src="/assets/images/logo.png" alt="About Aara" className="img-fluid mb-4 mb-md-0" style={{ maxHeight: '300px' }} />
                            </motion.div>
                        </Col>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h6 className="text-accent-gold text-uppercase fw-bold letter-spacing-2">About Us</h6>
                                <h2 className="display-6 fw-bold font-display text-primary-blue mb-4">Excellence in Precision</h2>
                                <p className="lead text-secondary opacity-75">
                                    Trusted partner for major OEMs in Aerospace, Defense, and Automobile sectors since 2010.
                                </p>
                                <p className="text-muted mb-4">
                                    We combine state-of-the-art infrastructure with a skilled workforce to deliver components with 10-15 micron accuracy.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">Learn More</button>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;
