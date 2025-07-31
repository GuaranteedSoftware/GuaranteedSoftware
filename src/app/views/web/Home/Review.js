"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Colors from "../../../assets/styles";
import { Images, Svgs } from "../../../assets/images";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ imageSrc, number, title, description, delay = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [delay]);

  return (
    <Box
      ref={cardRef}
      sx={{
        backgroundColor: "transparent",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        minHeight: "400px",
        width: "100%",
        maxWidth: {md:"400px",sm:"390px",xs:"360px"},
        border: `1px solid ${Colors.primary}`,
      }}
    >
      {/* Image Container */}
      <Box
        style={{
          height: "200px",
          overflow: "hidden",
          position: "relative",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          zIndex: 1,
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
            marginTop: "14px",
          }}
        />
      </Box>

      {/* Content Area with Custom Shape SVG */}
      <Box
        style={{
          position: "relative",
          flexGrow: 1,
          padding: "24px",
          paddingTop: "60px",
          color: "white",
          marginTop: "-40px",
          zIndex: 2,
        }}
      >
        {/* SVG for the custom background and border */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "400px",
            zIndex: -1,
            transform: "translateY(-40px)",
          }}
          viewBox="0 0 324 382"
          preserveAspectRatio="none"
        >
          {/* Path for the border */}
          <path
            d="M300 16C300 7.16344 292.837 0 284 0H126.601C120.691 0 115.263 3.25722 112.483 8.47161L95.9219 39.5284C93.1414 44.7428 87.7131 48 81.8037 48H16C7.16344 48 -4.19949e-06 55.1634 -4.08595e-06 64L-2.05582e-07 366C-9.20424e-08 374.837 7.16343 382 16 382H308C316.837 382 324 374.837 324 366V193.211C324 190.451 323.286 187.737 321.927 185.335L302.073 150.225C300.714 147.822 300 145.109 300 142.349V16Z"
            fill="#1A1A1A"
            stroke={Colors.primary}
            strokeWidth="2"
          />
        </svg>
        {/* Content (title, description) */}
        <Typography
          variant="h3"
          style={{
            fontSize: "2rem",
            fontWeight: "bolder",
            textTransform: "uppercase",
            marginBottom: "1rem",
            lineHeight: "1.2",
            fontFamily: "Monuments",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          style={{
            fontSize: "13px",
            lineHeight: "1.5",
            color: "#CCCCCC",
            fontFamily: "Monuments",
          }}
        >
          {description}
        </Typography>
      </Box>

      <span
        style={{
          position: "absolute",
          top: "160px",
          left: "24px",
          backgroundColor: Colors.white,
          color: "black",
          padding: "4px 8px",
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "0.875rem",
          zIndex: 3,
        }}
      >
        {`[${number}]`}
      </span>
    </Box>
  );
}

export default function CardsSection() {
  const cardsData = [
    {
      imageSrc: Images.boltt,
      number: "01",
      title: "LOGO & BRANDING",
      description:
        "We blend creativity and strategy to reflect your brand's essence, ensuring a memorable and cohesive presence across all touchpoints. Let your brand shine and leave a lasting impression.",
      marginTop: "0px",
    },
    {
      imageSrc: Images.clientLogo,
      number: "02",
      title: "UI & UX DESIGN",
      description:
        "We're here to join forces with you, uncovering your goals, target audience, and the unique challenges you face. Together, we'll craft solutions that truly resonate.",
      marginTop: "50px",
    },
    {
      imageSrc: Images.digest2,
      number: "03",
      title: "WEB DESIGN",
      description:
        "From concept to launch, we build robust and scalable web applications tailored to your specific needs. Our focus is on performance, security, and an exceptional user experience.",
      marginTop: "100px",
    },
    {
      imageSrc: Images.kyteBaby,
      number: "04",
      title: "DIGITAL MARKETING",
      description:
        "Amplify your online presence with our comprehensive digital marketing strategies. We drive traffic, engage audiences, and convert leads into loyal customers through data-driven campaigns.",
      marginTop: "150px",
    },
  ];

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        // padding: "4rem 1rem",
      }}
    >

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
        mb:16

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
      <main style={{ maxWidth: "1400px", margin: "0 auto" ,mb:"20px !important"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

        <Typography
          variant="h1"
          sx={{
            // fontSize: "5rem",
            // fontWeight: "bolder",
            textTransform: "uppercase",
            lineHeight: "1",
            marginBottom: "4rem",
            textAlign: "left",
            fontFamily: "Monuments",
            fontSize: {md:"100px !important",sm:"80px !important",xs:"40px !important"},

          }}
        >
          <Box component={"span"}
            sx={{
              color: Colors.primary,
              fontSize: {md:"100px !important",sm:"80px !important",xs:"40px !important"},

              fontFamily: "Monuments",
            }}
          >
            {" "}
            OUR
          </Box>

          <br />
          <Box  component={"span"}
            sx={{
              
              textTransform: "uppercase",
              lineHeight: "1",
              marginBottom: "4rem",
              textAlign: "left",
              fontFamily: "Monuments",
              WebkitTextStroke: "2px #aaa",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: {md:"100px !important",sm:"80px !important",xs:"40px !important"},
            }}
          >
            Clients{" "}
          </Box>
          <br />
          <Box  component={"span"}
            sx={{
             
              textTransform: "uppercase",
              lineHeight: "1",
              marginBottom: "4rem",
              textAlign: "left",
              fontFamily: "Monuments",
              color: Colors.white,
              fontSize: {md:"100px !important",sm:"80px !important",xs:"40px !important"},

            }}
          >
            Say
          </Box>
        </Typography>

        <Box
        sx={{display:{md:'flex',sm:"none",xs:"none"}}}
                       
                        dangerouslySetInnerHTML={{ __html: Svgs["arrowBottom"] }}
                      />
        </Box>

        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {cardsData.map((card, index) => (
            <Box key={index} style={{ marginTop: card.marginTop }}>
              <ServiceCard {...card} delay={index * 0.2} />
            </Box>
          ))}
        </Box>
      </main>
    </Box>
  );
}
