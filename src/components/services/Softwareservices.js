import React from 'react'
import ServiceLayout from './ServicesLayout'
import { Code, Smartphone, Building, ShoppingCart, Link as LinkIcon } from "lucide-react";
import software from '../../images/software1.jpg'


 const softwareDevelopmentData = {
  heroTitle: "Software Services",
  heroTagline: "Turning ideas into powerful digital solutions",
  heroBg: 'linear-gradient(135deg, #3c1f47, #35496e, #286d7e)',
  introTitle: "Building Scalable Digital Solutions",
  introText:
    "Our software development services are designed to help businesses innovate, grow, and adapt to a changing digital landscape. From startups to enterprises, we build reliable, scalable, and user-friendly applications tailored to your needs.",
  introImage: software,
  subServices: [
    { name: "Custom Web Applications", details: "Tailored web apps to streamline business processes.", icon: <Code size={32} color="#d430cfff" /> },
    { name: "Mobile App Development", details: "Native and cross-platform apps built for usability.", icon: <Smartphone size={32} color="#4113cdff" /> },
    { name: "Enterprise Solutions", details: "Robust systems integrated with your workflow.", icon: <Building size={32} color="#c6181dff" /> },
    { name: "E-commerce Platforms", details: "Secure online stores to enhance sales.", icon: <ShoppingCart size={32} color="#33c317ff" /> },
    { name: "API & System Integrations", details: "Smooth integrations with third-party services.", icon: <LinkIcon size={32} color="#df6d15ff" /> },
  ],
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "95%", label: "Client Retention Rate" },
  ],
  cta: {
    title: "Ready to start your project?",
    text: "Get in touch with our experts today and bring your ideas to life.",
    buttonText: "Contact Us",
    link: "/contact",
  },
};


const Softwareservices = () => {
  return (
    <div>
      <ServiceLayout {...softwareDevelopmentData} />;
  </div>
  )
}

export default Softwareservices