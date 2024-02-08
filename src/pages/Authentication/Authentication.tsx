import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Navbar/common/CommonButton/CommonButton';

const Authentication = () => {
  const buttonStyles= {
    fontSize: "1.5rem",
    backgroundColor: "tomato",
    "&:hover": {
      backgroundColor: "black",
      color: "tomato"
    }
  }

  return (
    <Grid xs={8}>
      this is the authentication page
      <CommonButton
        size="small"
        variant="contained"
        sx={buttonStyles}
      > Add User </CommonButton>
    </Grid>
  )
}

export default Authentication
