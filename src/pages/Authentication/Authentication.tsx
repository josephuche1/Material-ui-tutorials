import React from 'react'
import Grid from '@mui/material/Grid';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Avatar from '@mui/material/Avatar';

const Authentication:React.FC = () => {
  return (
    <Grid xs={8}>
        This is the Authentication page
        <CommonButton>
            Go to Docs
        </CommonButton>
        <NotificationBell 
          color="primary"
        />
        <Avatar 
          src="https://mui.com/static/images/avatar/1.jpg"
        />
    </Grid>
  )
}

export default Authentication
