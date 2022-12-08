import {Box,Button,Card,Checkbox,FormControlLabel,TextField,Typography} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import SignUpSchma from "./SignUpSchma";

const initialValues={
   email:'',
   password:''

}



export const SignInPage = () => {

   const {values,errors,handleChange,handleSubmit}=useFormik({

    initialValues:initialValues,
    validationSchema:SignUpSchma,
    onSubmit:(values,action)=>{
    console.log(values)

      action.resetForm();
    }

   }


   )


  return (
    <form onSubmit={handleSubmit}>
    <Box
      sx={{
        
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        mt: "5%",
      }}
    >
      <Box
        sx={{
          
          height: "100%",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            
            height: "50%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" fontWeight={"800"} fontSize={"50px"}>
            Login to track your finances efficiently.
          </Typography>
          <Typography>
            Akaunting lets you keep track of your incomes & outcomes without any
            hassle.
          </Typography>
        </Box>
        <Box
          sx={{
          
            height: "75%",
            width: "40%",
            display: "flex",
          }}
        >
          <Card
            sx={{
              px: "10px",
              borderRadius: "15px",
              mx: "25px",
              marginTop: "20%",
              height: "80%",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Email*</Typography>
            <TextField  value={values.email} helperText={errors.email} onChange={handleChange} name='email' size="small" sx={{ width: "100%" }}></TextField>
            <Typography>Password*</Typography>
            <TextField value={values.password} helperText={errors.password} onChange={handleChange} name='password' size="small" sx={{ width: "100%" }}></TextField>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Button type="submit"
              sx={{ width: "100%", backgroundColor: "#55588b" }}
              variant="contained">
              sign in
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="#6B7280">Forget Password?</Typography>
              <Link to="/register" style={{ textDecoration: "none" }}>
              <Typography color="#6B7280">Register a new account</Typography>
              </Link>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
    </form>
  );
};
