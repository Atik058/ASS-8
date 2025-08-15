import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/C001-assets/logo.png'; // Replace with your actual logo path
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
const Footer = () => {

    
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 space-y-4">
            {/* Logo and name */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-6 h-6" />
                <span className="text-xl font-bold">Phudu</span>
            </div>

            {/* Nav Links */}
            <ul className="flex gap-6 text-sm text-gray-700 font-medium">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-bookings">My-Bookings</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            {/* Divider */}
            <hr className="w-full border-t border-gray-200" />

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
                <a href="#"><Facebook /></a>
                <a href="#"><Linkedin /></a>
                <a href="#"><Twitter /></a>
                <a href="#"><Youtube /></a>
                
            </div>
        </div>
    );
};

export default Footer;