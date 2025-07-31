"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Colors from "../../../assets/styles";
import { Box, Typography } from "@mui/material";
import { Images, Svgs } from "../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";

// Install modules
SwiperCore.use([Autoplay]);

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: "001",
    title: "Monetization (Business-Ecosystem MAC)",
    description: ["Stand up your payment pipeline and validate revenue fast."],
  },
  {
    number: "002",
    title: "MVP & MVE:",
    description: [
      "Launch with the right features and a user experience that sparks delight",
    ],
  },
  {
    number: "003",
    title: "System Integrations",
    description: [
      "Bridge new or legacy systems with minimal disruption to your workflow.",
    ],
  },
  {
    number: "004",
    title: "Technical Foundation (Technical MAC)",
    description: [
      "Optimize your backend for growth without expensive technical debt.",
    ],
  },
];

function ServiceSeparator() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    gsap.to(path, {
      strokeDashoffset: 0, // Draw stroke
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top bottom",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100px",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1362 51"
        fill="none"
        style={{
          clipPath: "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)",
        }}
      >
        <path
          ref={pathRef}
          d="M0 1.5H571.719C590.957 1.5 609.914 6.12563 626.99 14.9869L667.51 36.0131C684.586 44.8744 703.543 49.5 722.781 49.5H1362"
          stroke={Colors.primary}
          strokeWidth="2"
          style={{ transform: "scaleX(-1)", transformOrigin: "center" }} // Flip horizontally
        />
      </svg>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
        <Box
            sx={{
            mt: "-20px",
            position: "relative",
            overflow: "hidden",
            height: "50px",
            backgroundColor: "#248ac3",
            display: "flex",
            alignItems: "center",
            transform: "translateY(20px)",
            }}
        >
            <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
            }}
            speed={4000} // Adjust speed for smooth continuous scroll
            style={{ width: "100%" }}
            >
            {Array(20)
                .fill("")
                .map((_, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "1.2rem",
                    }}
                >
                    <img
                    src={Images.marqueeLogo}
                    alt="Logo"
                    style={{ height: "30px", width: "auto" }}
                    />
                    GUARANTEED SOFTWARE
                </SwiperSlide>
                ))}
            </Swiper>
        </Box>

      <div
        style={{ minHeight: "100vh", backgroundColor: "black", color: "white" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "white",
            mt: 8,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
            color: "transparent", // make text fill transparent
            WebkitTextStroke: "1px white", // stroke color and width
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            textTransform: "uppercase",
          }}
        >
          How Guaranteed Software Helps
        </Typography>
        <main
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1rem" }}
        >
          {<ServiceSeparator />}

          {servicesData.map((service, index) => (
            <React.Fragment key={service.number}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  padding: "3rem 1rem",
                }}
                // Responsive adjustments for grid columns
                className="md:grid-cols-2 md:px-8 lg:px-16"
              >
                {/* Left Section: Number and Title */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                  }}
                  className="md:items-end md:text-right"
                >
                  <span
                    sx={{
                      color: Colors.primary,
                      fontSize: {
                        md: "2.5rem !important",
                        sm: "2rem !important",
                        xs: "1.5rem !important",
                      },

                      fontWeight: "bolder",
                      fontFamily: "monospace", // To approximate the font style
                      letterSpacing: "-0.025em",
                      marginBottom: "0.5rem",
                    }}
                    className="md:text-5xl lg:text-6xl"
                  >
                    {service.number}
                  </span>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "white",
                      fontSize: {
                        md: "3rem !important",
                        sm: "2.5rem !important",
                        xs: "1.5rem !important",
                      },
                      fontWeight: "bolder",
                      textTransform: "uppercase",
                      lineHeight: "1.1",
                      
                      fontFamily: "Monuments",
                    }}
                    className="md:text-6xl lg:text-7xl"
                  >
                    {service.title}
                  </Typography>
                </div>

                {/* Right Section: Description */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.125rem", // Default for mobile
                    lineHeight: "1.6",
                  }}
                  className="md:text-xl" // Responsive font size
                >
                  {service.description.map((paragraph, pIndex) => (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="p"
                        key={pIndex}
                        style={pIndex > 0 ? { marginTop: "1rem" ,
                      fontFamily: "Monuments",

                         } : {}}
                      >
                        {paragraph}
                      </Typography>

                      <Box  sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap:"6px"
                      }}>
                        <Box
                          dangerouslySetInnerHTML={{
                            __html: Svgs["threeArrow"],
                          }}
                        />
                        <Typography
                          variant="p"
                          key={pIndex}
                          sx={{
                            fontFamily:"Monuments",
                            color:"#aaa"
                          }}
                        >
                          Learn more
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </div>

              {<ServiceSeparator />}
            </React.Fragment>
          ))}
        </main>
      </div>
    </>
  );
}
