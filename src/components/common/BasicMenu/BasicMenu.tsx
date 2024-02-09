import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IBasicMenuProps {
    anchorEl?: null | HTMLElement,
    open: boolean,
    handleClose?: () => void
}

const BasicMenu: React.FC<IBasicMenuProps> = (props) => {
    return (
        <div>
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={props.handleClose}>Profile</MenuItem>
            <MenuItem onClick={props.handleClose}>My account</MenuItem>
            <MenuItem onClick={props.handleClose}>Logout</MenuItem>
        </Menu>
    </div>
    );
}

export default BasicMenu
