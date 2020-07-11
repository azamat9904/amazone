import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../Actions/productActions";

const HomeScreen = ()=>{
    const productList = useSelector(state =>state.productList);
    const {products,loading,error} = productList;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(listProducts());
        return ()=>{
        }
    },[]);
    return  loading ? <div>Loading ...</div> :
            error ? <div>{error}</div> :
        <ul className="products">
            {
                products.map((product) =>
                    <li key={product._id}>
                        <div className="product">
                            <Link to = {"/products/" + product._id}>
                                <img src={product.image} alt="product" className="product-image"/>
                            </Link>
                            <div className="product-name">
                                <Link to={"/products/" + product._id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.numReviews})
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>
};
export default HomeScreen;