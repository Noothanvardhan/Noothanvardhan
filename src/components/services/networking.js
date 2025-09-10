import React from 'react'
import { Server, Wifi, Cpu, Shield, Monitor } from "lucide-react";
import ServiceLayout from './ServicesLayout';
import infraImg from '../../images/infra.jpg'

const Networking = () => {
  const itInfrastructureData = {
  heroTitle: "IT Infrastructure & Networking",
  heroTagline: "Reliable infrastructure and networking solutions for modern businesses",
  heroBg: 'linear-gradient(135deg, #3e1d6d, #2f4f8a, #2c7a7b)',
  introTitle: "Building a Strong Technology Backbone",
  introText:
    "Our IT Infrastructure & Networking services ensure your systems are fast, secure, and reliable. From designing networks to managing servers, we provide end-to-end solutions for seamless business operations.",
  introImage: infraImg,
  subServices: [
    {
      name: "Network Design & Implementation",
      details: "Plan and implement secure, scalable, and high-performance networks.",
      icon: <Wifi size={32} color="#32dc14ff" />,
    },
    {
      name: "Server & Storage Solutions",
      details: "Set up and maintain servers and storage systems for maximum uptime.",
      icon: <Server size={32} color="#f50cedff" />,
    },
    {
      name: "System Monitoring & Management",
      details: "Continuous monitoring and management to prevent downtime and optimize performance.",
      icon: <Monitor size={32} color="#3728d8ff" />,
    },
    {
      name: "Infrastructure Security",
      details: "Protect your network and infrastructure from cyber threats and vulnerabilities.",
      icon: <Shield size={32} color="#dc1b1bff" />,
    },
    {
      name: "Cloud Networking Integration",
      details: "Seamless integration between on-premise infrastructure and cloud networks.",
      icon: <Cpu size={32} color="#e2f574ff" />,
    },
  ],
  stats: [
    { value: "15+", label: "Years of Experience" },
    { value: "350+", label: "Infrastructure Projects Delivered" },
    { value: "99.9%", label: "Network Uptime" },
  ],
  cta: {
    title: "Optimize Your IT Infrastructure",
    text: "Let our experts design, manage, and secure your IT systems for optimal performance.",
    buttonText: "Contact Us",
    link: "/contact",
  },
};
  return (
    <div>
      <ServiceLayout {...itInfrastructureData} />
    </div>
  )
}

export default Networking