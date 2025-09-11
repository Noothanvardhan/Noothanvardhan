import React from 'react'
import { ShieldCheck, Lightbulb, Users, Trophy } from "lucide-react";
import { Target, Eye } from "lucide-react";
import {Container , Card , Carousel} from 'react-bootstrap'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import shape from '../images/shaping1.jpg'
import innovation from '../images/innovation.jpg'
import trust from '../images/trust1.jpg'
import { Helmet } from "react-helmet-async";


const About = () => {

const values = [
    {
     icon :<ShieldCheck size={40} color='#31dd3fff'/>,
      title: "Integrity",
      description:
        "We uphold transparency, honesty, and accountability in everything we do.",
    },
    {
      icon :<Lightbulb size={40} color='#1322edff'/>,
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking to build modern solutions.",
    },
    {
      icon :<Users size={40} color='#f8123cff'/>,
      title: "Collaboration",
      description:
        "We believe teamwork and partnerships drive meaningful impact.",
    },
    {
      icon :<Trophy size={40} color='#d5e221ff'/>,
      title: "Excellence",
      description:
        "We are committed to delivering quality, efficiency, and sustainable results.",
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

<Helmet>
        <title>About Us | LINKITBLU</title>
        <meta
          name="description"
          content="Learn more about My Company — our mission, vision, and expertise in software services, cloud solutions, cybersecurity, and IT consulting."
        />
        <meta
          name="keywords"
          content="about us, company profile, IT services, cloud, cybersecurity, consulting"
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="About Us | LINKITBLU" />
        <meta
          property="og:description"
          content="Discover My Company's journey, vision, and expertise in delivering world-class IT services."
        />
        <meta
          property="og:image"
          content="https://linkiblu.com/images/about-preview.jpg"
        />
        <meta property="og:url" content="https://linkiblu.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | LINKITBLU" />
        <meta
          name="twitter:description"
          content="Discover our mission, vision, and expertise in IT services."
        />
        <meta
          name="twitter:image"
          content="https://linkiblu.com/images/about-preview.jpg"
        />

        {/* Canonical URL */}
        
      </Helmet>



      <section className='abt-section' style={{ minHeight: "60vh",  paddingTop:'100px' }}>
      <Container>
            <h1 style={{ color: "#ffffff", fontWeight: "bold" }} data-aos='fade-right'>
              Driven by Innovation
            </h1>
            <h3 style={{ color: "#ffffff", fontWeight: "bold" }} data-aos='fade-right'>
              CRAFTING SOLUTIONS
            </h3>
            <h3 style={{ color: "#ffffff", fontWeight: "bold" }} data-aos='fade-right'>
              CREATING SUCCESS
            </h3>
            </Container>
          
    </section>
    <section className='vision mt-5 mb-5' data-aos='fade-up'>
      <Card className='abt-card' data-aos='flip-left'>
        <Card.Body>
          <Card.Title style={{color:'#199ae4ff'}}>OUR VISION <Eye size={30} color='#fff' /></Card.Title>
          <Card.Text style={{color:'#ffffff'}}>To become a global leader in delivering innovative and sustainable technology solutions that empower businesses, inspire people, and create a smarter future.</Card.Text>
          <Card.Text style={{color:'#ffffff'}}>To empower businesses worldwide with innovative and sustainable technology solutions.</Card.Text>
        </Card.Body>
      </Card>
      <Card className='abt-card' data-aos='flip-right'>
        <Card.Body>
          <Card.Title style={{color:'#199ae4ff'}}>OUR MISSION <Target size={30}  color='#fff'/></Card.Title>
          <Card.Text style={{color:'#ffffff'}}>To provide reliable and scalable digital services by combining innovation, expertise, and customer-first values — enabling organizations to achieve growth, efficiency, and long-term success.</Card.Text>
          <Card.Text style={{color:'#ffffff'}}>To deliver reliable, scalable, and customer-focused digital services that drive growth and success.</Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section data-aos='fade-up'>
<Carousel fade interval={1000}>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={shape}
          alt="First slide"
          style={{ objectFit: "cover", height: "500px" }} loading='lazy'
         
        />
        <Carousel.Caption>
          <h2 className="fw-bold">Shaping Tomorrow with Technology</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={innovation}
          alt="Second slide"
          style={{ objectFit: "cover", height: "500px" }} loading='lazy'
        />
        <Carousel.Caption>
          <h2 className="fw-bold">Driven by Purpose, Powered by Innovation</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className=" img-fluid d-block w-100"
          src={trust}
          alt="Third slide"
          style={{ objectFit: "cover", height: "500px" }} loading='lazy'
        />
        <Carousel.Caption>
          <h2 className="fw-bold">Built on Trust, Focused on Excellence</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

<div style={{ backgroundColor: "#f8f9fa", color: "#280627" }} data-aos='fade-up'>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Our Values</h2>
        <div className="row g-4">
          {values.map((val, idx) => (
            <div key={idx} className="col-md-3 col-sm-6" data-aos='fade-up' data-aos-delay={idx*100}>
              <div className="p-4 h-100 border rounded shadow-sm text-center bg-white">
                {val.icon}
                <h5 className="fw-bold mb-2">{val.title}</h5>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    </div>
  )
}

export default About