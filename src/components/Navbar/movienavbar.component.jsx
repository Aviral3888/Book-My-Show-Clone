import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronRight, BiSearch, BiMenu, BiShareAlt } from "react-icons/bi";
import { AiFillCaretDown } from 'react-icons/ai';

// context
import { MovieContext } from '../../context/movie.context';

// Navbar for different devices 
// Mobile & Tablet
const NavSm = () => {

    const { movie } = useContext(MovieContext);

    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="w-7 h-7">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
};


// Desktop/ Laptop
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-md flex items-center  justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <Link to="/">
                            <img
                                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                                alt="Logo"
                                className="w-full h-full" />
                        </Link>
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-sm" >
                        <BiSearch className="w-5 h-5 text-gray-600" />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5 cursor-pointer">
                    <span className="text-gray-200 text-sm flex items-center hover:text-white ">
                        New Delhi <AiFillCaretDown className="text-white mx-1" />
                    </span>
                    <button className="bg-red-600 text-white text-sm rounded-md px-3 py-1 ">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
};


const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-800 p-4 ">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/* Tablet Screen */}
                    <NavSm />
                </div>
                <div className="hidden lg:flex">
                    {/* Laptop Screen  bg-bms-700 */}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default MovieNavbar;