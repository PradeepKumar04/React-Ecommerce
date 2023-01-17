import React from 'react'
import Products from '../components/Products';
import classes from "./Home.module.css";



const Home = () => {
  return (
    <div className={classes.pad}>

        <div className='row'>
            <div className='col'>
                <Products />
            </div>
        </div>
    </div>
  )
}

export default Home