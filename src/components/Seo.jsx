import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, ogImage, canonical }) => {
  // Default values
  const defaultTitle = "Sandip Ganava | Frontend Developer & Software Engineer";
  const defaultDescription = "Professional portfolio of Sandip Ganava, showcasing skills in frontend development, projects, and expertise in modern web technologies.";
  const defaultKeywords = "Sandip Ganava, Frontend Developer, Software Engineer, React, JavaScript, Web Development, Portfolio";
  const defaultOgImage = "https://sandipganava.com/og-image.jpg";
  const defaultCanonical = "https://sandipganava.com/";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || defaultCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || defaultCanonical} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical || defaultCanonical} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
};

export default SEO;