import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {MenuItems} from "../../constants/menu-items";
import {Link} from "react-router-dom";

export default function MobileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    MenuItems.map((item, index) => {
                        return <Link to={item.url} key={index}>
                            <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                        </Link>
                    })
                }
            </Menu>
        </div>
    );
}
