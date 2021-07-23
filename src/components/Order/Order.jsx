import React from 'react';
import {getFirestore} from "../../firebase";

function Order(props) {
    const db = getFirestore();

    const orders =db.collection("orders");
    const newOrder ={
        buyer: userInfo,
        item: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: price(),
    }
    return (
        orders.add(newOrder).then(({id})=>{
            setOrderId(id);
        }).catch(err =>{
            setError(err);
        }).finally(()=>{
            setLoading(false);
        })
    );
}

export default Order;