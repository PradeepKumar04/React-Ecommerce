import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { DOMAIN, GETCARTITEMS } from '../API/APIConstants';
import GetCall from '../API/GetCall';
import CartItem from '../components/CartItem';
import LoadingContext from '../Context/LoadingContext';
import userContext from '../Context/userContext'

const Cart = () => {
  const user = useContext(userContext);
  const cartData = useSelector((item)=> item.cartProducts);
  console.log(cartData);
  const loading = useContext(LoadingContext);
  const [cartItems, setCartItems] =useState([]);
  const [isLoadItems,setIsLoadItems] = useState(false);

  const toogleLoadItems =()=>{
    setIsLoadItems(!isLoadItems);
  }
  useEffect(() => {
    async function getCartItems(){
      loading.setLoading(true);
      let cartItems = await GetCall(DOMAIN+GETCARTITEMS+user.userDetails.userId);
      loading.setLoading(false);
      setCartItems(cartItems.data.message);
    }
    getCartItems();
  }, [isLoadItems])
  
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
      {
        cartItems.length>0 ?
        cartItems.map((item,index)=>{
          return <CartItem key={index} item={item} userId={user.userDetails.userId} loadItems={toogleLoadItems}/>;
        }):
        'No Items in Cart'
      }
      <tr className='table-info'>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Rs. {cartData.products.reduce((n,b)=>n+(b.quantity*b.product.price), 0)}</td>
      </tr>
    </tbody>
  </table>
      
  )
}

export default Cart