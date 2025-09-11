import React from 'react'
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url, image }) => {
    const defaultImage = "https://linkitblu.com/images/preview.jpg";
  return (
    <div>
        <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
    </div>
  )
}

export default SEO