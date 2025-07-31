"use client";

import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Popover,
  Fade,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Svgs } from "../../../assets/images";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Colors from "../../../assets/styles";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Services",
      subItems: [
        { label: "I. Monetization (Business-Ecosystem MAC)" },
        { label: "II. MVP & MVE" },
        { label: "III. System Integrations" },
        { label: "IV. Technical Foundation (Technical MAC)" },
      ],
    },
    { label: "Case Studies" },
    { label: "About" },
    // { label: "Contact Us"},
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const mobileMenu = (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{ "& .MuiDrawer-paper": { width: 280 } }}
    >
      <Box p={2} display="flex" justifyContent="space-between">
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) =>
          item.subItems ? (
            <Box key={index}>
              <ListItem>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1.2rem !important",
                    fontWeight: "bold !important",
                  }}
                />
              </ListItem>
              {item.subItems.map((sub, subIndex) => (
                <ListItem
                  sx={{ pl: 4 }}
                  button
                  key={subIndex}
                  onClick={() => handleNavClick(sub.path)}
                >
                  <ListItemText
                    primary={sub.label}
                    primaryTypographyProps={{
                      fontSize: "1.2rem !important",
                      fontWeight: "bold !important",
                    }}
                  />
                </ListItem>
              ))}
            </Box>
          ) : (
            <ListItem
              button
              key={index}
              onClick={() => handleNavClick(item.path)}
              sx={{
                "& .MuiButtonBase-root": {
                  fontSize: "1.2rem !important",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              />
            </ListItem>
          )
        )}
          <Button
  sx={{
    color: "white",
    backgroundColor: Colors.primary,
    fontSize: "1.2rem",
    fontWeight: "bold",
   padding:"3px 14px",
    borderRadius: "34px",
    display: "flex",
    alignItems: "center",
    gap: 1,
    overflow: "hidden",
    "&:hover .icon": {
      transform: "translateX(20px)",
      opacity: 0,
    },
    "&:hover": {
      backgroundColor: Colors.primary,
      opacity: 0.9,
    },
  }}
>
  Contact
  <KeyboardDoubleArrowRightIcon
    className="icon"
    sx={{
      fontSize: "30px",
      transition: "all 0.3s ease",
    }}
  />
</Button>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position={
          path?.pathname === "/" ? (scrolled ? "sticky" : "absolute") : "static"
        }
        sx={{
          backgroundColor:
            path?.pathname === "/" && !scrolled ? "transparent" : "black",
          boxShadow: scrolled ? 1 : 0,
          py:path?.pathname === "/" && scrolled ? "12px" : "0"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
              <Box
                component="div"
                dangerouslySetInnerHTML={{ __html: Svgs.logo }}
                sx={{ width: { md: "280px", xs: "220px" } }}
              />
            </Box>
            <Popover
              // id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              TransitionComponent={Fade}
              transitionDuration={300}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: 2,
                },
              }}
            >
              <Box p={2} sx={{ background: "#fffffff" }}>
                <Box
                  component="div"
                  dangerouslySetInnerHTML={{ __html: Svgs.marketLogo }}
                  sx={{ width: { md: "280px", xs: "220px" } }}
                />
                <Divider sx={{ color: "black", my: 1 }} />
                <Box
                  component="div"
                  dangerouslySetInnerHTML={{ __html: Svgs.designLogo }}
                  sx={{ width: { md: "280px", xs: "220px" } }}
                />
              </Box>
            </Popover>
            <Box
  sx={{
    display: { xs: "none", md: "flex" },
    gap: 4,
    alignItems: "center",
    mx: "auto",
    borderRadius: "34px",
    borderLeft: `4px solid ${Colors.primary}`,
    borderRight: `4px solid ${Colors.primary}`,
    px: 2, // some padding inside the box
    py: 1,
    backgroundColor: "transparent",
    mt:1
  }}
>
  <Button
    sx={{
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "bold",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: 0,
        height: "2px",
        backgroundColor: Colors.primary,
        transition: "width 0.3s ease",
      },
      "&:hover::after": {
        width: "80%",
      },
    }}
  >
    Services
  </Button>

  {navItems.slice(1).map((item, idx) => (
    <Button
      key={idx}
      onClick={() => handleNavClick(item.path)}
      sx={{
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: 0,
          height: "2px",
          backgroundColor: Colors.primary,
          transition: "width 0.3s ease",
        },
        "&:hover::after": {
          width: "80%",
        },
      }}
    >
      {item.label}
    </Button>
  ))}
</Box>

            <Button
  sx={{
    color: "white",
    backgroundColor: Colors.primary,
    fontSize: "1.2rem",
    fontWeight: "bold",
   padding:"3px 14px",
    borderRadius: "34px",
    display: {md:"flex",sm:"none",xs:"none"},
    alignItems: "center",
    gap: 1,
    overflow: "hidden",
    "&:hover .icon": {
      transform: "translateX(20px)",
      opacity: 0,
    },
    "&:hover": {
      backgroundColor: Colors.primary,
      opacity: 0.9,
    },
  }}
>
  Contact
  <KeyboardDoubleArrowRightIcon
    className="icon"
    sx={{
      fontSize: "30px",
      transition: "all 0.3s ease",
    }}
  />
</Button>
            <IconButton
              sx={{ display: { md: "none" }, color: "white" }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {mobileMenu}
    </>
  );
}
