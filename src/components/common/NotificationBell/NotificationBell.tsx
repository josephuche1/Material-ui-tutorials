import React, {useState} from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton  from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

interface INotificationBellProps {
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    sx?: object,
    badgeContent?: number,
}

const NotificationBell: React.FC<INotificationBellProps> = (props) => {
  const notifications = `You have ${props.badgeContent} notifications`;
  const noNotifications = "You have no notifications";
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <div>
        <Tooltip title={props.badgeContent && props.badgeContent !== 0 ? notifications : noNotifications }>
            <IconButton 
                color={props.color}
                onClick={handleOpen}
            >
                <Badge 
                    badgeContent={props.badgeContent} 
                    color="error"
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>
        <BasicMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
        />
    </div>
  )
}

export default NotificationBell
