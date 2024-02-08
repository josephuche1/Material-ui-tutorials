import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => {
  const buttonStyles= {
    fontSize: 20,
    fontWeight: 200,
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
