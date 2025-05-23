import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from 'react-fast-marquee';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormGroup,
  Checkbox,
  Divider,
  Grid,
} from "@mui/material";
import { FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import logo1 from "../assets/logos/facebook.png";
import logo2 from "../assets/logos/instagram.png";
import logo3 from "../assets/logos/web.png";
import ProductData from "../db/productData.json";
import ProductCard from "../components/Card";

// Static product data
const staticProduct = {
  _id: "12345",
  title: "Wireless Headphones",
  name: "Havic HV G-92 Gamepad",
  images: [image1, image2, image3, image4, image5],
  price: 2999,
  color: "Black",
  type: "Over-Ear",
  features: [
    "Active Noise Cancellation",
    "20 Hours Battery Life",
    "Bluetooth 5.0",
    "Comfortable Ear Pads",
  ],
  availability: "In Stock",
  brand: "SoundWave",
  numReviews: 120,
};

const RatingWithCoupons = () => {
  const totalStars = 5;
  const filledStars = 4;
  const reviews = 150;
  const couponsLeft = 25;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 1.5 },
        fontFamily: '"Poppins", sans-serif',
        mt: 1,
      }}
    >
      <Box sx={{ display: "flex" }}>
        {[...Array(totalStars)].map((_, index) => (
          <Typography
            key={index}
            component="span"
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: index < filledStars ? "#f28c38" : "grey.500",
              lineHeight: 1,
            }}
          >
            ★
          </Typography>
        ))}
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "grey.600",
          fontSize: { xs: 12, sm: 14 },
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        ({reviews} reviews)
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "grey.600",
          fontSize: { xs: 12, sm: 14 },
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        |
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "grey.600",
          fontSize: { xs: 12, sm: 14 },
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {couponsLeft} Coupons left
      </Typography>
    </Box>
  );
};

const ReviewBlock = () => {
  const totalStars = 5;
  const rating = 4.8;
  const reviews = 150;
  const reviewDistribution = [
    { stars: 5, count: 70 },
    { stars: 4, count: 5 },
    { stars: 3, count: 8 },
    { stars: 2, count: 2 },
    { stars: 1, count: 1 },
  ];
  const maxReviews = Math.max(...reviewDistribution.map(r => r.count));

  return (
    <Box
      sx={{
        display: {xs:"none", sm:"flex"},
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 3, sm: 4 },
        alignItems: "center",
        mt: 2,
        mb: 2,
        width: "100%",
        maxWidth: "100%",
        fontFamily: '"Poppins", sans-serif',
        px: { xs: 2, sm: 0 }, // add some horizontal padding on mobile
      }}
    >
      {/* First Block: Rating, Reviews, View Reviews */}
      <Box
        sx={{
          flex: { xs: "none", sm: "1 1 30%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: { xs: 3, sm: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "black",
            fontSize: { xs: 22, sm: 32 },
          }}
        >
          {rating}/5
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey.600",
            fontSize: { xs: 12, sm: 14 },
            mt: 0.5,
          }}
        >
          {reviews} reviews
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#f28c38",
            fontSize: { xs: 12, sm: 14 },
            mt: 0.5,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View Reviews
        </Typography>
      </Box>

      {/* Second Block: Star Rows */}
      <Box
        sx={{
          flex: { xs: "none", sm: "1 1 30%" },
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
          width: "100%",
          maxWidth: { xs: "300px", sm: "none" }, // constrain width on mobile for better layout
        }}
      >
        {[...Array(totalStars)].map((_, rowIndex) => {
          const filledStars = totalStars - rowIndex;
          return (
            <Box
              key={rowIndex}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              {[...Array(totalStars)].map((_, starIndex) => (
                <Typography
                  key={starIndex}
                  component="span"
                  sx={{
                    fontSize: { xs: 12, sm: 16 },
                    color: starIndex < filledStars ? "#FFAB40" : "grey.500",
                    lineHeight: 1.4,
                  }}
                >
                  ★
                </Typography>
              ))}
            </Box>
          );
        })}
      </Box>
      {/* Third Block: Progress Bars with Review Counts */}
      <Box
        sx={{
          flex: { xs: "none", sm: "1 1 40%" },
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "100%",
          maxWidth: { xs: "300px", sm: "none" },
        }}
      >
        {reviewDistribution.map(({ stars, count }) => (
          <Box
            key={stars}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: 10, sm: 14 },
                color: "grey.600",
                width: 20,
                flexShrink: 0,
              }}
            >
              {stars}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                height: 4,
                backgroundColor: "grey.200",
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: `${(count / maxReviews) * 100}%`,
                  height: "100%",
                  backgroundColor: "#FFAB40",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: 10, sm: 14 },
                color: "grey.600",
                width: 30,
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              {count}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Home = ({ addtoCart, userId, isLoggedIn }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const theme = useTheme();
  const [selectedDiscount, setSelectedDiscount] = useState("fiftyPercent");
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedServices(prev => [...prev, name]);
    } else {
      setSelectedServices(prev => prev.filter(service => service !== name));
    }
  };

  const handleChange = event => {
    setSelectedDiscount(event.target.value);
  };

  const handleThumbnailClick = index => {
    setMainImageIndex(index);
  };

  const handleCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (!userId || !staticProduct._id) {
      console.error("User ID or product data missing");
      return;
    }
    addtoCart(staticProduct._id);
    navigate("/cart");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (staticProduct.images && staticProduct.images.length) {
        setMainImageIndex(
          prevIndex => (prevIndex + 1) % staticProduct.images.length
        );
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container
      sx={{ flexGrow: 1, py: 1, maxWidth: "100%", backgroundColor: "white" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          gap: 2,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Image Section - 60% on desktop */}
          <Box sx={{ flex: { md: "3 1 60%", xs: "1 1 100%" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" },
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {staticProduct.images.slice(1).map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{
                      [theme.breakpoints.up("xs")]: {
                        width: 60,
                        height: 60,
                        marginTop: "1rem",
                      },
                      [theme.breakpoints.up("400")]: {
                        width: 90,
                        height: 90,
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: 100,
                        height: 100,
                      },
                      objectFit: "cover",
                      borderRadius: 1,
                      border:
                        mainImageIndex === index + 1
                          ? "2px solid #f28c38"
                          : "1px solid grey",
                      cursor: "pointer",
                      "&:hover": { border: "2px solid #f28c38" },
                    }}
                    onClick={() => handleThumbnailClick(index + 1)}
                  />
                ))}
              </Box>
              <Box
                component="img"
                src={staticProduct.images[mainImageIndex]}
                alt={`Main Product Image ${mainImageIndex + 1}`}
                sx={{
                  width: "100%",
                  maxHeight: 430,
                  objectFit: "cover",
                  borderRadius: 2,
                  marginLeft: { xs: "0", sm: "1rem" },
                  marginTop: { xs: "1rem", md: "0" },
                }}
              />
            </Box>
          </Box>

          {/* Details Section - 40% on desktop */}
          <Box sx={{ flex: { md: "2 1 40%", xs: "1 1 100%" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 0, md: 2 },
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "58%" }, mt: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  40% OFF on {staticProduct.name}
                </Typography>
              </Box>
              <IconButton sx={{ ml: "auto" }} aria-label="cart">
                <FavoriteBorderIcon
                  sx={{
                    fontSize: 24,
                    color: "gray",
                    transition: "color 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      color: "red",
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </IconButton>
            </Box>

            <RatingWithCoupons />

            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box
                component="img"
                src={logo1}
                alt="Facebook logo"
                sx={{ maxHeight: "2rem", width: "auto" }}
              />
              <Box
                component="img"
                src={logo2}
                alt="Instagram logo"
                sx={{ maxHeight: "2.5rem", width: "auto" }}
              />
              <Box
                component="img"
                src={logo3}
                alt="Web logo"
                sx={{ maxHeight: "2rem", width: "auto" }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#f28c38",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: 38,
                }}
              >
                $120
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "gray",
                  fontFamily: '"Poppins", sans-serif',
                  textDecoration: "line-through",
                  fontSize: 38,
                }}
              >
                $160
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 1,
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: 14, sm: 16 },
                  color: "gray",
                  fontWeight: 600,
                }}
              >
                Please select at least one base item
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedDiscount}
                  onChange={handleChange}
                  name="discount"
                >
                  <FormControlLabel
                    value="fiftyPercent"
                    control={
                      <Radio
                        sx={{
                          color: "#f28c38",
                          my: 1,
                          "&.Mui-checked": {
                            color: "#f28c38",
                          },
                        }}
                      />
                    }
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            width: "60%",
                            color: "gray",
                            fontWeight: 600,
                          }}
                        >
                          Get flat 50% on new and latest collection above
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            color: "#f28c38",
                            fontWeight: 600,
                          }}
                        >
                          $100
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="thirtyPercent"
                    control={
                      <Radio
                        sx={{
                          color: "#f28c38",
                          my: 1,
                          "&.Mui-checked": {
                            color: "#f28c38",
                          },
                        }}
                      />
                    }
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            width: "60%",
                            color: "gray",
                            fontWeight: 600,
                          }}
                        >
                          Get flat 30% on new and latest collection above
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            color: "#f28c38",
                            fontWeight: 600,
                          }}
                        >
                          $70
                        </Typography>
                      </Box>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 1,
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: 14, sm: 16 },
                  color: "gray",
                  fontWeight: 600,
                }}
              >
                Our Add on services
              </Typography>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedServices.includes("dressStitching")}
                        onChange={handleCheckboxChange}
                        name="dressStitching"
                        sx={{
                          color: "#f28c38",
                          my: 2,
                          "&.Mui-checked": {
                            color: "#f28c38",
                          },
                        }}
                      />
                    }
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: { xs: "100%", md: "133%" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            color: "gray",
                            fontWeight: 600,
                            width: "60%",
                          }}
                        >
                          Dress Stitching at affordable price
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            color: "#f28c38",
                            fontWeight: 600,
                          }}
                        >
                          $300
                        </Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedServices.includes("shirtStitching")}
                        onChange={handleCheckboxChange}
                        name="shirtStitching"
                        sx={{
                          color: "#f28c38",
                          my: 2,
                          "&.Mui-checked": {
                            color: "#f28c38",
                          },
                        }}
                      />
                    }
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: { xs: "100%", md: "130%" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            width: "55%",
                            color: "gray",
                            fontWeight: 600,
                          }}
                        >
                          Get your shirt stitched to perfection
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: 12, sm: 14 },
                            color: "#f28c38",
                            fontWeight: 600,
                          }}
                        >
                          $150
                        </Typography>
                      </Box>
                    }
                  />
                </FormGroup>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 2, pb: 2 }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  textTransform: "none",
                  bgcolor: "#f28c38",
                  color: "black",
                  py: 1.5,
                  "&:hover": { bgcolor: "#e07b30" },
                }}
              >
                Generate Coupon
              </Button>
            </Box>
            <Box>
              <Box my={2}>
                <Typography variant="h5" fontWeight={600}>
                  Deal Description
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: "gray", fontWeight: "500" }}
                >
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </Typography>
              </Box>
              <Divider sx={{ height: 1, backgroundColor: "grey.500", my: 2 }} />
              <Box my={2}>
                <Typography variant="h5" fontWeight={600}>
                  Deal Terms and Conditions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: "gray", fontWeight: "500" }}
                >
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </Typography>
              </Box>
              <Divider sx={{ height: 1, backgroundColor: "grey.500", my: 2 }} />
            </Box>
            <ReviewBlock />
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Marquee speed={50}>
            {ProductData.map(item => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ProductCard {...item} />
              </Grid>
            ))}
          </Marquee>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
