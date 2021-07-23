import React, {createContext, useState} from 'react';

export const CheckoutContext = createContext({
    address: {
        street: '',
        house: '',
        zipCode: '',
        city: '',
        state: '',
        country: ''
    },
    name: '',
    lastname: '',
    email: '',
    date: new Date(),
    phone: '',
    billingStepValid: false,
    setAddress: (value) => {
    },
    setName: (value) => {
    },
    setLastname: (value) => {
    },
    setEmail: (value) => {
    },
    setDate: (value) => {
    },
    setPhone(value) {
    },
    setBillingStepValid(value) {
    },
});

function CheckoutProvider(props) {
    const {children} = props;
    const [address, setAddress] = useState({
        street: '',
        house: '',
        zipCode: '',
        city: '',
        state: '',
        country: ''
    });
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState(new Date());
    const [billingStepValid, setBillingStepValid] = useState(false);
    return (
        <CheckoutContext.Provider value={{
            address,
            name,
            lastname,
            email,
            date,
            phone,
            billingStepValid,
            setAddress,
            setName,
            setLastname,
            setEmail,
            setDate,
            setPhone,
            setBillingStepValid
        }}>
            {children}
        </CheckoutContext.Provider>
    );
}

export default CheckoutProvider;