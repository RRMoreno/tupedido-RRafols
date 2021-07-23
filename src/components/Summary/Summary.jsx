import React, {useContext} from 'react';
import {Grid} from "@material-ui/core";
import {CheckoutContext} from "../../providers/CheckoutProvider/CheckoutProvider";
import {useAuth0} from "@auth0/auth0-react";

function Summary() {
    const context = useContext(CheckoutContext);
    const {user} = useAuth0();
    return (
        <Grid container justify={"center"} spacing={1}>
            <Grid container xs={12} md={6} direction={"column"}>
                <h3>Personal Data</h3>
                <div><strong>Full Name: </strong><span>{context.name} {context.lastname}</span></div>
                <div><strong>Email: </strong><span>{user.email}</span></div>
                <div><strong>Phone: </strong><span>{context.phone}</span></div>
            </Grid>
            <Grid container xs={12} md={6} direction={"column"}>
                <h3>Billing Address</h3>
                <div><strong>Street:</strong> <span>{context.address.street}</span></div>
                <div><strong>House:</strong> <span>{context.address.house}</span></div>
                <div><strong>Post Code:< /strong><span>{context.address.zipCode}</span></div>
                <div><strong>City:</strong> <span>{context.address.city}</span></div>
                <div><strong>State:</strong> <span>{context.address.state}</span></div>
                <div><strong>Country:</strong> <span>{context.address.country}</span></div>
            </Grid>
            <caption>By clicking Next you are ok with the data provided</caption>
        </Grid>
    );
}

export default Summary;