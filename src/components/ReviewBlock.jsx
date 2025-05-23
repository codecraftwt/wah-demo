import React from "react";
import { Box, Typography } from "@mui/material";

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
        display: { xs: "none", sm: "flex" },
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

export default ReviewBlock;
