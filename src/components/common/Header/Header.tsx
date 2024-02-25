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
            width: '100%',
            display: 'flex',
            flexDirection:'column',
            marginLeft: '230px',
            marginTop: '-10px',
            marginRight: '-8px',
        },
        topSection: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '10px',
            marginBottom: '10px',
            gap: '5px',
            alignItems: 'center',
        },
        bottomSection: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            alignItems: 'center',
        },
   };
  return (
    <Box sx={headerStyles.wrapper}>
        <Box sx={headerStyles.topSection}>
            <CommonButton
                sx={{color: 'white'}}
            >
                Go to Docs
            </CommonButton>
            <NotificationBell 
                sx={{color: 'white'}}
            />
            <Avatar 
                src="https://mui.com/static/images/avatar/1.jpg"
            />
        </Box>
        <Box sx={headerStyles.bottomSection}>
            <Typography color="white" variant="h1">{props.title}</Typography>
            <Box>
                <CommonButton 
                    variant="outlined" 
                    sx={{color: 'white', borderColor: "white"}}>Web Setup</CommonButton>
                <Tooltip title="Help">
                    <IconButton sx={{color:"white"}}><QuestionMarkIcon/> </IconButton>
                </Tooltip>
            </Box>
        </Box>
    </Box>
  )
}


export default Header
