import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center pt-5">
            <Container>
                <Row className="align-items-center g-5">
                    {/* Left Side (Blue Area) - Branding */}
                    <Col lg={5} className="text-center text-lg-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="d-flex flex-column align-items-center"
                        >
                            <div className="bg-white p-3 rounded-circle shadow-lg mb-4" style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src="/assets/images/logo.png"
                                    alt="Aara Engineering"
                                    className="img-fluid"
                                />
                            </div>

                            {/* Branding - Royal Blue Everywhere */}
                            <h1 className="fw-bold font-display display-3 mb-1 text-primary">AARA</h1>

                            <h2 className="fw-bold font-display h3 mb-4 text-accent-gold">ENGINEERING WORKS</h2>

                            <p className="fst-italic fs-5 opacity-75 mb-4 text-primary">Making Metal Work For You...</p>

                            {/* GSTIN - Royal Blue Border/Text Everywhere */}
                            <div className="d-inline-block border border-primary text-primary px-4 py-2 rounded-pill small fw-bold tracking-wider mb-4">
                                GSTIN : 33ARXPJ663M1Z0
                            </div>
                        </motion.div>
                    </Col>

                    {/* Right Side (White Area) - Contact/Info */}
                    <Col lg={5} className="text-secondary text-center text-lg-start mt-5 mt-lg-0">
                        {/* Creative Animated Text for Description */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                            className="mb-5"
                        >
                            <h3 className="h4 fw-bold text-primary-blue lh-base letter-spacing-1 font-display">
                                {
                                    "MANUFACTURER OF PRECISION MACHINED COMPONENTS FOR AUTOMOBILE AND GENERAL ENGINEERING INDUSTRIES".split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            className="d-inline-block me-2"
                                        >
                                            {word}
                                        </motion.span>
                                    ))
                                }
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="ps-lg-2"
                        >
                            <div className="mb-5">
                                <h3 className="fw-bold text-primary-blue display-5 mb-2">JAYA KUMAR C</h3>
                                <p className="text-muted fw-bold h4 text-uppercase letter-spacing-2">Marketing Head</p>
                            </div>

                            <div className="d-flex flex-column gap-4">
                                <motion.div whileHover={{ x: 10 }} className="d-flex align-items-center gap-4 group">
                                    <div className="bg-primary-blue text-white p-3 rounded-circle shadow-sm">
                                        <FaPhone size={24} />
                                    </div>
                                    <span className="fw-bold h5 mb-0">+91-9710 111 579</span>
                                </motion.div>

                                <motion.div whileHover={{ x: 10 }} className="d-flex align-items-center gap-4 group">
                                    <div className="bg-primary-blue text-white p-3 rounded-circle shadow-sm">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <span className="fw-bold h5 mb-0">aaraengineering26@gmail.com</span>
                                </motion.div>

                                <motion.div whileHover={{ x: 10 }} className="d-flex align-items-start gap-4 group">
                                    <div className="bg-primary-blue text-white p-3 rounded-circle shadow-sm mt-1">
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <span className="fw-bold h5 mb-0 lh-base">
                                        No.1/36 Brahmin Street,<br />
                                        Korattur, Chennai - 600 080.
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
