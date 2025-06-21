import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

import softwareImg from "../images/software.png";
import uiuxImg from "../images/uiux.png";
import marketingImg from "../images/marketing.png";
import brandingImg from "../images/branding.png";
import cloudImg from "../images/cloud.png";
import ecommerceImg from "../images/ecommerce.png";

import Process from "./Process";
import TestimonialsAndFAQs from "./TestimonialsAndFAQs";

const Services = () => {
  return (
    <div className="bg-[#00080A] text-white px-4 md:px-10 lg:px-20 py-16 font-playfair min-h-screen">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic">SERVICES</h1>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-white">•</span>
          <span className="text-white">All Services</span>
          <span className="bg-cyan-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            <FaArrowRight size={10} />
          </span>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-6 xl:grid-rows-6 auto-rows-min">
        {/* Software Development */}
        <div className="xl:col-span-2 xl:row-span-4">
          <ServiceCard
            title="Software Development"
            image={softwareImg}
            imageCaption="Your Digital Blueprint"
            description="We build scalable, secure, and high-performing web and mobile applications tailored to your business needs."
          />
        </div>

        {/* UI/UX */}
        <div className="xl:col-span-4 xl:row-span-2">
          <ServiceCard
            title="UI/UX Design"
            image={uiuxImg}
            imageCaption="Interface That Speaks"
            description="Crafting engaging, intuitive, and responsive user experiences that delight your users and boost engagement."
          />
        </div>

        {/* Digital Marketing */}
        <div className="xl:col-span-2 xl:row-span-2">
          <ServiceCard
            title="Digital Marketing"
            image={marketingImg}
            imageCaption="Reach the Right Audience"
            description="Drive traffic and conversion with result-oriented SEO, PPC, content marketing, and social media strategies."
          />
        </div>

        {/* Brand Identity */}
        <div className="xl:col-span-2 xl:row-span-2">
          <ServiceCard
            title="Brand Identity"
            image={brandingImg}
            imageCaption="Visuals That Stick"
            description="We help you shape a consistent brand voice, visual identity to stand out in a crowded market."
          />
        </div>

        {/* Cloud Services */}
        <div className="xl:col-span-3 xl:row-span-2">
          <ServiceCard
            title="Cloud Services"
            image={cloudImg}
            imageCaption="Secure & Scalable"
            description="Deploy, scale, and manage your infrastructure securely with AWS, Azure, and modern cloud platforms."
          />
        </div>

        {/* E-Commerce */}
        <div className="xl:col-span-3 xl:row-span-2">
          <ServiceCard
            title="E-Commerce Solutions"
            image={ecommerceImg}
            imageCaption="Your Store, Online"
            description="From product listings to checkout – we build powerful online stores with great UX and conversion rates."
          />
        </div>
      </div>

      {/* Extra Sections */}
      <Process />
      <TestimonialsAndFAQs />
    </div>
  );
};

export default Services;
