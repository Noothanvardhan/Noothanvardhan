import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
// ✅ use from react-router-dom
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { 
  Code, Cloud, Shield, BarChart3, Users, Network 
} from "lucide-react"; 

const CustomNavbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    // run once on mount
    changeColor();

    return () => window.removeEventListener("scroll", changeColor);
  }, []);


  const services = [
    { name: "Software Service", path: "/software", icon: <Code size={20} /> },
    { name: "Cloud Service", path: "/cloud", icon: <Cloud size={20} /> },
    { name: "Cyber Security Services", path: "/cyber", icon: <Shield size={20} /> },
    { name: "Data and Analytics", path: "/data", icon: <BarChart3 size={20} /> },
    { name: "IT Consultant and Support", path: "/support", icon: <Users size={20} /> },
    { name: "IT Infrastructure & Networking", path: "/network", icon: <Network size={20} /> },
  ];
 const [ expanded , setExpanded ] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${color ? "navbar-bg" : ""}`}
      variant="dark"
       expanded={expanded} onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-link-text" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-text" onClick={() => setExpanded(false)}>
              About Us
            </Nav.Link>
             <div
              className="nav-item position-relative"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <span className="nav-link" style={{ cursor: "pointer" }}>Services</span>

              {show && (
                <div
                  className="position-absolute bg-white shadow-lg rounded p-3"
                  style={{
                    top: "100%",
                    left: 0,
                    minWidth: "280px",
                    zIndex: 1000,
                  }}
                >
                  <div className="d-grid gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="d-flex align-items-center gap-2 p-2 rounded text-decoration-none text-dark hover-bg"
                        onClick={() => {
    setShow(false);
    setExpanded(false);
  }}
                        
                      >
                        {service.icon}
                        <span style={{ fontSize: "0.9rem" }}>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-text" onClick={() => setExpanded(false)}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
       <style>{`
        .hover-bg:hover {
          background-color: #f0f8ff;
        }
      `}</style>
    </Navbar>
  );
};

export default CustomNavbar;
