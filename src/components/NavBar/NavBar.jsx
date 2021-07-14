import {useAuth0} from "@auth0/auth0-react";
import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import logo from '../../assets/logo.png'
import CartWidget from "../CartWidget/CartWidget";
import MainMenu from "../MainMenu/MainMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import {Hidden} from "@material-ui/core";
import './NavBar.scss';
import {LoginButton} from "../Login/LoginButton";
import {LogoutButton} from "../Logout/LogoutButton";
import Profile from "../Profile/Profile";
import {CartContext} from "../CartProvider/CartProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const {isAuthenticated} = useAuth0();
    let {showCart, setShowCart} = useContext(CartContext);

    function toggleCart() {
        setShowCart(!showCart);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color={'transparent'}>
                <Toolbar>
                    <img src={logo} alt="Logo"/>
                    <Hidden mdDown>
                        <MainMenu/>
                    </Hidden>
                    <div className='menuIcons'>
                        <div className="content-profile">
                            <CartWidget onCartClick={toggleCart}/>
                            {isAuthenticated ? (
                                <>
                                    <Profile/>
                                    <LogoutButton/>
                                </>
                            ) : (<LoginButton/>
                            )}


                        </div>
                        <Hidden lgUp>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MobileMenu/>
                            </IconButton>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

