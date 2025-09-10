import React, { useState , useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert, Card } from "react-bootstrap";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {

useEffect(() => {
AOS.init({
  duration: 800,       // animation duration in ms
  once: true,          // animate only once when element scrolls into view
  offset: 50,          // triggers animation slightly before element is in viewport
  easing: 'ease-in-out', // smooth easing
});
},[])



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // reset form
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  return (
    <Container className="py-5" style={{ backgroundColor: "#f8f9fa" }} data-aos='fade-up' id='contact'>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow-sm rounded-3" style={{ borderColor: "#280627" }}>
            <h3
              className="text-center mb-4"
              style={{ color: "#280627", fontWeight: "bold" }}
            >
              Get in Touch
            </h3>

            {submitted && (
              <Alert variant="success" className="text-center">
                🎉 Thank you! Your form has been submitted successfully.
              </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ color: "#280627" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ color: "#280627" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ color: "#280627" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#280627",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 20px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
