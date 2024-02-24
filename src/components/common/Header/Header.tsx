import React from 'react'
import CommonButton from '../CommonButton/CommonButton'
import NotificationBell from '../NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip  from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Box from '@mui/material/Box';


interface IHeaderProps {
    title: string,
}

const Header:React.FC<IHeaderProps> = (props) => {
   const headerStyles = {
     wrapper: {
        backgroundColor: '#009be5',
     }
   };
  return (
    <Box sx={headerStyles.wrapper}>
        <CommonButton>
            Go to Docs
        </CommonButton>
        <NotificationBell 
          color="primary"
        />
        <Avatar 
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <div>
            <Typography>{props.title}</Typography>
            <CommonButton variant="outlined">Web Setup</CommonButton>
            <Tooltip title="Help">
                <IconButton><QuestionMarkIcon/> </IconButton>
            </Tooltip>
        </div>
    </Box>
  )
}

export default Header
