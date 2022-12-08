import { Box, ImageListItem, Typography } from "@mui/material";
import React from "react";
import ImageUrl from "../../assets/images/circle.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Footer = () => {
  return (
    <Box sx={{backgroundColor: "#f3f4f6",height:'100vh',width:'100vw',display:'flex',justifyContent:'center'}}>
      <Box  sx={{height:'90%',width:'90%',}}>
      <Box
        sx={{

          display: "flex",
          marginTop: "10vh",
          justifyContent: "space-between",
          height:'70%',
          width:"100%",
          
        }}
      >
      
        <Box
          sx={{
            width:'25%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          <Typography variant="h6" color={'#9CA3AF'}>BLOG</Typography>
          <Typography color="#6B7280">What do net 30 payment terms mean?</Typography>
          <Typography color="#6B7280">Accounting Software for Accountants</Typography>
          <Typography color="#6B7280">What is a 1099 NEC form used for?</Typography>
          <Typography color="#6B7280">What are Billable Hours?</Typography>
          <Typography color="#6B7280">Deciding On Accounting Software for Project Management</Typography>
          <Typography color="#6B7280">What are performance metrics?</Typography>
        </Box>
        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            mr:'10%',
            width:'15%'

          }}
        >
          <Typography variant="h6" color={"#9CA3AF"}>TRENDING APPS</Typography>
          <Typography color="#6B7280">Bank Feeds</Typography>
          <Typography color="#6B7280">Double-Entry</Typography>
          <Typography color="#6B7280">Projects</Typography>
          <Typography color="#6B7280">Inventory</Typography>
          <Typography color="#6B7280">Estimates (Quotes)</Typography>
          <Typography color="#6B7280">Expenses</Typography>
          <Typography color="#6B7280">Custom Fields</Typography>
        </Box>
        <Box
          sx={{
          
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width:'15%',
            mr:"3%",
          }}
        >
          <Typography variant="h6" color={"#9CA3AF"}>RESOURCES</Typography>
          <Typography color="#6B7280">Plans</Typography>
          <Typography color="#6B7280">On-Premise vs Cloud</Typography>
          <Typography color="#6B7280">Free Tools</Typography> 
          <Typography color="#6B7280">Premium Cloud</Typography>
          <Typography color="#6B7280">Documentation</Typography>
          <Typography color="#6B7280">Developers</Typography>
          <Typography color="#6B7280">Accountants</Typography>
        </Box>
        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h6" color={"#9CA3AF"}>LINKS</Typography>
          <Typography color="#6B7280">Akaunting 3.0</Typography>
          <Typography  color="#6B7280">Accounting Software</Typography>
          <Typography color="#6B7280">Open Source Accounting Software</Typography>
          <Typography color="#6B7280">Free Wave Accounting Alternative</Typography>
          <Typography color="#6B7280">Online Accounting Software</Typography>
          <Typography color="#6B7280">Free QuickBooks Alternative</Typography>
          <Typography color="#6B7280">Free FreshBooks Alternative</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center",mt:'30px',}}>
        <ImageListItem sx={{ width: "4vw" }}>
          <img src={ImageUrl} />
        </ImageListItem>
        <Box>
        <Typography color="#6B7280">Online, open source and free accounting software for small businesses.</Typography>
        <Typography color="#6B7280"> Track your income and expenses with ease. </Typography>
        <Typography color="#6B7280"> © Akaunting 2022</Typography></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt:'35px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            width:'20%',
            justifyContent: "space-between",
          }}
        >
          <Typography color="#6B7280">About</Typography>
          <Typography color="#6B7280">Terms</Typography>
          <Typography color="#6B7280">Privacy</Typography>
          <Typography color="#6B7280">Contact</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            width:'10%',
            justifyContent: "space-between",
          }}>
          <GitHubIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
      </Box>
      </Box>
    </Box>
  );
};
