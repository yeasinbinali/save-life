import React from 'react';
import logo from '../../assets/save_life_logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import ButtonSimple from '../../components/ButtonSimple/ButtonSimple';

const Header = () => {
    const nav = [
        <li key='home' className='list-none text-xl ml-5'><NavLink to='/'>Home</NavLink></li>,
        <li key='donation' className='list-none text-xl ml-5'><NavLink to='/donation'>Donation Request</NavLink></li>,
        <li key='blog' className='list-none text-xl ml-5'><NavLink to='/blog'>Blog</NavLink></li>,
        <li key='login' className='list-none text-xl ml-5'><NavLink to='/login'>Login</NavLink></li>
    ];

    return (
        <div className="navbar p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <img className='w-60' src={logo} alt="logo" />
            </div>
            <div id='nav-item' className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <Link><ButtonSimple buttonName={'Login'}></ButtonSimple></Link>
            </div>
        </div>
    );
};

export default Header;
