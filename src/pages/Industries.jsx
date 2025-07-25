import React from "react";
import Header from "../components/Header";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";
import greenTick from "../assets/greenTick.png";
import vector5 from "../assets/vector5.png";
import Edtech from "../assets/Edtech.svg";
import TravelTech from "../assets/TravelTech.svg";
import HealthTech from "../assets/HealthTech.svg";
import FoodTech from "../assets/FoodTech.svg";
import Ecommerce from "../assets/Ecommerce.svg";
import FinTech from "../assets/FinTech.svg";

function Industries() {
  return (
    <div className="relative bg-[#00080A] text-white w-full min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[#27DCFF] blur-[140px] opacity-100 top-[100px] left-[20px] z-0" />
      <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] bg-[#009252] opacity-40 blur-[80px] sm:blur-[80px]  z-0 xs:hidden" />

      {/* Main content wrapper */}
      <div className="relative z-10">
        <Header />

        {/* Title Section */}

        <div className="text-[25px] md:text-[40px] lg:text-[50px] italic ml-6 md:ml-10 lg:ml-20 leading-tight mt-20 md:mt-28 xl:mt-36 pt-10 ">
          <div className="uppercase font-extrabold  text-green-400 pr-6">
            {" "}
            Digital Solution For Every Sector
          </div>
          <div className=" text-[14px] md:text-[20px] lg:text-[30px] w-[280px] md:w-[600px] lg:w-[1000px] mt-4">
            We specialise in transforming businesses across a range of
            industries , tailoring our approach to your unique needs.
          </div>

          <div className="hidden md:flex items-center justify-end space-x-4 mr-10 md:mr-20 text-sm mt-4">
            <div className="h-px bg-white w-[150px] sm:w-[200px] md:w-[300px] lg:w-[483px] 2xl:w-[583px]" />
            <div className="text-2xl">
              <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                asterisk
              </span>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <FeatureCard />

        {/* why choose us   */}
        <div className="mt-10">
          <div className="flex flex-col  md:flex-row gap-4 justify-start items-center mt-2 mx-6 md:mx-10">
            <p className="text-[25px] font-creato font-black italic " >Why Choose Us Across Industries?</p>
            <span className="w-[200px] md:w-[300px] lg:w-[500px] h-[2px] bg-white/80 ml-6"></span>

          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-6 font-creato text-white/80 justify-center ml-6 pt-4 md:ml-20">
                  <div className="flex flex-col gap-8 md:w-1/2 text-[15px] md:text-[16px] lg:text-[20px]">
                    
                      <div  className="flex gap-4">
                        <img
                          src={greenTick}
                          alt="tick"
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
                        />
                        <div>Industry-specific design expertise</div>
                      </div>
                      <div  className="flex gap-4">
                        <img
                          src={greenTick}
                          alt="tick"
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
                        />
                        <div>Industry-specific design expertise</div>
                      </div>
                    
                  </div>
                  <div className="flex flex-col gap-8 md:w-1/2 text-[14px] md:text-[16px] lg:text-[20px]">
                    
                      <div  className="flex gap-4">
                        <img
                          src={greenTick}
                          alt="tick"
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
                        />
                        <div>Industry-specific design expertise</div>
                      </div>
                      <div  className="flex gap-4">
                        <img
                          src={greenTick}
                          alt="tick"
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
                        />
                        <div>Industry-specific design expertise</div>
                      </div>
                    
                  </div>
                </div>
        </div>

        {/* CTA Banner */}
        <LaunchBanner headingText="Looking for industry-specific expertise?" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Industries;

// Utility Function – Grid Cards
const FeatureCard = () => {
  const features = [
    {
      cardLogo: Edtech,
      title: "EdTech",
      description:
        "Empowering learning in the digital age. From e-learning platforms and school portals to mobile apps for institutions, we help educators build meaningful online experiences that engage, inform, and inspire.",
      cardRow1: "Learning Management Systems (LMS)",
      cardRow2: "Student registration & payment portals",
      cardRow3: "Resource libraries & calendar integrations",
      cardRow4: "Mobile-friendly design for students & faculty",
    },
    {
      cardLogo: TravelTech,
      title: "TravelTech",
      description:
        "Enabling seamless journeys — online and beyond. We build intuitive booking systems, visually rich travel blogs, and scalable web apps for agencies, hosts, and wanderlust-driven brands.",
      cardRow1: "Custom booking engines",
      cardRow2: "Trip planners & itinerary builders",
      cardRow3: "Travel blogs with storytelling tools",
      cardRow4: "Payment integration & review systems",
    },
    {
      cardLogo: HealthTech,
      title: "HealthTech",
      description:
        "Secure, user-friendly digital care solutions. We design platforms that prioritize trust, accessibility, and compliance — from clinic websites to healthtech dashboards.",
      cardRow1: "Appointment booking systems",
      cardRow2: "HIPAA/GDPR-compliant forms",
      cardRow3: "Patient portals & practitioner profiles",
      cardRow4: "Telemedicine integrations & health tracking",
    },
    {
      cardLogo: FoodTech,
      title: "FoodTech",
      description:
        "Serving up digital growth for food businesses. We create compelling food ordering systems, delivery platforms, and brand-forward websites that help your business thrive in a competitive market.",
      cardRow1: "Online ordering & payment integration",
      cardRow2: "Menu builders & daily specials",
      cardRow3: "Table reservation and delivery tracking",
      cardRow4: "Loyalty programs & customer feedback systems",
    },
    {
      cardLogo: Ecommerce,
      title: "E-commerce",
      description:
        "Turning browsers into buyers with smart design. From scalable online stores to conversion-focused product pages, we build robust e-commerce experiences that grow with your business.",
      cardRow1: "Custom storefronts (Shopify, WooCommerce, etc.)",
      cardRow2: "Inventory and shipping integration",
      cardRow3: "Optimized checkout flows",
      cardRow4: "Product filters, variants & customer reviews",
    },
    {
      cardLogo: FinTech,
      title: "FinTech",
      description:
        "Bringing clarity and confidence to digital finance. We build secure, scalable platforms that align with compliance standards while offering intuitive UX — perfect for modern fintech products.",
      cardRow1: "Onboarding and KYC flows",
      cardRow2: "Interactive dashboards & analytics",
      cardRow3: "Secure user authentication",
      cardRow4: "Regulatory compliance & data encryption",
    },
  ];

  return (
    <section className="bg-transparent text-white  md:px-10 lg:px-16 mt-10 relative">
      <div className="flex flex-wrap justify-center mt-2 pb-4 gap-[40px] max-w-screen-xl md:mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-screen-2xl  rounded-3xl p-6 mt-6 overflow-hidden bg-[#00080A]"
          >
            {/* Background Glows */}
            {/* Bottom Left Glow */}
            <div className="absolute bottom-[-40px] left-[-40px]  h-[100px] w-[140px]  md:w-[120px] md:h-[150px] bg-[#009252] opacity-100 blur-[60px] md:blur-[70px] z-0" />
            <div className="absolute bottom-[-40px] left-[-40px] w-[320px] h-[250px] bg-cyan-400 opacity-40 blur-[80px] md:blur-[120px] z-0" />

            {/* Top Right Glow */}
            <div className="absolute -top-[60px] -right-[60px] w-[320px] h-[250px] bg-cyan-400 opacity-40  blur-[80px] md:blur-[120px] z-0" />
            {/* Top Right Glow */}
            <div className="absolute -top-[60px] -right-[60px]  h-[100px] w-[150px]  md:w-[120px] md:h-[130px] bg-[#009252] opacity-100 blur-[60px] md:blur-[70px] z-0" />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Logo + Title */}
              <div className="flex items-center font-black italic gap-1 mt-2">
                <img
                  src={item.cardLogo}
                  alt="cardlogo"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
                />
                <p
                  className="lg:text-[50px] md:text-[30px] text-[17px]"
                  style={{
                    background: `linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.title}
                </p>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-start mx-2  mt-2">
                <div className="lg:text-[20px] md:text-[17px] text-[14px] max-w-[1100px] font-normal text-white/80 flex items-center">
                  <div>{item.description}</div>
                  <img
                    src={vector5}
                    alt="vector5"
                    className="w-[58px] -mt-20 -ml-16 hidden md:block"
                  />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 text-[14px] md:text-[18px] lg:text-[25px] mt-4 font-creato font-black italic">
                  <p className="text-white">What we offer</p>
                  <span className="w-[150px] md:w-[500px] h-[2px] bg-white/90 mt-2" />
                </div>

                {/* Offer Items */}
                <div className="flex flex-col md:flex-row gap-8 mt-6 font-creato text-white/80">
                  <div className="flex flex-col gap-8 md:w-1/2 text-[15px] md:text-[16px] lg:text-[20px]">
                    {[item.cardRow1, item.cardRow2].map((text, idx) => (
                      <div key={idx} className="flex gap-4">
                        <img
                          src={greenTick}
                          alt="tick"
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
                        />
                        <div>{text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-8 md:w-1/2 text-[14px] md:text-[16px] lg:text-[20px]">
                    {[item.cardRow3, item.cardRow4].map((text, idx) => (
                      <div key={idx} className="flex gap-4">
                        <img
                          src={greenTick}
                          alt="tick"
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px]"
                        />
                        <div>{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
