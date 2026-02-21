import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCog, FaCogs } from 'react-icons/fa';

const Infrastructure = () => {
    return (
        <div className="pt-5 mt-4">
            <section className="position-relative py-5 text-center"
                style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container className="position-relative z-1 py-5">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="display-3 fw-bold font-display mb-3 text-secondary">Capabilities</h1>
                        <p className="lead opacity-90 text-muted">Built for Capacity, Designed for Precision</p>
                    </motion.div>
                </Container>
            </section>

            {/* Highlights */}
            <section className="py-5">
                <Container className="py-4">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold text-secondary mb-3">Machining Capability</h2>
                        <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                            Our state-of-the-art facility is equipped with heavy-duty machinery capable of handling large-scale production runs and intricate custom jobs.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={6}>
                            <motion.div whileHover={{ y: -5 }} className="h-100 p-4 bg-light border rounded-4 shadow-sm">
                                <h3 className="h4 fw-bold text-primary-blue mb-3">VMC 4th Axis Technology</h3>
                                <p className="text-muted mb-4">Advanced vertical machining centers with rotary tables for multi-face machining in a single setup.</p>
                                <div className="bg-white rounded p-3 mb-4 text-center text-muted border">VMC Machine Image Placeholder</div>
                                <ul className="list-unstyled">
                                    <li className="mb-2 d-flex align-items-center"><FaCog className="text-accent-gold me-2" /> High-Speed Spindles</li>
                                    <li className="mb-2 d-flex align-items-center"><FaCog className="text-accent-gold me-2" /> Renishaw Probing</li>
                                </ul>
                            </motion.div>
                        </Col>
                        <Col md={6}>
                            <motion.div whileHover={{ y: -5 }} className="h-100 p-4 bg-light border rounded-4 shadow-sm">
                                <h3 className="h4 fw-bold text-primary-blue mb-3">CNC Turning Centers</h3>
                                <p className="text-muted mb-4">Robust turning centers for shafts and flanges, featuring auto-bar feeders for high-volume efficiency.</p>
                                <div className="bg-white rounded p-3 mb-4 text-center text-muted border">CNC Turning Image Placeholder</div>
                                <ul className="list-unstyled">
                                    <li className="mb-2 d-flex align-items-center"><FaCog className="text-accent-gold me-2" /> Heavy Duty Turning</li>
                                    <li className="mb-2 d-flex align-items-center"><FaCog className="text-accent-gold me-2" /> Live Tooling Capable</li>
                                </ul>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Capacity List Table */}
            <section className="py-5 bg-secondary text-white">
                <Container className="py-4">
                    <h2 className="display-6 fw-bold text-center mb-5">Machine Capacity List</h2>
                    <div className="bg-white rounded-3 overflow-hidden shadow-lg">
                        <Table responsive hover className="mb-0 text-secondary">
                            <thead className="bg-primary-blue text-white">
                                <tr>
                                    <th className="p-3">Machine Type</th>
                                    <th className="p-3">Specification / Model</th>
                                    <th className="p-3">Quantity</th>
                                    <th className="p-3">Make</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: 'VMC (4th Axis)', spec: 'X-800, Y-500, Z-500', qty: '03', make: 'Global Leaders' },
                                    { type: 'CNC Turning Center', spec: 'Dia 300mm x 500mm Length', qty: '05', make: 'LMW / Ace' },
                                    { type: 'Surface Grinder', spec: '600mm x 300mm', qty: '02', make: 'Precision' },
                                    { type: 'Milling Machine', spec: 'Universal Milling', qty: '02', make: 'Conventional' },
                                    { type: 'TIG/MIG Welding', spec: 'Inverter Based', qty: '04', make: 'Esab' },
                                ].map((row, index) => (
                                    <tr key={index}>
                                        <td className="p-3 fw-bold">{row.type}</td>
                                        <td className="p-3">{row.spec}</td>
                                        <td className="p-3 fw-bold text-primary-blue">{row.qty}</td>
                                        <td className="p-3">{row.make}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Infrastructure;
