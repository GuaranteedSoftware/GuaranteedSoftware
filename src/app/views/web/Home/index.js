"use client";

import { useRef, useState } from "react";
import {
  Typography,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  GlobalStyles,
} from "@mui/material";

import { Images } from "../../../assets/images";
import Header from "../Header";
import SliderSection from "./SliderSection";
import Review from "./Review";
import CardSection from "./CardSectiom";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import ServicesPage from "./ServiceSection";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const socialLinks = [
    { icon: <Facebook />, name: "Facebook", url: "#" },
    { icon: <Twitter />, name: "Twitter", url: "#" },
    { icon: <Instagram />, name: "Instagram", url: "#" },
    { icon: <LinkedIn />, name: "LinkedIn", url: "#" },
  ];

  return (
    <>
      {/* Global Styles for Bubble Animation */}
      <GlobalStyles
        styles={{
          "@keyframes floatBubble": {
            "0%": {
              transform: "translateY(0) scale(1)",
              opacity: 0.7,
            },
            "50%": {
              transform: "translateY(-20px) scale(1.2)",
              opacity: 0.5,
            },
            "100%": {
              transform: "translateY(0) scale(1)",
              opacity: 0.7,
            },
          },
        }}
      />

      <Box sx={{ flexFlow: 1 }}>
        <Header />

        <Box
          sx={{
            position: "relative",
            height: "100vh",
            backgroundColor: "black",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: "absolute",
              top: 14,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${Images.bannerGif})`,
              backgroundSize: "750px 700px",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            }}
          />

          {/* Floating Bubbles */}
          {/* <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            {[...Array(40)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  width: `${Math.random() * 12 + 8}px`,
                  height: `${Math.random() * 12 + 8}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `floatBubble ${Math.random() * 10 + 8}s ease-in-out infinite`,
                  opacity: 0.7,
                }}
              />
            ))}
          </Box> */}

          {/* Social Links */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: { md: 20, xs: "auto" },
              left: { xs: "50%", md: "auto" },
              transform: { md: "translateY(-50%)", xs: "translateX(-50%)" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              zIndex: 3,
              color: "white",
              ...(isMobile && {
                flexDirection: "row",
                bottom: 20,
                top: "auto",
              }),
            }}
          >
            {socialLinks.map((link, index) => (
              <Box
                key={index}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": { color: "#ccc" },
                }}
              >
                <span style={{ fontSize: 24 }}>{link.icon}</span>
                <Typography
                  variant="caption"
                  sx={{
                    writingMode: { md: "sideways-lr", sm: "unset" },
                    textOrientation: "mixed",
                    transform: { md: "rotate(180deg)", sm: "auto" },
                    letterSpacing: "2px",
                    fontWeight: 500,
                    mt: 1,
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Center Text */}
          <Container
      maxWidth="lg"
      sx={{ position: "relative", zIndex: 3, height: "100%" }}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor GIF */}
      {/* <Box
        component="img"
        src={Images.cursroGif}
        alt="Cursor Follower"
        sx={{
          position: "absolute",
          top: cursorPos.y,
          left: cursorPos.x,
          width: 250,
          height: 200,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 999,
        }}
      /> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          height:{md: "100vh",sm:"99vh",xs:"84vh"},
          px: { xs: 2, md: 0 },
          mt: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontSize: { md: "50px", sm: "40px", xs: "25px" },
            px: { md: 5, sm: 4, xs: 0 },
            textTransform: "uppercase",
            letterSpacing:'3px'
          }}
        >
          Build Software That Proves Revenue, Delights Users, and Scales with Confidence
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            mb: 4,
            opacity: 0.95,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            px: { md: 15, sm: 4, xs: 0 },
            fontSize: { md: "18px", sm: "16px", xs: "14px" },

          }}
        >
          Guaranteed Software helps both startups and established businesses validate monetization,
          refine user experiences, integrate large-scale systems, and create a rock-solid technical
          foundation
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box
            component="button"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "Monuments !important",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Schedule a Consultation
          </Box>
        </Box>
      </Box>
    </Container>
        </Box>

        <Box>
          <SliderSection />
        </Box>
       
        <Box>
          <ServicesPage />
        </Box>
        <Box>
          <CardSection />
        </Box>
        <Box>
          <Review />
        </Box>
      </Box>
    </>
  );
};

export default Home;
