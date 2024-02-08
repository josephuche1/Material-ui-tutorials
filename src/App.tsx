import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';

const App: React.FC = () => {
  return (
    <Grid container>
      <Navbar />
      <Outlet /> // The outlet element is a placeholder for the child route's content.
    </Grid>
  );
}

export default App;
