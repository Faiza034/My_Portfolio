import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar as BootstrapNavbar, } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <BootstrapNavbar className="custom-navbar"
            expand="lg"
            fixed="top"
            bg="dark"
            data-bs-theme="dark"
        >

            <Container>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BootstrapNavbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                    <Nav className="mx-auto nav-pill">

                        <Nav.Link
                            href="#home"
                            className= { 
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("home")}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("skills")}
                        >
                            Skills
                        </Nav.Link>

                        <Nav.Link
                            href="#education"
                            className={
                                activeLink === "education"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("education")}
                        >
                            Education
                        </Nav.Link>
                        <Nav.Link
                            href="#experience"
                            className={
                                activeLink === "experience"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("experience")}
                        >
                            Experience
                        </Nav.Link>

                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>

                        <Nav.Link
                            href="#contact"
                            className={
                                activeLink === "contact"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => setActiveLink("contact")}
                        >
                            Contact
                        </Nav.Link>

                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar >
    );
};

export default Navbar;