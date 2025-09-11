import React from 'react'
import { BarChart2, PieChart, TrendingUp, Database, Layers } from "lucide-react";
import ServiceLayout from './ServicesLayout';
import dataImg from '../../images/data1.jpg'
import SEO from '../SEO';
const Dataanalystics = () => {
  const dataAnalyticsData = {
  heroTitle: "Data & Analytics",
  heroTagline: "Transforming data into actionable business insights",
  heroBg: 'linear-gradient(135deg, #2d3a64, #443875, #7b337d)',
  introTitle: "Unlock the Power of Your Data",
  introText:
    "Our Data & Analytics services help organizations collect, process, and analyze data to make smarter decisions. We turn raw data into actionable insights that drive growth, efficiency, and innovation.",
  introImage: dataImg,
  subServices: [
    {
      name: "Business Intelligence",
      details: "Analyze and visualize data to make informed business decisions.",
      icon: <BarChart2 size={32} color="#bb22b6ff" />,
    },
    {
      name: "Data Warehousing",
      details: "Centralize your data for faster access and better management.",
      icon: <Database size={32} color="#181dacff" />,
    },
    {
      name: "Predictive Analytics",
      details: "Forecast trends and outcomes using advanced statistical models.",
      icon: <TrendingUp size={32} color="#27b953ff" />,
    },
    {
      name: "Data Integration",
      details: "Combine data from multiple sources to create a unified view.",
      icon: <Layers size={32} color="#b9b930ff" />,
    },
    {
      name: "Dashboard & Reporting",
      details: "Custom dashboards that provide real-time insights at a glance.",
      icon: <PieChart size={32} color="#e3471fff" />,
    },
  ],
  stats: [
    { value: "15+", label: "Years of Analytics Expertise" },
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  cta: {
    title: "Turn Your Data into Decisions",
    text: "Let our analytics team help you gain insights and optimize your business strategies.",
    buttonText: "Get Started",
    link: "/contact",
  },
};
  return (
    <div>
      <SEO
        title="Data Analytics Services | LINKITBLU"
        description="Unlock insights and make data-driven decisions with our analytics services."
        keywords="data analytics, BI, big data, insights"
        url="https://linkitblu.com/data"
        image="https://linkitblu.com/images/data.jpg"
      />
      <ServiceLayout {...dataAnalyticsData} />
    </div>
  )
}

export default Dataanalystics