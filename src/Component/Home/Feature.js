import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

export const Feature = () => {
  return (
    <Box
      sx={{
       
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ 
                height: "80vh",
                width: "90%",
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly' }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "5vh",
            textAlign: "center",
          }}
        >
          <Typography fontWeight={"bold"} variant="h3">
            Feature Rich
          </Typography>
          <Typography color={"#6b7280"}>
            Everything you need to manage your web accounting. Keep track of all of 
            <br/>your payments, invoices, expenses, etc. in one place with zero
            fees.
          </Typography>
        </Box>

        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 4, sm: 4, md: 2 }}>
          <Grid item md={6} sm={4} xs={3}>
            <CardIconData />
          </Grid>
          <Grid item md={6} sm={4} xs={3}>
            <CardIconData2 />
          </Grid>
          <Grid item md={6} sm={4} xs={3}>
            <CardIconData3 />
          </Grid>
          <Grid item md={6} sm={4} xs={3}>
            <CardIconData4 />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const CardIconData = () => {
  return (
    <Box
      sx={{
        
        display: "flex",
        width: "80%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "20%",
        }}
      >
        <Box
          sx={{
            background: "#55588b",
            ml: "40px",
            mt: "8px",
            height: "60px",
            width: "50px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <SyncAltIcon sx={{color: "white"}} />
        </Box>
      </Box>
      <Box
        sx={{
         
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "80%",
        }}
      >
        <Typography fontWeight={"bold"}>Cash Flow</Typography>
        <Typography color={"#6b7280"}>
          Stay on top of your Cashflow and make smarter decisions about your
          business.
        </Typography>
      </Box>
    </Box>
  );
};

const CardIconData2 = () => {
  return (
    <Box
      sx={{
       
        display: "flex",
        width: "80%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "20%",
        }}
      >
        <Box
          sx={{
            background: "#55588b",
            ml: "40px",
            mt: "8px",
            height: "60px",
            width: "50px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <DescriptionOutlinedIcon sx={{color: "white"}} />
        </Box>
      </Box>
      <Box
        sx={{
        
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "80%",
        }}
      >
        <Typography fontWeight={"bold"}>Easy Invoicing</Typography>
        <Typography color={"#6b7280"}>
          Amaze your clients with professional looking invoices and get paid
          faster.
        </Typography>
      </Box>
    </Box>
  );
};

const CardIconData3 = () => {
    return (
      <Box
        sx={{
        
          display: "flex",
          width: "80%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "20%",
          }}
        >
          <Box
            sx={{
              background: "#55588b",
              ml: "40px",
              mt: "8px",
              height: "60px",
              width: "50px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <SimCardOutlinedIcon sx={{color: "white"}}/>
          </Box>
        </Box>
        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "80%",
          }}
        >
          <Typography fontWeight={"bold"}>Expense Tracking</Typography>
          <Typography color={"#6b7280"}>
          Keep track of your mounting bills & expenses and the money flowing out.
          </Typography>
        </Box>
      </Box>
    );
  };

  const CardIconData4 = () => {
    return (
      <Box
        sx={{
          
          display: "flex",
          width: "80%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "20%",
          }}
        >
          <Box
            sx={{
              background: "#55588b",
              ml: "40px",
              mt: "8px",
              height: "60px",
              width: "50px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <FolderOutlinedIcon sx={{color: "white"}}/>
          </Box>
        </Box>
        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "80%",
          }}
        >
          <Typography fontWeight={"bold"} >Transaction Categories</Typography>
          <Typography color={"#6b7280"}>
          Create categories for incomes, expenses and items and see the flow at a glance.
          </Typography>
        </Box>
      </Box>
    );
  };
