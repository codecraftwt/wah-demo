import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  InputBase,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import {
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Storefront as StorefrontIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../utils/constants";

// Custom styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
  marginLeft: theme.spacing(2),
  width: "auto",
  flexGrow: 1,
  maxWidth: "300px",
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2),
    maxWidth: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  position: "relative",
  "&.active": {
    fontWeight: "800",
    color: "#f28c38",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -4,
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "#f28c38",
      transform: "scaleX(1)",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease-in-out",
    },
  },
  "&:hover::after": {
    content: '""',
    position: "absolute",
    bottom: -4,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#f28c38",
    transform: "scaleX(1)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-in-out",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -4,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#f28c38",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-in-out",
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <LogoContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <StorefrontIcon
            sx={{ fontSize: 50, marginLeft: 1, color: "#f28c38" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              component="div"
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
                color: "#f28c38",
                fontWeight: 500,
              }}
            >
              Smart Deals
            </Typography>
          </Box>
        </Box>
      </LogoContainer>
      <List>
        {NAV_LINKS.map(link => (
          <ListItem
            button
            key={link}
            component={NavLink}
            to={`/${link.toLowerCase().replace(/\s+/g, "-", "!")}`}
            sx={{
              color: "black",
              fontFamily: '"Poppins", sans-serif',
              "&.active": {
                fontWeight: "bold",
                color: "#f28c38",
              },
            }}
          >
            <ListItemText primary={link} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar
      sx={{
        position: "fixed",
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "3px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          marginY: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {/* Hamburger Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" }, marginRight: 0 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo Section */}
        <LogoContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <StorefrontIcon
              sx={{ fontSize: 70, marginLeft: 1, color: "#f28c38" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                component="div"
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
                  color: "#f28c38",
                  fontWeight: 500,
                  marginTop:"-0.7rem"
                }}
              >
                Smart Deals
              </Typography>
            </Box>
          </Box>
        </LogoContainer>

        {/* Spacer */}
        <Box sx={{ flexGrow: 0.7 }} />

        {/* Navigation Links */}
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            padding: 0,
            flexWrap: "nowrap",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map(link => (
            <ListItem
              button
              key={link}
              sx={{
                padding: "0 12px",
                whiteSpace: "nowrap",
              }}
            >
              <StyledNavLink
                to={`/${link
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[!]/g, "")}`}
                end={link === "Wah"}
              >
                <ListItemText
                  primary={link}
                  sx={{
                    color: "inherit",
                    fontFamily: '"Poppins", sans-serif',
                    typography: { md: "body2" },
                  }}
                />
              </StyledNavLink>
            </ListItem>
          ))}
        </List>

        {/* Search Bar */}
        <Search sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="What are you looking for?"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* Cart Icon */}
        <IconButton
          sx={{
          }}
          aria-label="cart"
        >
          <FavoriteBorderIcon
            sx={{
              fontSize: {xs:24,sm:32},
              color: "gray",
              transition: "color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                color: "red",
                transform: "scale(1.1)",
              },
            }}
          />
        </IconButton>

        {/* User Icon */}
        <Box
          sx={{
            bgcolor: "orange",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: {xs:30,sm:40},
            width: {xs:30,sm:40},
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{
              height: {xs:"20px",sm:"30px"},
              width: {xs:"20px",sm:"30px"},
              color: "black",
            }}
          />
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
