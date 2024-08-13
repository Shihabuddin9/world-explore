import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GiWorld } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { to: '/', label: 'Home' },
        { to: '/menu', label: 'Tour Packages' },
        { to: '/mobileApp', label: 'Blogs' },
        { to: '/about', label: 'About' }
    ];

    const renderLinks = () =>
        links.map(({ to, label }) => (
            <li className="hover:text-[#094067] hover:bg-slate-300" key={to}>
                <NavLink
                    to={to}
                    style={({ isActive }) => ({
                        color: isActive ? '#094067' : '#545e6f',
                        background: isActive ? '#E8E8EB' : 'white',
                        borderRadius: isActive ? '0' : '0.375rem' // Adjust borderRadius here
                    })}
                    className={
                        `text-xl`
                    }
                >
                    {label}
                </NavLink>
            </li>
        ));

    return (
        <div className="navbar border-b-2">
            <div className="navbar-start">
                {/* For mobile devices */}
                <div>
                    <div onClick={toggleMenu} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <div className={`fixed left-0 top-0 z-30 flex h-screen w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ul onClick={toggleMenu} tabIndex={0} className="menu menu-sm dropdown-content mt-10 ml-5 z-[1] p-2">
                            {renderLinks()}
                        </ul>
                        <button onClick={toggleMenu} className="top-5 text-3xl absolute right-10">X</button>
                    </div>
                </div>

                <Link to='/' className="text-xl font-serif flex justify-center items-center">
                    <GiWorld className="text-4xl" />
                    <span>
                        <span className="text-3xl text-color">World</span>explore
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {renderLinks()}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
