import React from 'react'
import { Cloud, Server, Shield, Database, Activity } from "lucide-react";
import ServiceLayout from './ServicesLayout';
import cloudImg from '../../images/cloud1.jpg'
import SEO from '../SEO';

const Cloudservices = () => {

  const cloudServicesData = {
  heroTitle: "Cloud Services",
  heroTagline: "Scalable, secure, and future-ready cloud infrastructure",
  heroBg: 'linear-gradient(135deg, #3e1f47, #372772, #2a3a8a)',
  introTitle: "Harness the Power of the Cloud",
  introText:
    "Our cloud services help businesses migrate, optimize, and manage their cloud infrastructure efficiently. We ensure scalability, security, and cost-effective solutions tailored to your organization's needs.",
  introImage: cloudImg,
  subServices: [
    { name: "Cloud Migration", details: "Seamless migration from on-premise to cloud platforms.", icon: <Cloud size={32} color="#b0bb10ff" /> },
    { name: "Cloud Infrastructure Management", details: "Monitor and maintain cloud systems for peak performance.", icon: <Server size={32} color="#11baf3ff" /> },
    { name: "Cloud Security & Compliance", details: "Protect your data and applications with robust security practices.", icon: <Shield size={32} color="#0f1699ff" /> },
    { name: "Database as a Service", details: "Managed cloud databases for high availability and reliability.", icon: <Database size={32} color="#1bc524ff" /> },
    { name: "Cloud Optimization", details: "Reduce costs and improve efficiency with cloud resource optimization.", icon: <Activity size={32} color="#d40dcdff" /> },
  ],
  stats: [
    { value: "8+", label: "Years of Cloud Expertise" },
    { value: "300+", label: "Successful Migrations" },
    { value: "99.9%", label: "Uptime Guaranteed" },
  ],
  cta: {
    title: "Ready to move to the cloud?",
    text: "Our cloud experts will help you migrate and optimize your systems safely and efficiently.",
    buttonText: "Get Started",
    link: "/contact",
  },
};

  return (
    <div>
      <SEO
        title="Cloud Solutions | LINKITBLU"
        description="We provide secure and scalable cloud services for businesses of all sizes."
        keywords="cloud computing, Optimization, Cloud Security, cloud migration"
        url="https://linkitblu.com/cloud"
        image="https://linkitblu.com/images/cloud.jpg"
      />
     <ServiceLayout {...cloudServicesData} />;
    </div>
  )
}

export default Cloudservices