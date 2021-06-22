import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {MenuItems} from "../../constants/menu-items";

export default function MobileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = MenuItems;

    return (
        <div>
            <IconButton onClick={handleClick} color="inherit">
                <MenuIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    menuItems.map(item => {
                        return <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                    })
                }
            </Menu>
        </div>
    );
}
