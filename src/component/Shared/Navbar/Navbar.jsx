import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { GiWorld } from "react-icons/gi";
import './Navbar.css'
import { AuthProvider } from "../../Provider/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, userLogout } = useContext(AuthProvider)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        userLogout()
            .then(() => {
                toast('successfully Logout')
            })
            .then(() => {

            })
    }

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

            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className=" m-1 flex justify-center  items-center "><span className="font-semibold text-[#094067]">
                                {
                                    user?.displayName ? user?.displayName
                                        :
                                        <div className="avatar placeholder">
                                            <div className="bg-[#094067] text-neutral-content w-8 rounded-full">
                                                <span className="">{user?.email.substring(0, 1)}</span>
                                            </div>
                                        </div>
                                }
                            </span><IoIosArrowDown className="ml-1 text-xl mt-1" /></div>

                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-[#094067]">
                                <Link to='/dashboard'>
                                    <li className="font-bold px-3 py-2 text-lg cursor-pointer hover:bg-[#094067] hover:text-white rounded transition-colors duration-300">Dashboard</li>
                                </Link>

                                <li onClick={handleLogout} className="font-bold px-3 py-2 text-lg cursor-pointer hover:bg-[#094067] hover:text-white rounded transition-colors duration-300">Logout</li>
                            </ul>
                        </div>
                        :
                        <Link to='/dashboard'> <button className="btn btn-outline border-[#094067] btn-sm rounded-full hover:bg-[#094067] px-4 transition-colors duration-300 ">Dashboard</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
