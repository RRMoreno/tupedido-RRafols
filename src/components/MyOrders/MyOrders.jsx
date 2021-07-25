import {useEffect, useState} from 'react';
import {getFirestore} from "../../firebase";
import {Grid, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Visibility} from "@material-ui/icons";
import {Link} from "react-router-dom";

function MyOrders() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const queryRef = db.collection("orders");
        queryRef.get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setOrders([]);
            } else {
                const data = querySnapshot.docs.map(p => {
                    return {id: p.id, ...p.data()};
                });
                setOrders(data);
            }
        });
    }, []);
    return (
        <Grid container direction="column">
            <div>
                <List dense>
                    {orders.map(order => {
                            return <ListItem>
                                <ListItemText
                                    primary={order.date ? order.date.toDate().toDateString() : ''}
                                    secondary={order.items ? order.items.length + ' Items' : ''}
                                />
                                <ListItemSecondaryAction>
                                    <Link to={'/orders/' + order.id}>
                                        <IconButton edge="end" aria-label="view">
                                            <Visibility/>
                                        </IconButton>
                                    </Link>
                                </ListItemSecondaryAction>
                            </ListItem>
                        }
                    )}
                </List>
            </div>
        </Grid>
    );
}

export default MyOrders;