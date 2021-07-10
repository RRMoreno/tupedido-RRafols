import React from 'react';
import {emphasize, withStyles} from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import {MenuItems} from "../../constants/menu-items";
import {Link} from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

export default function MainMenu() {

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {MenuItems.map((item, index) => {
                return <Link
                    to={item.url}
                    key={index}
                ><StyledBreadcrumb
                    label={item.label}
                /></Link>
            })}
        </Breadcrumbs>
    );
}
