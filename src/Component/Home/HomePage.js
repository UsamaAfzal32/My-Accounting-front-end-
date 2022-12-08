
import { Box } from "@mui/material";
import React from "react";
import Accounting from "./Accounting";
import { Crd } from './Crd';
import { Feature } from './Feature';
import { Golbal } from './Golbal';
import { Lang } from './Lang';
import { Newinvoices } from './Newinvoices';
import { Portal } from './Portal';
const HomePage = () => {
  return (
    <Box>
    
    <Accounting/>
    <Newinvoices/>
    <Crd/>
    <Feature/>
    <Portal/>
    <Golbal/>
    <Lang/>
   
    </Box>
  )
};



export default HomePage





