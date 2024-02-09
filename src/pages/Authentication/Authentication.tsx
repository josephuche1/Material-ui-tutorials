import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import  BasicMenu from '../../components/common/BasicMenu/BasicMenu';

const Authentication = () => {
  const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': { 
        backgroundColor: '#009be5',
        '&:hover': {
            backgroundColor: '#006db3'
        },
    },
    '&.MuiButton-outlined': {
        color: "#fff",
        borderColor: '#fff',
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: "green",
            color: "green"
        },
    },
  };

  return (
    <Grid xs={8} sx={{backgroundColor: "cyan"}}>
        This is the Authentication page
        <NotificationBell badgeContent={5} />
        <BasicMenu />
    </Grid>
  )
}

export default Authentication
