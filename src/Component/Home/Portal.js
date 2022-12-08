import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import Client from "../../assets/images/client-portal.png";
export const Portal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: "100vw",
        height: "100vh",
       
      }}
    >
      <Box
        sx={{
          
          height: "100%",
          width: "95%",
          display: "flex",
          justifyContent:'space-between'
        }}
      >
        <Box
          sx={{
            
            height: "40%",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            mt:'170px'
          }}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            Client Portal
          </Typography>
          <Typography color={"#6b7280"}>
            Give your clients the ease of client portal. Share the transactions
            and invoices with your clients and accept bulk payments.
          </Typography>
          <Button
            sx={{ color: "white", backgroundColor: "#6ea152", height:'20%',width: "70%",borderRadius:'10px' }}
          >
            Get Started
          </Button>
        </Box>
        <Card elevation={10}
          sx={{backgroundImage:
              "url(https://assets.akaunting.com/site/img/pages/home/akaunting-client-portal.png)",backgroundSize:'cover',
            height: "90%",width:'60%',
          }}
        ></Card>
      </Box>
    </Box>
  );
};
