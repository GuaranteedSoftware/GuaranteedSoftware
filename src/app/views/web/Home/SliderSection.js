"use client"

import { Box, Typography, CardMedia } from "@mui/material"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Colors from "../../../assets/styles"
import { Images } from "../../../assets/images"

gsap.registerPlugin(ScrollTrigger)

function SliderSection() {
  const containerRef = useRef(null)
  const autoScrollTween = useRef(null)

  const developers = [
    { id: 1, src: Images.hero1, alt: "Asee by Asseco" },
    { id: 2, src: Images.hero2, alt: "Coca-Cola" },
    { id: 3, src: Images.hero3, alt: "HZ Cargo" },
    { id: 4, src: Images.hero4, alt: "InterCapital" },
    { id: 5, src: Images.hero5, alt: "Lavergne" },
    { id: 6, src: Images.hero6, alt: "Another Company" },
    { id: 7, src: Images.hero7, alt: "Brand X" },
    { id: 8, src: Images.hero8, alt: "Brand X" },
    { id: 9, src: Images.hero9, alt: "Brand X" },
    { id: 10, src: Images.hero10, alt: "Brand X" },
  ]

  useEffect(() => {
    if (containerRef.current) {
      const el = containerRef.current
  
      autoScrollTween.current = gsap.to(el, {
        x: "-50%",
        ease: "none",
        repeat: -1,
        duration: 20, 
      })
  
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          autoScrollTween.current.timeScale(self.direction > 0 ? 1 : -1)
        },
      })
    }
  }, [])
  

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "black",
        position: "relative",
        py: 12,
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          mb: 6,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem", lg: "5  rem" },
          textTransform:"uppercase",
          WebkitTextStroke: "2px #aaa",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Our Clients
      </Typography>

      <Box sx={{ width: "100%", overflow: "hidden", 
            transform: "skewY(-3deg)",

       }}>
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            gap: 4,
            // transform: "skewY(-3deg)",
            py: 4,
            width: "fit-content",
            minWidth: "100%",
            height:'250px'
          }}
        >
          {developers.concat(developers).map((logo, index) => (  // duplicate for seamless loop
            <Box
              key={`${logo.id}-${index}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 180,
                height: 180,
                borderRadius: "50%",
                backgroundColor: "aliceblue",
                border: `3px solid ${Colors.primary}`,
                overflow: "hidden",
                boxShadow: `0 0 15px ${Colors.primary}`,
                transform: "rotate(-10deg)",
              }}
            >
              <CardMedia
                component="img"
                image={logo.src}
                alt={logo.alt}
                sx={{
                  mixBlendMode: "multiply",
                  width: 100,
                  height: 100,
                  objectFit: "contain",
                  transform: "rotate(10deg)",
                  scale: "1.2",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SliderSection
