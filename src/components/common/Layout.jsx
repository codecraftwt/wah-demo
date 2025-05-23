import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: "hidden",
        backgroundColor: "white",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          maxWidth: "100%",
          paddingTop: { xs: "70px", sm: "90px", md: "115px" },
          background: "inherit",
          overflowY: "auto",
          height: "calc(100vh - 70px)",
          "@media (min-width: 600px)": {
            height: "calc(100vh - 90px)",
          },
          "@media (min-width: 960px)": {
            height: "calc(100vh - 115px)",
          },
        }}
      >
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
