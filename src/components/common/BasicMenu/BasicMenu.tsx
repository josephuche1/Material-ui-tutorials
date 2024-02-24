import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IBasicMenuProps {
    anchorEl?: null | HTMLElement,
    open: boolean,
    handleClose?: () => void,
    menuItems?: Array<{label: string}>,
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
            {props.menuItems && props.menuItems.map((item, index) => {
                return <MenuItem key={index} onClick={props.handleClose}>{item.label}</MenuItem>
            })}
        </Menu>
    </div>
    );
}

export default BasicMenu
