import React from 'react'
import { Link, NavLink } from 'react-router-dom'


import './styles.css'
const Navbar = () => {
    return (
         <nav>
             <ul className="nav nav-pills justify-content-center m-3">
                <li className="nav-item">
                        <NavLink exact activeClassName='active' className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink exact  activeClassName='active' className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink exact activeClassName='active' className="nav-link" to="/login">Login</NavLink>
                </li>
            </ul>
         </nav>
    )
}

export default Navbar
