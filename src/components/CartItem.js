import React, { useState } from 'react';
import { ADDITEMTOCART, DELETE_ITEM_FROM_CART, DOMAIN } from '../API/APIConstants';
import PostCall from '../API/PostCall';
import styles from './CartItem.module.css';

const CartItem = (props) => {
    const [quantity, setQuantity] = useState(props.item.quantity); 

    const deleteItemFromCart = async ()=>{
        const item= await PostCall(DOMAIN+DELETE_ITEM_FROM_CART,{productId:props.item.productId,userId:props.item.userId});
        props.loadItems();
    }

    const increaseQuantity = async () => {
        if(props.item.product.availableQuantity>quantity){
            const item = await PostCall(DOMAIN+ADDITEMTOCART,{productId:props.item.productId,userId:props.item.userId,quantity:quantity+1});
            setQuantity(quantity + 1);
        }

    }
    const decreaseQuantity = async () => {
        if (quantity > 1){
            const item = await PostCall(DOMAIN+ADDITEMTOCART,{productId:props.item.productId,userId:props.item.userId,quantity:quantity-1});
            setQuantity(quantity - 1);
        }
        else{
            deleteItemFromCart();
        }
        
    }
    return (
        <tr>
            <td><i className={"fa fa-trash " + styles.cartDeleteIcon}  onClick={deleteItemFromCart}></i></td>
            <td><img src={props.item.product.images.length==0 ?'https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust.jpg':props.item.product.images[0]} className='rounded float-left img-thumbnail' height="100" width="100" /></td>
            <td>{props.item.product.name}</td>
            <td>Rs.{props.item.product.price}</td>
            <td>
                <div>
                    <button className='btn btn-danger' onClick={decreaseQuantity}>-</button> <input value={quantity} disabled className={styles.input} width="20" /><button onClick={increaseQuantity} className='btn btn-success'>+</button>
                </div>
                <div>
                    {props.item.product.availableQuantity<quantity && <p className='text-danger'>No Stock Available</p>}
                </div>
            </td>
            <td>Rs.{props.item.product.price*quantity}</td>
        </tr>
    )
}

export default CartItem