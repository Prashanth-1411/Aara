import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUserTie, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const BACKEND_URL = 'http://localhost:5000/api/inquiries';
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfQHNlrvlTkCoN0175hqveeXGJYI16m1jMMFwHZw3tyM0yigVBDFg1fKsw24uTOKtjUQ/exec';

        try {
            // Function to handle MySQL submission
            const submitToMySQL = async () => {
                try {
                    const response = await fetch(BACKEND_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                    });
                    return response.ok;
                } catch (err) {
                    console.error('MySQL Submission Error:', err);
                    return false;
                }
            };

            // Function to handle Google submission
            const submitToGoogle = async () => {
                try {
                    const response = await fetch(SCRIPT_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                    });
                    return true; // With no-cors, we assume sent if no error thrown
                } catch (err) {
                    console.error('Google Submission Error:', err);
                    return false;
                }
            };

            // Run both submissions
            const [mysqlSuccess, googleSuccess] = await Promise.all([
                submitToMySQL(),
                submitToGoogle()
            ]);

            if (mysqlSuccess || googleSuccess) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                console.log('Submission Results:', { mysqlSuccess, googleSuccess });
            } else {
                throw new Error('All submission attempts failed');
            }

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Submit Handler Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-5 mt-4">
            {/* Hero Section */}
            <section
                className="position-relative py-5 bg-primary text-white text-center overflow-hidden"
                style={{
                    backgroundImage: "url('/assets/images/ToolRoom.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '40vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-75" style={{ mixBlendMode: 'multiply' }}></div>
                <Container className="position-relative z-1">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="display-3 fw-bold font-display mb-3"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lead opacity-90 fw-light"
                    >
                        Get in touch for precision engineering solutions.
                    </motion.p>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="gy-5">
                        {/* Contact Info */}
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="display-6 fw-bold text-secondary mb-5">Reach Us</h2>
                                <div className="d-flex flex-column gap-4">
                                    {/* Contact Person */}
                                    <div className="d-flex align-items-start gap-4 group">
                                        <div className="bg-light text-primary rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                            <FaUserTie />
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold text-secondary mb-1">Contact Person</h3>
                                            <p className="h5 fw-bold text-dark mb-0">JAYA KUMAR C</p>
                                            <p className="text-muted small">Marketing Head</p>
                                        </div>
                                    </div>

                                    {/* Visit Us */}
                                    <div className="d-flex align-items-start gap-4 group">
                                        <div className="bg-light text-primary rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold text-secondary mb-1">Visit Us</h3>
                                            <p className="text-dark lead mb-0">
                                                No.1/36 Brahmin Street,<br /> Korattur, Chennai - 600 080.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email Us */}
                                    <div className="d-flex align-items-center gap-4 group">
                                        <div className="bg-light text-primary rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold text-secondary mb-1">Email Us</h3>
                                            <p className="text-dark lead mb-0">aaraengineering26@gmail.com</p>
                                        </div>
                                    </div>

                                    {/* Call Us */}
                                    <div className="d-flex align-items-center gap-4 group">
                                        <div className="bg-light text-primary rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                            <FaPhone />
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold text-secondary mb-1">Call Us</h3>
                                            <p className="text-dark lead mb-0">+91-9710 111 579</p>
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="d-flex align-items-center gap-4 group">
                                        <div className="bg-success text-white rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                            <FaWhatsapp />
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold text-secondary mb-1">WhatsApp</h3>
                                            <a
                                                href="https://wa.me/919710111579"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-success lead mb-0 text-decoration-none fw-bold"
                                            >
                                                Chat with us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>

                        {/* Form */}
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-light p-5 rounded-4 shadow-lg h-100"
                            >
                                <h2 className="h3 fw-bold text-secondary mb-4">Send a Message</h2>

                                {status === 'success' && (
                                    <Alert variant="success" className="rounded-3 border-0 shadow-sm d-flex align-items-center mb-4">
                                        <FaCheckCircle className="me-2 fs-4" />
                                        Inquiry sent successfully! We'll get back to you soon.
                                    </Alert>
                                )}

                                {status === 'error' && (
                                    <Alert variant="danger" className="rounded-3 border-0 shadow-sm mb-4">
                                        Something went wrong. Please try again or call us directly.
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="fw-medium text-secondary">Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                    className="py-3 rounded-3 border-0 shadow-sm"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="fw-medium text-secondary">Phone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91..."
                                                    required
                                                    className="py-3 rounded-3 border-0 shadow-sm"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-medium text-secondary">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@company.com"
                                            required
                                            className="py-3 rounded-3 border-0 shadow-sm"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium text-secondary">Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="How can we help you?"
                                            required
                                            className="py-3 rounded-3 border-0 shadow-sm"
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                        className="w-100 rounded-pill fw-bold py-3 shadow-sm hover-scale d-flex align-items-center justify-content-center"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Spinner animation="border" size="sm" className="me-2" />
                                                Sending...
                                            </>
                                        ) : 'Send Inquiry'}
                                    </Button>
                                </Form>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="position-relative" style={{ height: '450px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9583740325083!2d80.1773022!3d13.101823600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52635faf571087%3A0x4bc33a46fa757f80!2sSELVAM%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1771344028431!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aara Engineering Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
