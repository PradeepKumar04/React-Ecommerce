import React, { useContext } from 'react'
import { ADDITEMTOCART, DOMAIN } from '../API/APIConstants';
import PostCall from '../API/PostCall';
import userContext from '../Context/userContext';
import classes from './ProductItem.module.css';

const rating=[1,2,3,4,5]
const ProductItem = (props) => {
    const userDetails = useContext(userContext);
    const addItemToCart =async (userId,productId)=>{
        const item = await PostCall(DOMAIN+ADDITEMTOCART,{productId,userId,quantity:1});
    }

    
    return (
        <div className={"card "+ classes.item} >
            <img src={props.product.images.length>0 ? props.product.images[0] : "https://www.kent.co.in/images/product-img/3.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">{props.product.description}</p>
                <p>{props.product.availableQuantity<2? 'Few Items Left':''}</p>
                <p>Rs.{props.product.price}</p>
                { 
                    rating.map((p,index)=>{
                        if(index<props.product.rating){
                            return <span class={"fa fa-star "+classes.checked}></span>
                        }
                        else{
                           return <span class="fa fa-star"></span>
                        }
                    })
                }
                <br/>
                <div onClick={()=>{addItemToCart(userDetails.userDetails.userId,props.product._id)}}  className="btn btn-primary ">Add to Cart</div>
            </div>
        </div>
    )
}

export default ProductItem