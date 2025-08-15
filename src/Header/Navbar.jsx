import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/C001-assets/logo.png';



const Navbar = () => {
    const activeClass = "text-primary font-bold border-b-2 border-primary"; // change to your style
    const defaultClass = "hover:text-primary";

    const NavLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? activeClass : defaultClass}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-bookings"
                    className={({ isActive }) => isActive ? activeClass : defaultClass}
                >
                    My Bookings
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) => isActive ? activeClass : defaultClass}
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? activeClass : defaultClass}
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                {/* Mobile dropdown menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl">
                    <div className='flex gap-2'>
                        <img src={logo} alt="" />
                        <p className='text-3xl font-bold'>Phudu</p>
                    </div>
                </Link>
            </div>

            {/* Large screen menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
