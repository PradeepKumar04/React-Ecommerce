import React from 'react'
import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <img className={classes.imgResponsive} src={props.img} />
        </div>
        <div className='col'>
            <label className={classes.label}>{props.label}</label>
        </div>
    </div>
  )
}

export default CategoryItem