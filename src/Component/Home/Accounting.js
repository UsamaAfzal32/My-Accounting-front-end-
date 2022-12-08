import React from 'react'
import { Box, Button,  Typography } from "@mui/material";
import Dashboard from "../../assets/images/akaunting-dashboard.png";
const Accounting = () => {
  return(
    <Box sx={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center'
    ,mt:'10vh'}}>
    <Box sx={{height:'100%',width:'90%',background: "linear-gradient(90deg,#9888b1,#f8cde6,#fff9fc)",
        alignItems: "center",justifyContent:'space-between',display:"flex"}}>
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          
          height:'60%',
          width:'42%'
        }}
      >
      <Box  sx={{display:'flex',height:'5vh',width:'100%',justifyContent:'space-between'}}>
        <Box
          sx={{
            width:'15%',
            background: "white",
            color: "#6ea152",
            display: "inline",
            height:'60%'

          }}>
          What`New   </Box>
        <Box sx={{width:"83%", background: "",}}>
        <Typography sx={{ color: "white" }}>
        Akaunting 3.0 is live! Discover Akaunting with a better UI & UX.
        </Typography></Box>
       
        </Box>

        <Typography  variant="h3" sx={{ color: "white",fontWeight:'bold' }}>
          Free Accounting Software
        </Typography>
        
        <Typography sx={{ color: "white" }}>
          Akaunting is a free, open-source, and online accounting software for
          small businesses and freelancers.
        </Typography>
        <Button sx={{ color: "white", backgroundColor: "#6ea152",width:'40%',height:'10%',borderRadius:"10px" }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{background:'blue',width: "50vw",height:'80vh'}}>
       
          <img src={Dashboard} height='100%' width='100%'></img>
       
    </Box>
    </Box>
    
    </Box>
  );
   
  
}

export default Accounting