
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("Home");

  // Handle section navigation
  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  // Add schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CyberHand",
    "description": "Digital Growth Partner – Web, Marketing, AI Solutions",
    "url": "https://cyberhand.com",
    "logo": "https://cyberhand.com/logo.png",
    "sameAs": [
      "https://twitter.com/cyberhand",
      "https://www.linkedin.com/company/cyberhand",
      "https://www.facebook.com/cyberhand"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-7890",
      "contactType": "customer service",
      "email": "info@cyberhand.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "Tech City",
      "postalCode": "12345",
      "addressCountry": "USA"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Web Development",
          "description": "Custom websites from one-page landing sites to e-commerce platforms",
          "price": "399",
          "priceCurrency": "USD",
          "url": "https://cyberhand.com/services#web-development"
        },
        {
          "@type": "Offer",
          "name": "Marketing Services",
          "description": "Google Ads, SEO, and social media management",
          "price": "49",
          "priceCurrency": "USD",
          "url": "https://cyberhand.com/services#marketing"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>CyberHand | Digital Growth Partner – Web, Marketing, AI Solutions</title>
        <meta name="description" content="CyberHand offers scalable web development, marketing, cloud hosting, and AI integration solutions for businesses of all sizes. Start your digital growth journey today!" />
        <meta name="keywords" content="web development, digital marketing, AI integration, cloud hosting, SEO services, CyberHand" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden">
        <Navbar onNavigate={handleNavigate} />
        <main className="pt-[50px] md:pt-[60px] pb-[50px] md:pb-[60px] h-screen">
          <HeroSection activeSection={activeSection} onNavigate={handleNavigate} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
