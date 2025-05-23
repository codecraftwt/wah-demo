import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({
  image,
  discount,
  productName,
  price,
  originalPrice,
  rating,
  reviews,
}) => {
  return (
    <Card
      sx={{
        width: 217,
        borderRadius: 2,
        boxShadow: 3,
        position: "relative",
        overflow: "hidden",
        mb:2,
        mx:2
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt={productName}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />

      {/* Discount Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          backgroundColor: "#f28c38",
          color: "#000",
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        -{discount}%
      </Box>

      {/* Heart Icon */}
      <IconButton
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          backgroundColor: "#fff",
          "&:hover": { backgroundColor: "#f1f1f1" },
        }}
      >
        <FavoriteBorderIcon sx={{ color: "#000" }} />
      </IconButton>

      {/* Product Info */}
      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 0.5,
            fontSize: 16,
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {productName}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "#f28c38", fontSize: 16 }}
          >
            ${price}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "grey.600",
              textDecoration: "line-through",
              fontSize: 14,
            }}
          >
            ${originalPrice}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              sx={{
                fontSize: 16,
                color: i < rating ? "#f28c38" : "grey.400",
              }}
            />
          ))}
          <Typography variant="body2" sx={{ color: "grey.600", ml: 0.5 }}>
            ({reviews})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
