import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item ">
                        <NavLink to='/' className={isActive =>"nav-link " + (!isActive ? "" : " active")} >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/cart' className={isActive =>"nav-link " + (!isActive ? "" : " active")} >Cart</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/addProduct' className={isActive =>"nav-link " + (!isActive ? "" : " active")} >Add Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/login' className={isActive =>"nav-link " + (!isActive ? "" : " active")} >Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/signup' className={isActive =>"nav-link " + (!isActive ? "" : " active")} >Signup</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header