import React, { useContext, useEffect, useState } from 'react'
import Category from './Category';
import ProductItem from './ProductItem'
import { Slider } from './Slider';
import classes from './Products.module.css';
import axios from 'axios';
import { DOMAIN, GETCARTITEMS, PRODUCTSLIST } from '../API/APIConstants';
import GetCall from '../API/GetCall';
import LoadingContext from '../Context/LoadingContext';
import userContext from '../Context/userContext';
import { setCartItems } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const Products = () => {
    const user = useContext(userContext);
    const dispatch = useDispatch();
    const [products,setProducts]=useState([]);
    const loading = useContext(LoadingContext);

    useEffect(()=>{
        async function getProducts(){
            loading.setLoading(true);
            let productsData = await GetCall(DOMAIN+PRODUCTSLIST)
            let cartItems = await GetCall(DOMAIN+GETCARTITEMS+user.userDetails.userId);
            dispatch(setCartItems(cartItems.data.message));
            console.log(cartItems.data.message);
            setProducts(productsData.data.products);
            loading.setLoading(false);
        }
        getProducts();
    },[])
    
  return (
    <div className='row'>
        <div>
            {/* <Slider /> */}
        </div>
        <div className='row'>
            <br/>
            <h3 className={classes.marginTop}>Select Category</h3>
            <Category />
        </div>
        <h3>Top Selling Products</h3>
        {products.map((product,index)=>{
            return  (
            <div className='col-3'>
                <ProductItem key={Math.random()+index} product={product} />
            </div>
            )
        })}
    </div>
  );
}

export default Products