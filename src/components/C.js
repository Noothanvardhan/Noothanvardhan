import React from 'react'
import { Helmet } from "react-helmet-async";

const C = () => {
  return (
    <div>
       <Helmet>
        <title>Contact Us | LINKITBLU</title>
        <meta 
          name="description" 
          content="Get in touch with LINKITBLU for IT services, support, and consulting. Call us, email us, or fill out our contact form to connect today." 
        />
        
        {/* Keywords (less important today, but still okay for context) */}
        <meta 
          name="keywords" 
          content="Contact LINKITBLU, IT services support, IT consulting contact, cloud services contact" 
        />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Contact Us | LINKITBLU" />
        <meta 
          property="og:description" 
          content="Reach out to LINKITBLU for IT services and support. We’re here to help you with software, cloud, and consulting solutions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkitblu.com/contact" />
        <meta property="og:image" content="https://linkitblu.com/images/contact-banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | LINKITBLU" />
        <meta 
          name="twitter:description" 
          content="Get in touch with LINKITBLU for IT solutions and consulting." 
        />
        <meta name="twitter:image" content="https://linkitblu.com/images/contact-banner.jpg" />
      </Helmet>
        <h1 className='text-center' style={{paddingTop :'100px', paddingBottom:"30px",background:"linear-gradient(135deg, #432371, #344e8b, #2a7f9d)",color:'#fff'}} >TO GET IN TOUCH WITH US</h1>
    </div>
  )
}

export default C