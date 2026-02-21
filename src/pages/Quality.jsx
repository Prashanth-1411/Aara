import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCertificate, FaRulerCombined, FaClipboardCheck, FaSearch, FaRulerVertical, FaCube, FaCompass, FaCheckDouble } from 'react-icons/fa';

const Quality = () => {
    return (
        <div className="pt-5 mt-4">
            <section className="position-relative py-5 text-center"
                style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container className="position-relative z-1 py-5">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <h1 className="display-3 fw-bold font-display mb-3 text-secondary">Quality Assurance</h1>
                        <p className="lead opacity-90 text-muted">Precision is not just a promise, it's our policy.</p>
                    </motion.div>
                </Container>
            </section>

            {/* Policy Box */}
            <section className="py-5">
                <Container className="py-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto bg-light border border-primary rounded-4 p-5 text-center shadow-lg position-relative mt-5"
                        style={{ maxWidth: '800px' }}
                    >
                        <div className="position-absolute top-0 start-50 translate-middle bg-white p-3 rounded-circle border border-primary text-primary-blue display-4 shadow-sm">
                            <FaCertificate />
                        </div>
                        <h2 className="h3 fw-bold text-secondary mb-4 mt-3">Our Quality Policy</h2>
                        <p className="fs-5 fst-italic text-muted">
                            "To strive for total customer satisfaction by delivering high-precision engineering components on time, every time, through continual improvement of our quality management systems."
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Precision Standards */}
            <section className="py-5 bg-secondary text-white">
                <Container className="py-4">
                    <h2 className="display-6 fw-bold text-center mb-5">Uncompromising Precision</h2>
                    <Row className="g-4 text-center">
                        <Col md={4}>
                            <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-4 rounded-3 h-100 backdrop-blur">
                                <div className="text-accent-gold display-4 mb-3"><FaRulerCombined /></div>
                                <h3 className="h4 fw-bold">10-15 Microns</h3>
                                <p className="opacity-75">Consistent accuracy on all CNC and VMC machined components.</p>
                            </motion.div>
                        </Col>
                        <Col md={4}>
                            <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-4 rounded-3 h-100 backdrop-blur">
                                <div className="text-accent-gold display-4 mb-3"><FaClipboardCheck /></div>
                                <h3 className="h4 fw-bold">100% Inspection</h3>
                                <p className="opacity-75">Rigorous dimensional checks before dispatch to ensure zero defects.</p>
                            </motion.div>
                        </Col>
                        <Col md={4}>
                            <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-4 rounded-3 h-100 backdrop-blur">
                                <div className="text-accent-gold display-4 mb-3"><FaSearch /></div>
                                <h3 className="h4 fw-bold">Traceability</h3>
                                <p className="opacity-75">Full material and process traceability for aerospace and defense parts.</p>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Inspection Instruments */}
            <section className="py-5 bg-white">
                <Container className="py-4">
                    <h2 className="display-6 fw-bold text-center text-secondary mb-5">Inspection Instruments</h2>
                    <Row className="g-4 justify-content-center">
                        {[
                            { name: 'Digital Height Master', icon: FaRulerVertical },
                            { name: 'Granite Surface Plate', icon: FaCube },
                            { name: 'Bore Gauges', icon: FaCompass },
                            { name: 'Thread Plug/Ring Gauges', icon: FaCheckDouble },
                        ].map((item, index) => (
                            <Col xs={6} md={3} key={index}>
                                <motion.div whileHover={{ y: -5 }} className="text-center p-4 bg-light rounded-3 h-100 shadow-sm">
                                    <div className="text-primary-blue display-5 mb-3"><item.icon /></div>
                                    <h5 className="fw-bold text-secondary">{item.name}</h5>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Quality;
