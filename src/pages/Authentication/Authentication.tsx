import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

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
      this is the authentication page
      <CommonButton
        variant="contained"
        sx={buttonStyles}
      > 
        Add User 
      </CommonButton>
      <CommonButton
        variant="outlined"
        sx={buttonStyles}
      > 
        Web Setup
      </CommonButton>

      <CommonButton
        variant="contained"
        sx={buttonStyles}
        color="primary"
      > 
        Palette(theming)
      </CommonButton>
    </Grid>
  )
}

export default Authentication
