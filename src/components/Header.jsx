import React from 'react';
import './Header.css';
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt=""></img>

            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Header;