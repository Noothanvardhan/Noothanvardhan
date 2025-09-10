import React from 'react'
import { Shield, Lock, AlertTriangle, Key, Eye } from "lucide-react";
import ServiceLayout from './ServicesLayout';
import securityImg from '../../images/cyber1.jpg'

const Cybersecurity = () => {

  const cybersecurityData = {
  heroTitle: "Cybersecurity Services",
  heroTagline: "Protecting your digital assets with advanced security solutions",
  heroBg: 'linear-gradient(135deg, #4a1c6f, #314f7a, #1c7d7e)',
  introTitle: "Securing Your Business in the Digital Age",
  introText:
    "Our cybersecurity services help organizations safeguard their systems, networks, and data from evolving threats. We provide comprehensive solutions tailored to prevent breaches and ensure compliance.",
  introImage: securityImg,
  subServices: [
    {
      name: "Network Security",
      details: "Protect your network infrastructure against intrusions and attacks.",
      icon: <Shield size={32} color="#ea8410ff" />,
    },
    {
      name: "Endpoint Protection",
      details: "Secure all endpoints including desktops, laptops, and mobile devices.",
      icon: <Lock size={32} color="#f715f0ff" />,
    },
    {
      name: "Vulnerability Assessment",
      details: "Identify potential weaknesses in your systems before attackers do.",
      icon: <AlertTriangle size={32} color="#501be1ff" />,
    },
    {
      name: "Identity & Access Management",
      details: "Control and monitor user access to protect sensitive data.",
      icon: <Key size={32} color="#c02b2bff" />,
    },
    {
      name: "Security Monitoring & Analytics",
      details: "Continuous monitoring to detect threats and respond quickly.",
      icon: <Eye size={32} color="#47d13aff" />,
    },
  ],
  stats: [
    { value: "12+", label: "Years of Security Expertise" },
    { value: "1000+", label: "Systems Secured" },
    { value: "24/7", label: "Monitoring & Support" },
  ],
  cta: {
    title: "Strengthen Your Cybersecurity",
    text: "Let our experts protect your business from cyber threats and ensure compliance with industry standards.",
    buttonText: "Contact Security Team",
    link: "/contact",
  },
};

  return (
    <div>
     <ServiceLayout {...cybersecurityData} />;
    </div>
  )
}

export default Cybersecurity