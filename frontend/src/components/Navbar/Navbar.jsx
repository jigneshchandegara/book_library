import React from 'react';
import Logo from "../../assets/website/logo.png"; // Adjust the path according to your project structure
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import { MdMan } from 'react-icons/md';
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        path: '/',
        name: "Home",
    },
    {
        id: 2,
        path: '/book',
        name: "BookShow",
    },
    {
        id: 3,
        path: '/addbook',
        name: "Add book",
    },
];

const DropdownLinks = [
    {
        name: "Trending Books",
        link: "/#",
    },
    {
        name: "Best Selling",
        link: "/#",
    },
    {
        name: "Authors",
        link: "/#",
    },
];

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className='shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200'>
            <div className='container py-3 sm:py-0'>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={Logo} alt="logo" className='w-10' />
                            Books
                        </a>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <DarkMode />
                        <ul className='items-center gap-4 hidden sm:flex'>
                            {Menu.map((value) => (
                                <li key={value.id}>
                                    <Link to={value.path} className='inline-block py-4 px-4 hover:text-primary duration-100'>
                                        {value.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="group relative cursor-pointer">
                                <span className='flex h-[72px] items-center gap-[2px]'>
                                    quick links
                                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                </span>
                                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                                    <ul className="space-y-3">
                                        {DropdownLinks.map((value) => (
                                            <li key={value.name}>
                                                <Link to={value.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                                                    {value.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                            Order <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                        <button onClick={handleOrderPopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                            Sign up <MdMan className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
