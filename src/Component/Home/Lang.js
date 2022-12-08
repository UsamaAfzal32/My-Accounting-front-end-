import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

export const Lang = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#55588b",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
          width: "60%",
          borderRadius: "20px",
          marginTop: "20px",
          ml: "25%",
          padding: "auto",
        }}
      >
        <Box
          sx={{
            height: "40%",
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography fontWeight="bold" variant="h4">
            Accounting in 50+ languages
          </Typography>
          <Typography>
            Akaunting is translated over 50 languages by its volunteer
            contributors from all around the world.
          </Typography>
          <Button
            sx={{
              color: "purple",
              backgroundColor: "white",
              width: "30%",
              borderRadius: "10px",
            }}
          >
            See languages
          </Button>
        </Box>
        <Card
          sx={{
            backgroundImage:
              "url(https://assets.akaunting.com/site/img/pages/home/akaunting-languages.png)",
            height: "50%",
            width: "25%",
            position: "absolute",
            ml: "-75%",
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
        ></Card>
      </Box>
    </Box>
  );
};
