import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCogs, FaMicrochip, FaTools, FaWrench, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: 'CNC Machining',
            icon: FaCogs,
            desc: 'Our CNC Turning capabilities allow us to machine complex shafts, flanges, and heavy-duty components with high precision.',
            features: ['High Precision Turning', 'Complex Geometries', 'Hard Part Turning'],
            img: '/assets/images/CNc.png'
        },
        {
            title: 'VMC Components (4th Axis)',
            icon: FaMicrochip,
            desc: 'Equipped with 4th Axis rotary tables, our VMC setup enables simultaneous machining of complex shapes, reducing setup time.',
            features: ['Simultaneous 4-Axis', 'Complex Contouring', 'Drilling & Tapping'],
            img: '/assets/images/VMC machine.png'
        },
        {
            title: 'Tool Room & Dies',
            icon: FaTools,
            desc: 'We design and manufacture high-quality Jigs, Fixtures, and Press Tools, supporting both our production line and external clients.',
            features: ['Jigs & Fixtures', 'Press Tools', 'Die Maintenance'],
            img: '/assets/images/ToolRoom.png'
        },
        {
            title: 'Heavy Fabrication',
            icon: FaWrench,
            desc: 'We specialize in heavy structural fabrication for industrial applications, ensuring robustness and durability for critical infrastructure.',
            features: ['Structural Fabrication', 'Machine Base Frames', 'Custom Welding Solutions'],
            img: '/assets/images/Heavy Fab.png'
        }
    ];

    return (
        <div className="pt-5 mt-4">
            <section
                className="position-relative py-5 bg-secondary text-white overflow-hidden text-center"
                style={{ backgroundImage: "url('/assets/images/CNc.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-90"></div>
                <Container className="position-relative z-1 py-5">
                    <h1 className="display-3 fw-bold font-display mb-3">Products & Services</h1>
                    <p className="lead opacity-90">Comprehensive Engineering Solutions</p>
                </Container>
            </section>

            {services.map((service, index) => (
                <section key={index} className={`py-5`}>
                    <Container className="py-4">
                        <Row className={`align-items-center gy-5 ${index % 2 !== 0 ? 'flex-lg-row-reverse' : ''}`}>
                            <Col lg={6}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-white bg-opacity-75 p-4 rounded-4 shadow-sm backdrop-blur"
                                >
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-primary-blue text-white rounded-circle p-3 fs-3 me-3 shadow-sm d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                                            <service.icon />
                                        </div>
                                        <h2 className="display-6 fw-bold text-secondary mb-0">{service.title}</h2>
                                    </div>
                                    <p className="lead text-muted mb-4">{service.desc}</p>
                                    <ul className="list-unstyled">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="mb-2 d-flex align-items-center">
                                                <FaCheckCircle className="text-accent-gold me-2" />
                                                <span className="fw-medium text-secondary">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </Col>
                            <Col lg={6}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="border-0 shadow-lg overflow-hidden rounded-4">
                                        <Card.Img variant="top" src={service.img} className="img-fluid" style={{ height: '350px', objectFit: 'cover' }} />
                                    </Card>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            ))}
        </div>
    );
};

export default Services;
