import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
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
import RatingWithCoupons from "../components/RatingWithCoupons";
import ReviewBlock from "../components/ReviewBlock";

// Static product data
const staticProduct = {
  _id: "12345",
  title: "Wireless Headphones",
  name: "Havic HV G-92 Gamepad",
  images: [image1, image2, image3, image4, image5],
  numReviews: 120,
};

const Home = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const theme = useTheme();
  const [selectedDiscount, setSelectedDiscount] = useState("fiftyPercent");
  const [selectedServices, setSelectedServices] = useState([]);
  const [mainImage, setMainImage] = useState(staticProduct.images[0]);

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
                      width: { xs: 60, sm: 100 },
                      height: { xs: 60, sm: 100 },
                      objectFit: "cover",
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                      "&:hover": { border: "2px solid #f28c38" },
                    }}
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </Box>
              <Box
                component="img"
                src={mainImage}
                alt="Main Product Image"
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
        <Box>
          <Box sx={{ display: "flex", mb: "4rem" }}>
            <Box
              sx={{ height: "2rem", width: "10px", backgroundColor: "#f28c38" }}
            ></Box>
            <Typography variant="h5" color="#f28c38" fontWeight={"600"} ml={2}>
              Similar Deals
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            {ProductData.map(item => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ProductCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
