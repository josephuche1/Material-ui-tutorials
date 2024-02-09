import React from 'react'
import Grid from '@mui/material/Grid';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';

const Authentication:React.FC = () => {


  return (
    <Grid xs={8} sx={{backgroundColor: "cyan"}}>
        This is the Authentication page
        <NotificationBell 
          badgeContent={5}
          color="primary"
        />
    </Grid>
  )
}

export default Authentication
