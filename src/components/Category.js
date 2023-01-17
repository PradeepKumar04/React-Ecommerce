import React from 'react'
import CategoryItem from './CategoryItem';
import classes from './Category.module.css';

const Category = () => {
    let items=[{img:'https://d2xamzlzrdbdbn.cloudfront.net/products/daf1d4a3-b74c-4218-9416-ae861220ff6b22111115_416x416.jpg',label:'Purifier'},{img:'https://www.kent.co.in/images/png/autosoft.png',label:'Softner'},{img:'https://www.kent.co.in/images/product-img/3.png',label:'Purifier'}]
  return (
    <div className={'row '+classes.pad}>
        {
            items.map((item,index)=>{
                return (
                <div className='col-4'>
                    <CategoryItem key={Math.random()} img={item.img} label={item.label} />
                </div>
                )
            })
        }
    </div>
  )
}

export default Category