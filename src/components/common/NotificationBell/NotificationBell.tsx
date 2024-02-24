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
  const notifications = [
    {label: "Notification 1"}, 
    {label: "Notification 2"}, 
    {label: "Notification 3"}, 
    {label: "Notification 4"}
]
  const notification = `You have ${notifications.length} notifications`;
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
        <Tooltip title={notifications && notifications.length !== 0 ? notification : noNotifications }>
            <IconButton 
                color={props.color}
                onClick={handleOpen}
            >
                <Badge 
                    badgeContent={notifications.length} 
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
            menuItems={notifications}
        />
    </div>
  )
}

export default NotificationBell
