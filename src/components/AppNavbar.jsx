import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AppNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}
            variant={scrolled ? "light" : "dark"} // Dark variant for white text on blue background
        >
            <Container fluid className="px-5">
                {/* No logo in Navbar on Home page as it's in Hero, but we can keep it for scrolling */}
                <Navbar.Brand as={Link} to="/" className={`d-flex align-items-center gap-3 ${scrolled ? 'd-flex' : 'd-none'}`}>
                    <img
                        src="/assets/images/logo.png"
                        width="40"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Aara Engineering Logo"
                    />
                    <span className="fw-bold font-display text-primary">AARA</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="border-0 text-white" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className="fw-bold font-display text-primary">
                            Aara Engineering
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 align-items-lg-center">
                            <Nav.Link as={Link} to="/" className={`fw-bold ${scrolled ? 'text-secondary' : 'text-lg-white text-secondary'} hover-scale`}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className={`fw-bold ${scrolled ? 'text-secondary' : 'text-lg-white text-secondary'} hover-scale`}>About Us</Nav.Link>
                            <Nav.Link as={Link} to="/services" className={`fw-bold ${scrolled ? 'text-secondary' : 'text-lg-white text-secondary'} hover-scale`}>Products & Services</Nav.Link>
                            <Nav.Link as={Link} to="/infrastructure" className={`fw-bold ${scrolled ? 'text-secondary' : 'text-lg-white text-secondary'} hover-scale`}>Capabilities</Nav.Link>
                            <Nav.Link as={Link} to="/quality" className={`fw-bold ${scrolled ? 'text-secondary' : 'text-lg-white text-secondary'} hover-scale`}>Quality</Nav.Link>
                            <Button
                                as={Link}
                                to="/contact"
                                variant={scrolled ? "outline-primary" : "primary"}
                                className={`rounded-pill px-4 fw-bold ${scrolled ? '' : 'd-none d-lg-block'}`}
                            >
                                Contact Us
                            </Button>
                            {/* Mobile only Contact Button */}
                            <Button
                                as={Link}
                                to="/contact"
                                variant="primary"
                                className="rounded-pill px-4 fw-bold d-lg-none mt-3 w-100"
                            >
                                Contact Us
                            </Button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
