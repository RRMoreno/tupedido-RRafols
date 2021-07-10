import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../../assets/logo.png'
import CartWidget from "../CartWidget/CartWidget";
import MainMenu from "../MainMenu/MainMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import {Hidden} from "@material-ui/core";
import './NavBar.scss';

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
    const [auth] = React.useState(true);



    return (
        <div className={classes.root}>
            <AppBar position="static" color={'transparent'}>
                <Toolbar>
                    <img src={logo} alt="Logo"/>
                    <Hidden mdDown>
                        <MainMenu/>
                    </Hidden>
                    <div className='menuIcons'>
                        {auth && (
                            <div>
                                <IconButton color="inherit">
                                    <AccountCircle/>
                                </IconButton>
                                <CartWidget/>
                            </div>
                        )}
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

