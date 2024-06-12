import React from 'react';
import logo from '../../assets/save_life_logo.png';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const nav = [
        <li key='home' className='list-none text-xl ml-5'><NavLink to='/'>Home</NavLink></li>,
        <li key='donation' className='list-none text-xl ml-5'><NavLink to='/donation'>Donation Request</NavLink></li>,
        <li key='blog' className='list-none text-xl ml-5'><NavLink to='/blog'>Blog</NavLink></li>,
        <li key='login' className='list-none text-xl ml-5'><NavLink to='/login'>Login</NavLink></li>
    ];

    const toggleNavbar = () => {
        const navbar = document.getElementById('navbar-collapse-with-animation');
        navbar.classList.toggle('hidden');
    };

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm dark:bg-neutral-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <img className='w-60' src={logo} alt="logo" />
                    <div className="sm:hidden">
                        <button type="button" className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" onClick={toggleNavbar} aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div id='nav-item' className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        {nav}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
