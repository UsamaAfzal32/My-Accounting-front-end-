
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { AppBarrr } from './Component/CommonComponent/Appbarr';
import { Footer } from './Component/CommonComponent/Footer';
import HomePage from './Component/Home/HomePage';
import {Register} from './Component/Register/Register';
import { SignInPage } from './Component/SignInPage/SignInPage';



function App() {
  return (
  <Box>
  <AppBarrr/>
  <Routes>
   <Route path='/' element ={<HomePage/>}></Route>
   <Route path='/signInPage' element ={<SignInPage/>}></Route>
   <Route path='/register' element ={<Register/>}></Route>
   </Routes>
  <Footer/>
    
   
  </Box>
     
   
  );
}

export default App;
