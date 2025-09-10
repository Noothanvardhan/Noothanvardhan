import React from 'react'
import { LifeBuoy, Cpu, Users, Settings, Headphones } from "lucide-react";
import ServiceLayout from './ServicesLayout';
import itImg from '../../images/support.jpg'

const ITconsultant = () => {
  const itConsultingData = {
  heroTitle: "IT Consulting & Support",
  heroTagline: "Expert guidance and support for all your IT needs",
  heroBg: 'linear-gradient(135deg, #50264d, #3b3561, #2a4d69)',
  introTitle: "Optimizing Technology for Your Business",
  introText:
    "Our IT consulting and support services help businesses leverage technology effectively. We provide strategic advice, manage IT infrastructure, and ensure your systems run smoothly to support business growth.",
  introImage: itImg,
  subServices: [
    {
      name: "IT Strategy & Planning",
      details: "Develop IT strategies aligned with business goals for maximum efficiency.",
      icon: <LifeBuoy size={32} color="#d2d818ff" />,
    },
    {
      name: "Infrastructure Management",
      details: "Manage servers, networks, and hardware for seamless operations.",
      icon: <Cpu size={32} color="#14c0deff" />,
    },
    {
      name: "IT Support & Maintenance",
      details: "24/7 technical support to resolve issues quickly and minimize downtime.",
      icon: <Headphones size={32} color="#ec09e4ff" />,
    },
    {
      name: "Team Training & Onboarding",
      details: "Educate employees on IT tools and best practices for better productivity.",
      icon: <Users size={32} color="#89f9b7ff" />,
    },
    {
      name: "Process Optimization",
      details: "Streamline IT processes to improve performance and reduce costs.",
      icon: <Settings size={32} color="#c72545ff" />,
    },
  ],
  stats: [
    { value: "10+", label: "Years of IT Expertise" },
    { value: "400+", label: "Satisfied Clients" },
    { value: "24/7", label: "Support Availability" },
  ],
  cta: {
    title: "Get Expert IT Support",
    text: "Let our IT consultants help you optimize your systems and ensure smooth operations.",
    buttonText: "Contact Us",
    link: "/contact",
  },
};
  return (
    <div>
      <ServiceLayout {...itConsultingData} />;
    </div>
  )
}

export default ITconsultant