import { Box, Card, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export const Crd = () => {
  return (
    <Box sx={{width:'100vw',height:'60vh',display:'flex',justifyContent:'center'}}>
    <Box sx={{height:'100%',width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    
      <Card
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "30vh",
          width: "30%",
          borderRadius:'20px'
          
        }}
      >
        <Box
          sx={{
            
            background: "#55588b",
            height: "60px",
            width: "50px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRadius:'10px',
            position:'absolute',
            mt:'-15px',
          }}
        >
          <FavoriteBorderOutlinedIcon
            sx={{ height: "25px", width: "25px", color: "white" }}
          />
        </Box>
        <Box sx={{ml:'10px',mt:'80px'}}>
          <Typography variant="h6">Free</Typography>
          <Typography color={"#6b7280"}>
            That's right, completely free. There is no limited or trial version,
            only full. No hidden charges or setup fees. No countdown. Free means
            free.
          </Typography>
        </Box>
      </Card>
      <Card
        elevation={10}
        sx={{
          height: "30vh",
          width: "30%",
          borderRadius:'20px'
        }}
      >
      <Box
          sx={{
            background: "#55588b",
            ml: "15px",
            height: "60px",
            width: "50px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRadius:'10px',
            position:'absolute',
            mt:'-15px',
          }}
        >
          <LanguageOutlinedIcon
            sx={{ height: "25px", width: "25px", color: "white" }}
          />
        </Box>
        <Box sx={{ml:'10px',mt:'80px'}}>
        <Typography variant="h6">Online</Typography>
        <Typography color={"#6b7280"}>
          See your financials online anytime, anywhere on your computer, tablet
          or phone. Run your business from anywhere and know your cash position.
        </Typography>
        </Box>
      </Card>
      <Card
        elevation={10}
        sx={{
          height: "30vh",
          width: "30%",
          borderRadius:'20px'
        }}
      >
      <Box sx={{
             background:'#55588b',
             height:'60px',
             width:'50px',
            
             ml:'15px',
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             borderRadius:'10px',
             position:'absolute',
            mt:'-15px',

      }}>
       <RemoveRedEyeOutlinedIcon
        sx={{
        height: "25px", 
       width: "25px", 
       color: "white" }}/>
      </Box>
      <Box sx={{ 
        ml:'10px',mt:'80px'
      }}>
        <Typography variant="h6">Open Source</Typography>
        <Typography color={"#6b7280"}>
          As we talk about your financials, you must be sure that data is in
          safe and software doesn't abuse them. Open Source software provides
          you full privacy.
        </Typography>
        </Box>
      </Card>
    </Box>
    
    </Box>
  );
};
