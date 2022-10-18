import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../contexts/UserContext';
import './Header.css';

const Header = () => {
    const {user,logOutUser} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button className = 'btn-logOut' onClick={logOutUser}>Sign Out</button>: 
                    <><Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link></>
                }
                {/* {user?.email && <div>Hello, {user.email}</div>} */}
            </div>
        </nav>
    );
};

export default Header;