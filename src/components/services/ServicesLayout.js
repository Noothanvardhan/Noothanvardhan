import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

  

const ServiceLayout = ({
  heroTitle,
  heroTagline,
  heroBg,
  introTitle,
  introText,
  introImage,
  subServices,
  stats,
  cta,
}) => {
    useEffect(() => {
  AOS.init({
    duration: 800,       // animation duration in ms
    once: true,          // animate only once when element scrolls into view
    offset: 50,          // triggers animation slightly before element is in viewport
    easing: 'ease-in-out', // smooth easing
  });
  },[])
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background :heroBg,
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold" data-aos='fade-up'>{heroTitle}</h1>
          <p className="lead" data-aos='fade-up'>{heroTagline}</p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 style={{ color: "#280627", fontWeight: "bold" }} data-aos='fade-right'>
                {introTitle}
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#333" }} data-aos='fade-right'>{introText}</p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={introImage}
                alt={introTitle}
                className="img-fluid rounded shadow-sm"
                style={{borderRadius :'20px'}}
                data-aos='zoom-in' loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sub-Services Section */}
      <section style={{ padding: "60px 0" }} data-aos='fade-up'>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#280627" }}>
            Our Expertise
          </h2>
          <Row>
            {subServices.map((service, index) => (
              <Col md={4} key={index} className="mt-4 d-flex">
                <Card className=" shadow-md border-0 flex-fill text-center mb-4" data-aos='fade-left' data-aos-delay={index*100}>
                  <Card.Body className="s-card">
                    <div className="mb-3">{service.icon}</div>
                    <Card.Title style={{ color: "#280627" }}>
                      {service.name}
                    </Card.Title>
                    <Card.Text>{service.details}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quick Stats Section */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#280627",
          color: "#fff",
        }}
        data-aos='fade-up'
      >
        <Container>
          <Row className="text-center">
            {stats.map((item, index) => (
              <Col md={4} key={index} className="mb-4 mb-md-0">
                <h2 className="fw-bold">{item.value}</h2>
                <p>{item.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      {cta && (
        <section style={{ padding: "60px 0", textAlign: "center" }} data-aos='fade-right'>
          <Container>
            <h3 style={{ color: "#280627", marginBottom: "15px" }}>
              {cta.title}
            </h3>
            <p style={{ marginBottom: "20px" }}>{cta.text}</p>
            <Link to={cta.link}  style={{textDecoration:'none',color:'#fff',background :'#000',padding:'5px 5px',borderRadius:'5px'}}>
              {cta.buttonText}
            </Link>
          </Container>
        </section>
      )}
    </>
  );
};

export default ServiceLayout;
