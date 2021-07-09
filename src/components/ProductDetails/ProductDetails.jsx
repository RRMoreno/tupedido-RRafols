import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase";
import Product from "../../models/product";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import './ProductDetails.scss';
import {Rating} from "@material-ui/lab";
import {Counter} from "../Counter/Counter";

function ProductDetails() {

    const [product, setProduct] = useState(undefined);
    const {id} = useParams();
    console.log(id);
    React.useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("products");
        itemCollection.where('id', "==", Number(id)).limit(1).get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setProduct(undefined);
            } else {
                setProduct(new Product(querySnapshot.docs[0].data()));
            }
        })
    }, [id]);

    function inStock() {
        if (product.qty > 0) {
            return <span>In Stock</span>
        }
        return <span>Unavailable</span>
    }

    return (
        <Grid direction="column" className="details">
            <div>{product && <Grid direction="column" className="details-container">
                <Typography variant="h4" color="textSecondary" className='name'>{product.name}</Typography>
                <div className="info">
                    <img src={product.image}/>
                    <div className="text-info">
                        <Rating name="rating" readOnly size="large" value={product.rating}/>
                        <Typography variant="body2" color="textSecondary"
                                    className="description">{product.description}</Typography>
                        <div>
                            <Typography variant="body2" color="textSecondary"
                                        className="address">
                                &euro;{product.price}
                            </Typography>
                            <Typography variant="body1" color="textSecondary"
                                        className="in-stock">{inStock()}</Typography>
                            <Counter product={product}/>
                        </div>

                    </div>
                </div>
            </Grid>}</div>

        </Grid>
    );
}

export default ProductDetails;