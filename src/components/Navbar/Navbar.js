import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/images/samplLogo.png'

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="logo-div">
                <NavLink to="/" className='home-nav'>
                    <img className='logo' src={Logo} />
                </NavLink>
            </div>

            <div className="dropdown-menu">
                <button className="dropbtn">Case Categories</button>
                <div className="dropdown-content">
                    <Link to="/">Land Case</Link>
                    <Link to="/">Case 2</Link>
                    <Link to="/">Case 3</Link>
                    <Link to="/">Case 4</Link>
                    <Link to="/">Case 5</Link>

                </div>
            </div>

        </div>
    );
}