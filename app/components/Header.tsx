'use client'
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.jpeg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
            <div className="flex items-center space-x-4"> {/* Container for logo and text with space between them */}
                <div className='rounded-full'>
                    <Image 
                        className='rounded-full'
                        priority
                        alt='Logo'
                        src={logo}
                        width={40}
                        height={60}
                    />
                </div>
                <div className="text-[#1D2951]">
                    <div className="text-xl font-bold">
                        North Law Firm
                    </div>
                    <h1 className="text-sm font-bold">
                        สำนักงานทนายความนอรท์ลอวเ์ฟิรม์
                    </h1>
                </div>
            </div>
            <div className="flex md:hidden">
                <button id="hamburger" onClick={toggleMenu}>
                    {menuOpen ? (
                        <img src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />


                    ) : (
                        <img src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />

                    )}
                </button>
            </div>
            <div className={`toggle text-black ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right font-bold mt-5 md:mt-0 md:border-none`}>
                <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home</a>
                <a href="#services" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services</a>
                <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us</a>
                <a href="#gallery" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Gallery</a>
                <a href="#contactUs" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Visit Us</a>
            </div>
            <div className={`toggle w-full text-end ${menuOpen ? 'block' : 'hidden'} md:flex md:w-auto px-2 py-2 md:rounded`}>
                <a href="tel:+123">
                    <div className="flex justify-end">
                        <div className="flex items-center h-10 w-30 rounded-md bg-[#1D2951] text-white font-medium p-2 hover:bg-[#c09858] transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            Call now
                        </div>
                    </div>
                </a>
            </div>
        </nav>
        
    );
}

export default Header;
