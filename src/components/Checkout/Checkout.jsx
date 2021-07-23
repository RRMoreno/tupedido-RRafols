import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CartContext} from "../../providers/CartProvider/CartProvider";
import {CheckoutContext} from "../../providers/CheckoutProvider/CheckoutProvider";
import BillingForm from "../BillingForm/BillingForm";
import Summary from "../Summary/Summary";
import PaymentStep from "../PaymentStep/PaymentStep";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '1rem',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
const steps = ["Billing Details", "Summary", "Checkout"];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BillingForm />;
        case 1:
            return <Summary />;
        case 2:
            return <PaymentStep />
        default:
            return 'Unknown step';
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const cartContext = useContext(CartContext);
    const checkoutContext = useContext(CheckoutContext);
    cartContext.setShowCart(true);



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <br/>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                                disabled={activeStep === 0 && !checkoutContext.billingStepValid}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
