import {  AppBar,Box,Button, ImageListItem, Toolbar,Typography} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../../assets/images/circle.png";


export const AppBarrr = () => {
  return (
   
   <AppBar >
          <Toolbar sx={{background:'white',display:'flex',justifyContent:'center',}}>
            <Box
              sx={{
              
                height: "30%",
                display: "flex",
                width: "90%",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Box sx={{ 
                display: "flex", 
                alignItems: "center",
                height:'15%',
                width:'20%'
               
                }}>
                <ImageListItem sx={{ width: "5vw" }}>
                  <img src={ImageUrl} />
                </ImageListItem>
                <Typography variant="h4" color={"black"} height={"10%"} width={"15%"}>
                  Akaunting
                </Typography>
              </Box>
              <Box sx={{ 
                display: "flex",
                 justifyContent: "space-evenly",
                 
                 height:'20%',
                 width:'40%'
                  }}>
                <Button sx={{ color: "grey" }} variant="text">
                  Apps
                </Button>
                <Button sx={{ color: "grey" }} variant="text">
                  Features
                </Button>
                <Button sx={{ color: "grey" }} variant="text">
                  Support
                </Button>
                <Button sx={{ color: "grey" }} variant="text">
                  Blog
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "20%",
                  height:'20%'
                }}
              >
               <Link to="/signInPage" style={{ textDecoration: 'none' }}> <Button sx={{ color: "grey" }} variant="text">
                  Sign In
                </Button></Link>

                <Button sx={{ color: "white", backgroundColor: "#6ea152" }}>
                  Get Started
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
     
    
  );
};
