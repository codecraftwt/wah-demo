import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

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

export default RatingWithCoupons;