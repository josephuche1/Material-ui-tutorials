import React from 'react'
import Grid from '@mui/material/Grid';
import Header from '../../components/common/Header/Header';
import BasicCard from '../../components/common/BasicCard/BasicCard';

const Authentication:React.FC = () => {
  return (
    <Grid item xs={8} sx={{marginLeft:"320px"}}>
      <BasicCard />
    </Grid>
  )
}

export default Authentication
