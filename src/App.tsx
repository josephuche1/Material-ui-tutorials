import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import Header from './components/common/Header/Header';

const App: React.FC = () => {

  return (
    <Grid container>
      <Navbar />
      <Header title="Authentication" />
      <Outlet />  { /*The outlet element is a placeholder for the child route's content.*/}
    </Grid>
  );
}

export default App;
