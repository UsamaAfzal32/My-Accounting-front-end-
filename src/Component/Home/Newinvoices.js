import { Box,  Typography } from "@mui/material";
import React from "react";
import Newinvoice from "../../assets/images/invoice.png";
export const Newinvoices = () => {
  return (
    <Box sx={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',mt:'10%'}}>
    <Box sx={{width:"90%",height:"100%",display: "flex",flexDirection: "column",justifyContent: "space-evenly",textAlign: "center",alignItems: "center",
             }}>
   
      <Typography fontWeight={'bold'} variant="h4">Free Bookkeeping Software for SMEs</Typography>

      <Typography variant="h6" color={"gray"}>
        From invoicing to expense tracking to accounting, Akaunting has all the
        tools
        <br /> you need to manage your money online, for free.
      </Typography>
       
      
        <img style={{height:'80%', width: "90%",}} src={Newinvoice}></img>
      
    </Box>
    </Box>
    
  );
};




