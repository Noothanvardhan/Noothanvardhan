import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { Container ,  Row ,Col , Carousel , Accordion } from 'react-bootstrap'

import software from '../images/software.jpg'
import cloud from '../images/cloud.jpg'
import cyber from '../images/cyber.jpg'
import data from '../images/data.jpg'
import consultant from '../images/consultant.jpg'
import network from '../images/network.jpg'

const Home = () => {


  const services = [
    {
      title: "Software Services",
      image: software,
      desc: "Custom applications tailored to business needs. Delivering scalable and reliable software solutions.",
   to :'/software'
    },
    {
      title: "Cloud Services",
      image: cloud,
      desc: "Secure cloud migration and management. Empowering businesses with scalable infrastructure.",
       to :'/cloud'
    },
    {
      title: "Cybersecurity",
      image: cyber,
      desc: "Protecting data and networks with advanced security. Ensuring compliance and threat prevention.",
       to :'/cyber'
    },
    {
      title: "Data & Analytics",
      image: data,
      desc: "Turning raw data into insights for growth. Enabling smarter and faster business decisions.",
       to :'/data'
    },
    {
      title: "IT Consulting & Support",
      image: consultant,
      desc: "Strategic IT guidance for digital success. Helping organizations innovate and transform efficiently.",
       to :'/support'
    },
    {
      title: "IT Infrastructure & Networking",
      image: network,
      desc: "Robust IT infrastructure and networking solutions that ensure seamless connectivity and performance.",
       to :'/network'
    },
  ];


  const testimonials = [
  {
    name: "Ravi Kumar",
    role: "CEO, TechVision",
    feedback:
      "Working with this team has been a game-changer. Their software solutions are reliable and scalable.",
  },
  {
    name: "Sneha Patel",
    role: "Founder, CloudNest",
    feedback:
      "Exceptional service! They helped us migrate to the cloud smoothly and efficiently.",
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager, InnovateX",
    feedback:
      "The UI/UX design they delivered exceeded our expectations. Our users love the new interface!",
  },
  {
    name: "Priya Sharma",
    role: "CTO, FinEdge",
    feedback:
      "Their cybersecurity expertise has given us confidence in safeguarding our financial applications.",
  },
  {
    name: "Karan Verma",
    role: "Director, EduSmart",
    feedback:
      "Thanks to their cloud solutions, our e-learning platform scaled rapidly during peak demand.",
  },
  {
    name: "Meera Nair",
    role: "Operations Head, HealthFirst",
    feedback:
      "We rely on their IT support and maintenance. Their quick response keeps our systems running smoothly.",
  },
  {
    name: "Rahul Desai",
    role: "Founder, StartX",
    feedback:
      "Their consulting team helped us choose the right tech stack, saving us time and costs.",
  },
  {
    name: "Ananya Gupta",
    role: "Marketing Manager, RetailHub",
    feedback:
      "The analytics dashboard they built gave us real-time insights. Our sales improved significantly.",
  },
  {
    name: "Vikram Singh",
    role: "COO, GreenEnergy",
    feedback:
      "Professional, skilled, and reliable. Their software solution helped optimize our plant operations.",
  },
  {
    name: "Neha Joshi",
    role: "HR Head, TalentPro",
    feedback:
      "Their HR management system transformed how we handle recruitment and employee engagement.",
  },
];


const faqs = [
    {
      question: "What IT services do you provide?",
      answer:
        "We offer a wide range of IT services including software development, cloud solutions, cybersecurity, data analytics, IT consulting, and infrastructure management.",
    },
    {
      question: "How can your solutions benefit my business?",
      answer:
        "Our solutions are designed to improve efficiency, enhance security, reduce costs, and support digital transformation tailored to your business goals.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we provide 24/7 technical support and regular maintenance to ensure your systems run smoothly and securely.",
    },
    {
      question: "Can you customize solutions for specific industries?",
      answer:
        "Absolutely! We customize IT solutions to meet the unique challenges of different industries such as healthcare, finance, retail, and manufacturing.",
    },
  ];

useEffect(() => {
AOS.init({
  duration: 800,       // animation duration in ms
  once: true,          // animate only once when element scrolls into view
  offset: 50,          // triggers animation slightly before element is in viewport
  easing: 'ease-in-out', // smooth easing
});
},[])


  return (
    <div>
      <section className='header-section' >
        <h1 data-aos='fade-up-right'>LINKITBLU SOFTWARE</h1>
        <h1 data-aos='fade-up-right'>PRIVATE LIMITED</h1>
      </section>
      <section className='about-section mt-5' data-aos='fade-right'>
        <Container>
          <h1 style={{color :'#280627'}} >Shaping the future of businesses with next-gen IT,</h1>
          <h1 style={{color :'#280627'}}>cloud data and digital solutions.</h1>
          <p>Our expertise ensures seamless integration, high performance, and secure operations.
We help enterprises accelerate transformation, improve efficiency, and achieve sustainable growth in a digital-first world.</p>
        </Container>
      </section>
      <section style={{marginTop:'100px'}}>
        <Container>
          
          <Row>
            <Col md={6}>
            <h1 style={{color :'#280627'}} data-aos='fade-right'><b>Why Linkitblu?</b></h1>
            </Col>
            <Col md={6}>
            <p data-aos='fade-left'><b>Our team brings deep experience in software, cloud, and emerging technologies.
We understand the unique challenges of retail, manufacturing, and distribution.
This cross-industry expertise helps us deliver solutions that are practical and impactful.</b></p>
            <p data-aos='fade-left'><b>From consulting and strategy to development and support, we cover the full IT lifecycle.
Businesses don’t need multiple vendors—we provide everything under one roof.
This integrated approach ensures consistency, speed, and seamless collaboration.</b></p>
            <p data-aos='fade-left'><b>We prioritize data protection, compliance, and business continuity at every step.
Our cybersecurity-first mindset shields you from evolving digital threats.
You gain peace of mind knowing your systems are secure, reliable, and future-ready.</b></p>
            <p data-aos='fade-left'><b>We leverage AI, IoT, cloud, and analytics to help businesses stay ahead of the curve.
Our solutions are designed not just to solve today’s needs, but to enable tomorrow’s opportunities.
With us, technology becomes a driver of innovation and long-term success.</b></p>
            </Col>
          </Row>
        </Container>
      </section>
      
         <div className="contain" data-aos='fade-up' style={{marginTop:'50px'}}>
      <h1 className="title">OUR OFFERINGS</h1>
      <h6 className="text-white text-center mb-5">Delivering end-to-end IT services that power innovation, security, and growth.</h6>
      <div className="grid-container">
        {services.map((service, index) => (
          <div className="card" key={index}  data-aos='fade-right' data-aos-delay={index*100}>
            <img src={service.image} alt={service.title} />
            <div className="card-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <Link className='btn' to={service.to}>Explore Now</Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
     
      <section style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }} data-aos='fade-right'>
      <Container>
        <h2
          className="text-center mb-5"
          style={{ color: "#280627", fontWeight: "bold" }}
        >
          What Our Clients Say
        </h2>
        <Carousel indicators interval={4000} pause={false}>
          {testimonials.map((t, index) => (
            <Carousel.Item key={index}>
              <div className="text-center px-5">
                <p className="mb-4">"{t.feedback}"</p>
                <h6 style={{ color: "#280627", fontWeight: "bold" }}>
                  {t.name}
                </h6>
                <small className="text-muted">{t.role}</small>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>

     <section style={{ backgroundColor: "#280627", color: "white" }} data-aos='fade-up'> 
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              style={{ backgroundColor: "#280627", color: "white", border: "1px solid #fff" }}
            >
              <Accordion.Header>
                <span style={{ color: "#280627", fontWeight: "bold" }}>
                  {faq.question}
                </span>
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#fff", color: "#280627" }}>
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
      
    </div>
  )
}

export default Home