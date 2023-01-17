import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { AddProduct } from '../screens/AddProduct';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Login from '../screens/login';
import Signup from '../screens/signup';

export const Router = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/addProduct' element={<AddProduct/>} />

    </Routes>
  )
}
