"use client";

import { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Colors from "../../../assets/styles";
import { Images, Svgs } from "../../../assets/images";

gsap.registerPlugin(ScrollTrigger);

// Define the primary color as it was used in the original snippet

const cards = [
  {
    title: "Rapid Revenue Validation",
    subtitle: "WEBSITE",
    description:
      "Stop guessing—learn what customers will pay for.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Customer-Focused Development",
    subtitle: "WEBSITE",
    description:
      "Aim for higher retention and a faster product-market fit.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Integration Expertise",
    subtitle: "WEBSITE",
    description:
      "Connect systems to unlock new growth channels.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Scalable Infrastructure",
    subtitle: "WEBSITE",
    description:
      "Grow without fear of costly rewrites",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Rapid Revenue Validation",
    subtitle: "WEBSITE",
    description:
      "Stop guessing—learn what customers will pay for.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Customer-Focused Development",
    subtitle: "WEBSITE",
    description:
      "Aim for higher retention and a faster product-market fit.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Integration Expertise",
    subtitle: "WEBSITE",
    description:
      "Connect systems to unlock new growth channels.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Scalable Infrastructure",
    subtitle: "WEBSITE",
    description:
      "Grow without fear of costly rewrites",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Rapid Revenue Validation",
    subtitle: "WEBSITE",
    description:
      "Stop guessing—learn what customers will pay for.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Customer-Focused Development",
    subtitle: "WEBSITE",
    description:
      "Aim for higher retention and a faster product-market fit.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Integration Expertise",
    subtitle: "WEBSITE",
    description:
      "Connect systems to unlock new growth channels.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Scalable Infrastructure",
    subtitle: "WEBSITE",
    description:
      "Grow without fear of costly rewrites",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Rapid Revenue Validation",
    subtitle: "WEBSITE",
    description:
      "Stop guessing—learn what customers will pay for.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Customer-Focused Development",
    subtitle: "WEBSITE",
    description:
      "Aim for higher retention and a faster product-market fit.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Integration Expertise",
    subtitle: "WEBSITE",
    description:
      "Connect systems to unlock new growth channels.",
    awards: ["W", "W", "FWA"],
  },
  {
    title: "Scalable Infrastructure",
    subtitle: "WEBSITE",
    description:
      "Grow without fear of costly rewrites",
    awards: ["W", "W", "FWA"],
  },
 
];

export default function AwardsSection() {
  const rowRef = useRef(null);
  const sectionRef = useRef(null);
  const wheelRef = useRef(null);
  const cardRefs = useRef([]);
  
  useEffect(() => {
    const wheel = wheelRef.current;
    const cards = cardRefs.current;

    const setup = () => {
      const radius = wheel?.offsetWidth / 2;
      const center = radius;
      const total = cards.length;
      const slice = (2 * Math.PI) / total;

      cards.forEach((card, i) => {
        const angle = i * slice;
        const x = center + radius * Math.sin(angle);
        const y = center - radius * Math.cos(angle);

        gsap.set(card, {
          rotation: angle + "_rad",
          xPercent: -50,
          yPercent: -50,
          x,
          y,
        });
      });
    };

    setup();
    window.addEventListener("resize", setup);



    gsap.to(wheel, {
      rotate: -360,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom+=1000 center",
        scrub: true,
        // Optionally keep this if needed, or remove it entirely
        // snap: {
        //   snapTo: 1 / cards.length,
        //   duration: { min: 0.2, max: 0.5 },
        //   ease: "power1.inOut",
        // },
        invalidateOnRefresh: true,
      },
    });
    

    return () => window.removeEventListener("resize", setup);
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        backgroundColor: "#000",
        py: 8,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        height: "80vh"
      }}
    >
      <Container maxWidth="lg" >
      <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
  
  {/* SVG Background */}
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "18%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      
      width: "100%",
      maxWidth: "600px",
    }}
    dangerouslySetInnerHTML={{ __html: Svgs.bgArrow }}
  />

  <Typography
    variant="h3"
    sx={{
      color: Colors.white,
      textAlign: "center",
      mb: 8,
      fontWeight: 700,
      mt: "-14px",
      position: "relative",
      zIndex: 1,
      fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },

    }}
  >
    Why Choose Guaranteed Software
  </Typography>

</Box>

        <Grid
          container
          ref={rowRef}
          spacing={4}
          sx={{
            flexWrap: "nowrap",
            overflowX: "visible",
            py: 2,

            width: `100%`,
            minWidth: "100%",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
               height: "40vh",
              position: "absolute",
              bottom: 0,
              width: "80%",
            }}
          >
            <Box
              className="wheel"
              ref={wheelRef}
              sx={{
                position: "absolute",
                top: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "300vw",
                height: "300vw",
                maxWidth: "2000px",
                maxHeight: "2000px",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop:"-20px"
              }}
            >
              {cards.map((card, idx) => (
                <Box
                  key={idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className="wheel__card"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "250px",
                    height: "250px",
                    borderRadius: "12px",
                    backgroundColor: "#111",
                    color: "#fff",
                    border: "2px solid #444",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: 1,
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#111",
                      color: "#fff",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    
                    <Box sx={{ p: 3, flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: Colors.primary, fontWeight: 700 ,fontSize:'18px' }}
                      >
                        {card.title}
                      </Typography>
                     
                      <Typography variant="body2" sx={{mt:1}}>
                        {card.description}
                      </Typography>
                    </Box>

                    

                  
                    </Box>
                  </Box>
              
              ))}
            </Box>
          </Box>
        </Grid>
      </Container>

     
    </Box>
    
  );
}
