import React, {useContext, useState} from 'react';
import {Grid, TextField} from "@material-ui/core";
import {CheckoutContext} from "../../providers/CheckoutProvider/CheckoutProvider";
import {useAuth0} from "@auth0/auth0-react";
import Typography from "@material-ui/core/Typography";
import isMobilePhone from "validator/es/lib/isMobilePhone";

function BillingForm() {
    const context = useContext(CheckoutContext);
    const {user, isAuthenticated} = useAuth0();
    const [isValidName, setIsValidName] = useState(false);
    const [isValidLastName, setIsValidLastName] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);

    function handleNameChange(e) {
        context.setName(e.target.value);
        const isValid = e.target.value.length > 0;
        setIsValidName(isValid);
    }

    function handleLastnameChange(e) {
        context.setLastname(e.target.value);
        const isValid = e.target.value.length > 0;
        setIsValidLastName(isValid);
        context.setBillingStepValid(isBillingFormValid(isValidName, isValid, isValidPhone));
    }

    function handlePhoneChange(e) {
        context.setPhone(e.target.value);
        const isValid = e.target.value.length > 0 && isMobilePhone(e.target.value);
        setIsValidPhone(isValid);
        context.setBillingStepValid(isBillingFormValid(isValidName, isValidLastName, isValid));
    }

    function isBillingFormValid(isValidName, isValidLastName, isValidPhone) {
        return isValidName && isValidLastName && isValidPhone;
    }

    function handleStreetChange(e) {
        context.setAddress({...context.address, street: e.target.value});
    }

    function handleHouseChange(e) {
        context.setAddress({...context.address, house: e.target.value});
    }

    function handleZipChange(e) {
        context.setAddress({...context.address, zipCode: e.target.value});
    }

    function handleCityChange(e) {
        context.setAddress({...context.address, city: e.target.value});
    }

    function handleStateChange(e) {
        context.setAddress({...context.address, state: e.target.value});
    }

    function handleCountryChange(e) {
        context.setAddress({...context.address, country: e.target.value});
    }

    return (
        <>{isAuthenticated && <form noValidate autoComplete="off">
            <Grid container justify={"center"} spacing={1}>
                <Grid item>
                    <TextField variant="outlined"
                               id="name" margin="dense"
                               value={context.name}
                               onChange={handleNameChange}
                               error={!isValidName}
                               helperText={isValidName ? 'Name(s)' : 'Name is required'}
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined"
                               id="lastname" margin="dense"
                               value={context.lastname}
                               error={!isValidLastName}
                               onChange={handleLastnameChange}
                               helperText="Last Name"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined"
                               id="phone" margin="dense"
                               type="tel"
                               value={context.phone}
                               error={!isValidPhone}
                               onChange={handlePhoneChange}
                               helperText="Phone number"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined" required
                               id="street" margin="dense"
                               value={context.address.street}
                               error={!context.address.street}
                               onChange={handleStreetChange}
                               helperText="Street"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined" required
                               id="house" margin="dense"
                               value={context.address.house}
                               error={!context.address.house}
                               onChange={handleHouseChange}
                               helperText="House/Building"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined" required
                               id="phone" margin="dense"
                               value={context.address.zipCode}
                               error={!context.address.zipCode}
                               onChange={handleZipChange}
                               type="number"
                               helperText="Post Code"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined" required
                               id="city" margin="dense"
                               value={context.address.city}
                               error={!context.address.city}
                               onChange={handleCityChange}
                               helperText="City"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined" required
                               id="state" margin="dense"
                               value={context.address.state}
                               error={!context.address.state}
                               onChange={handleStateChange}
                               helperText="State"
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField variant="outlined" required
                               id="country" margin="dense"
                               value={context.address.country}
                               error={!context.address.country}
                               onChange={handleCountryChange}
                               helperText="Country"
                    >
                    </TextField>
                </Grid>
                <Grid container xs={12} spacing={1} justify={"center"} direction={"column"}>
                    <Typography variant="subtitle1">{user.email}</Typography>
                    <Typography variant="caption">Your registered email address will be used</Typography>
                </Grid>
            </Grid>
        </form>}
            {!isAuthenticated && <Typography color={"error"} variant={"body2"}>
                You must first login to finish the checkout process
            </Typography>}
        </>
    );
}

export default BillingForm;