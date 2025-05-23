import React from "react";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import QRLogo from "../../assets/logos/qr.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f28c38",
        color: "#000000",
        fontFamily: '"Poppins", sans-serif',
        py: { xs: 3, sm: 4 },
        mt: "auto", // Push footer to bottom
      }}
    >
      <Container sx={{ maxWidth: "100%", px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, sm: 4 },
            justifyContent: "space-between",
          }}
        >
          {/* Column 1: Wah! */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 20%" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                // component="div"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontStyle: "normal",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                Wah!
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "white",
                  fontWeight: 500,
                  marginTop: "-0.7rem",
                }}
              >
                Smart Deals
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 15 } }}>
              Subscribe
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 15 } }}>
              Get First Deal for free
            </Typography>
          </Box>

          {/* Column 2: Support */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 20%" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 18 } }}
            >
              Support
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 15 } }}>
              Frisco, Texas, US, 75035
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 15 } }}>
              <Link
                href="mailto:admin@wahsmartdeals.com"
                sx={{
                  color: "#000000",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                admin@wahsmartdeals.com
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 15 } }}>
              <Link
                href="tel:+19725654111"
                sx={{
                  color: "#000000",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                1972-565-4111
              </Link>
            </Typography>
          </Box>

          {/* Column 3: Account */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 20%" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 18 } }}
            >
              Account
            </Typography>
            {["My Account", "My Stuff", "Wallet", "Chat"].map(item => (
              <Typography
                key={item}
                variant="body2"
                sx={{ fontSize: { xs: 14, sm: 15 } }}
              >
                <Link
                  href="#"
                  sx={{
                    color: "#000000",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* Column 4: Quick Link */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 20%" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 18 } }}
            >
              Quick Link
            </Typography>
            {["Privacy Policy", "Terms of Use", "FAQ", "Contact"].map(item => (
              <Typography
                key={item}
                variant="body2"
                sx={{ fontSize: { xs: 14, sm: 15 } }}
              >
                <Link
                  href="#"
                  sx={{
                    color: "#000000",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* Column 5: Download App */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 20%" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 18 } }}
            >
              Download App
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${QRLogo})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: 2,
                  mb: 1,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  sx={{ width: 140, mb: 1 }}
                />
                <Box
                  component="img"
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  sx={{ width: 120, mb: 1 }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#000000" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#000000" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#000000" }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 3, sm: 4 },
            pt: 2,
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: { xs: 12, sm: 14 } }}>
            @Copyright wahsmartdeals 205. All right reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
