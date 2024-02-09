import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton  from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface INotificationBellProps {
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    sx?: object,
    badgeContent?: number,
}

const NotificationBell: React.FC<INotificationBellProps> = (props) => {
  const notifications = `You have ${props.badgeContent} notifications`;
  const noNotifications = "You have no notifications";
  return (
    <Tooltip title={props.badgeContent && props.badgeContent !== 0 ? notifications : noNotifications }>
        <IconButton 
            color={props.color}
            sx={props.sx}
        >
            <Badge 
                badgeContent={props.badgeContent} 
                color="error"
            >
                <NotificationsIcon />
            </Badge>
        </IconButton>
    </Tooltip>
  )
}

export default NotificationBell
