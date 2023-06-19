import React from 'react';
import {  Outlet } from 'react-router-dom';
import Navbar from './header/Navbar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Store } from '../context/DataStore';

const Layout = () => {
  const {mode , }= Store()
  const theme=createTheme({
    typography:{
      h4:{
        color:"#616161"
      },
      

    },
    palette: {
      mode: mode===false?"light" :'dark',
      primary: {
        main: '#203040',
      },
      secondary: {
        main: '#f0c000',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Outlet/>
    </ThemeProvider>
  );
}

export default Layout;
