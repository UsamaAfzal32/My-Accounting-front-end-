import { Avatar, Box, ImageListItem, Typography } from "@mui/material";
import React from "react";
import world from "../../assets/images/earth-globe.png";
import LanguageIcon from "@mui/icons-material/Language";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const Golbal = () => {
  return (
    <Box sx={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center'}}>

        <Box sx={{height:'90%',width:'90%',}}>
 
        <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "80%",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "50%",
          height:'90%',
          mt:'40px'
        }}
      >
        <Typography fontWeight="bold" variant="h4">
          Global SMEs trust Akaunting
        </Typography>
        <Typography color={"#6b7280"}>
          The ease of doing accounting makes Akaunting the favorite of small
          businesses in different countries.
        </Typography>
        <Box
          sx={{
            height: "25%",
            width:'100%',
            display: "flex",  
            justifyContent: "space-between",
          
            mt:'5%'
          }}
        >
          <Avatar
            sx={{
              background: "#55588b",
              mt: "8px",
              alignItems: "center",
            }}>
            <LanguageIcon />
          </Avatar>

          <Box
            sx={{
              ml: "14px",
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h5">100+ Countries</Typography>

            <Typography color={"#6b7280"}>
              A diverse user-base around the world trust Akaunting to handle
              everyday bookkeeping needs.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "20vh",
            display: "flex",
            
            justifyContent: "space-between",
          }}
        >
          <Avatar
            sx={{
              background: "#55588b",
             
              mt: "8px",
              alignItems: "center",
            }}
          >
            <Diversity3Icon />
          </Avatar>

          <Box
            sx={{
              ml: "14px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">200K+ Users</Typography>

            <Typography color={"#6b7280"}>
              Freelancers offering services to individuals/companies or a 2+
              person company, use Akaunting to simplify day-to-day bookkeeping
              workflow.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "20vh",
            display: "flex",  
          }}>
          <Avatar
            sx={{
              background: "#55588b",
             
              mt: "8px",
              alignItems: "center",
            }}
          >
            <DescriptionOutlinedIcon />
          </Avatar>

          <Box
            sx={{
              ml: "10px",
              
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">10M+ Invoices Sent</Typography>

            <Typography color={"#6b7280"}>
              With no limits, users send invoices and receive timely payments
              for free.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{height:'40%',width:'30%'}}>
        <ImageListItem>
          <img src={world} />
        </ImageListItem>
      </Box>
    </Box>
  </Box>
</Box>
  )
}
