import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik,  } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import RegisterSchema from "./RegisterSchema";

const  initialValues= {
  name:"",
  email:'',
  password:'',
  confirmpassword:''
}


export const Register = () => {


const  {values,errors,handleChange,handleSubmit}=useFormik(
    
    {
      initialValues:initialValues,
      validationSchema:RegisterSchema,
       onSubmit:(values,action)=>{   
        
        action.resetForm()

       }     
     }
      );
      
  return (
    <form onSubmit={handleSubmit} >
    <Box
      sx={{ height: "100vh",width: "100vw",
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
          <Typography variant="h1" fontWeight={"800"} fontSize={'50px'} >
            Register to Akaunting and meet the ease.
          </Typography>
          <Typography color="#6B7280"> 
            Akaunting is free online accounting software designed to help small
            businesses easily keep their finances.
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
              height: "90%",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Name*</Typography>
            <TextField value={values.name} helperText={errors.name} name="name" onChange={handleChange} size="small" sx={{ width: "100%" }}></TextField>
            <Typography>Email*</Typography>
            <TextField  value={values.email} helperText={errors.email} name="email" onChange={handleChange} size="small" sx={{ width: "100%" }}></TextField>
            <Typography>Password*</Typography>
            <TextField value={values.password} helperText={errors.password} name="password" type='password' onChange={handleChange} size="small" sx={{ width: "100%" }}></TextField>
            <Typography>Confirm Password*</Typography>
            <TextField value={values.confirmpassword} helperText={errors.confirmpassword} type='password' name='confirmpassword' onChange={handleChange}  size="small" sx={{ width: "100%" }}></TextField>

            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the Terms of Service and Privacy Policy."
            />
            <Button type="submit"
              sx={{ width: "100%", backgroundColor: "#55588b" }}
              variant="contained"
            >
              Register
            </Button>
            
            <Box sx={{display:'flex',width:'50%',justifyContent:"space-between"}}>
            <Typography color="#6B7280">Already have a acccount?</Typography>
            <Link to="/signInPage" style={{textDecoration:'none'}}><Typography> Login</Typography>
            </Link>
            </Box>
            </Card>
        </Box>
      </Box>
    </Box>
    </form>
  );
};
