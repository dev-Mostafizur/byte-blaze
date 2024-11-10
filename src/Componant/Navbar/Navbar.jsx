import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import LightDarkMode from "../LightDarkMode/LightDarkMode";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Track menu open state

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10 w-full">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost gap-0 normal-case text-secondary text-2xl">
                        Byte<span className="text-primary">Blaze</span>
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    {/* Hamburger Icon for Mobile */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="btn btn-ghost">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Desktop Menu */}
                    <ul className="menu menu-horizontal px-1 gap-5 hidden sm:flex">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-primary font-bold" : "font-bold"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive ? "text-primary font-bold" : "font-bold"
                            }
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            to="/bookmarks"
                            className={({ isActive }) =>
                                isActive ? "text-primary font-bold" : "font-bold"
                            }
                        >
                            Bookmarks
                        </NavLink>
                    </ul>
                    {/* Mobile Menu */}
                    {isOpen && (
                        <ul className="menu bg-base-100 shadow-lg p-3 rounded-lg absolute top-16 right-4 w-48 sm:hidden">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-bold" : "font-bold"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-bold" : "font-bold"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Blogs
                            </NavLink>
                            <NavLink
                                to="/bookmarks"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-bold" : "font-bold"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Bookmarks
                            </NavLink>
                        </ul>
                    )}
                    <LightDarkMode />
                </div>
            </div>
        </>
    );
};

export default Navbar;
