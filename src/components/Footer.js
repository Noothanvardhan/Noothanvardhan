import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'


const Footer = () => {

useEffect(() => {
AOS.init({
  duration: 800,       // animation duration in ms
  once: true,          // animate only once when element scrolls into view
  offset: 50,          // triggers animation slightly before element is in viewport
  easing: 'ease-in-out', // smooth easing
});
},[])


  return (
    <footer
      style={{
        backgroundColor: "#280627",
        color: "#fff",
        padding: "40px 0",
        marginTop: "50px",
      }}
      
    >
      <Container dat-aos='fade-up'>
        <Row>
          {/* Brand & Contact */}
          <Col md={4} className="mb-4">
            <img
              src={logo} // replace with your brand image
              alt="Company Logo"
              style={{ width: "200px" }}
            />
            <h6>LINKITBLU TECHNOLOGIES PRIVATE LIMITED</h6>
            <p>40, FLOOR-3, 12/14, MAHARASTRA BHAVAN, BORA MASJID STREET, BAZAR GATE , MUMBAI, MUMBAI, MAHARASTRA, INDIA, 400001</p>
            <p>Email: Linkitblu@gmail.com</p>
            <p>Phone: +91 9819669590</p>
          </Col>

          {/* Main Links */}
          <Col md={4} className="mb-4 mt-5">
            <h5 style={{ color: "#f8d7ff" }}>Main Links</h5>
            <ul className="list-unstyled mt-5">
              <li ><Link className="footer-link"  to="/">Home</Link></li>
              <li><Link className="footer-link" to="/about">About Us</Link></li>
              
              <li><Link className="footer-link" to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Services Links */}
          <Col md={4} className="mb-4 mt-5">
            <h5 style={{ color: "#f8d7ff" }}>Our Services</h5>
            <ul className="list-unstyled mt-5">
              <li><Link className="footer-link" to="/software">Software Development</Link></li>
              <li><Link className="footer-link" to="/cloud">Cloud Services</Link></li>
              <li><Link className="footer-link" to="/cyber">Cyber Security</Link></li>
              <li><Link className="footer-link" to="/data">Data & Analytics</Link></li>
              <li><Link className="footer-link" to="/support">IT Consulting & Support</Link></li>
              <li><Link className="footer-link" to="/network">IT Infrastructure & Networking</Link></li>
            </ul>
          </Col>
        </Row>

        <Row className="pt-3 border-top border-light">
          <Col className="text-center">
            <small>© {new Date().getFullYear()} LINKITBLU. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
