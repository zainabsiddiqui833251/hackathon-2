'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="w-screen h-[100px] flex justify-between items-center px-6 z-20 relative text-[18px]">
            {/* Hamburger Menu */}
            <button 
                className="block text-[24px] sm:hidden" 
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            
            {/* Sidebar for Small Devices (320px) */}
            <div className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 flex flex-col items-center justify-start sm:hidden`}>
                {/* Close Button */}
                <button 
                    className="absolute top-4 right-4 text-[24px]" 
                    onClick={() => setIsOpen(false)}
                >
                    ✖
                </button>
                <ul className="flex flex-col gap-6 text-[16px] font-medium mt-10">
                    <li>
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
                    </li>
                    <li>
                        <Link href="" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>

                {/* Icons on Small Devices */}
                <div className="mt-auto mb-6 flex flex-col gap-6">
                    <div className="text-[22px] font-bold flex justify-center gap-4">
                        <i className="bi bi-person-exclamation"></i>
                        {/* Move the search icon inside the sidebar */}
                        <i className="bi bi-search" onClick={() => setIsSearchOpen(!isSearchOpen)}></i>
                        <i className="bi bi-heart" onClick={() => setIsWishlistOpen(!isWishlistOpen)}></i>
                        <i className="bi bi-cart3" onClick={() => setIsCartOpen(!isCartOpen)}></i>
                    </div>
                    
                    {/* Search Dropdown in Sidebar */}
                    {isSearchOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-md p-2 w-[200px]">
                            <input 
                                type="text" 
                                className="w-full border border-gray-300 p-2 rounded" 
                                placeholder="Search..." 
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden sm:ml-[500px] sm:flex items-center justify-between text-[16px] font-medium w-[430px]">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shop">Shop</Link>
                </li>
                <li>
                    <Link href="">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            {/* Icons on the Right for Desktop */}
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center gap-12 font-bold text-[22px] w-[247px] h-[28px] hidden sm:flex">
                <Link href='/myaccount' ><i className="bi bi-person-exclamation"></i></Link>
                
                {/* Search Dropdown for Desktop */}
                <div className="relative">
                    <i className="bi bi-search" onClick={() => setIsSearchOpen(!isSearchOpen)}></i>
                    {isSearchOpen && (
                        <div className="absolute top-full  right-20 mt-2 bg-white shadow-md p-2 w-[200px]">
                            <input 
                                type="text" 
                                className="w-full border border-gray-300 p-2 rounded" 
                                placeholder="Search..." 
                            />
                        </div>
                    )}
                </div>
                
                {/* Wishlist and Cart Icons */}
                <i className="bi bi-heart" onClick={() => setIsWishlistOpen(!isWishlistOpen)}></i>
                <i className="bi bi-cart3" onClick={() => setIsCartOpen(!isCartOpen)}></i>
            </div>

            {/* Wishlist Sidebar */}
            {isWishlistOpen && (
                <div className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg p-4 z-30">
                    <button className="absolute top-4 right-4 text-[24px]" onClick={() => setIsWishlistOpen(false)}>✖</button>
                    <h2 className="font-semibold text-lg">Wishlist</h2>
                    <ul className="mt-6">
                        {/* Add Wishlist items here */}
                        <li> Item 1</li>
                        <li> Item 2</li>
                    </ul>
                </div>
            )}

            {/* Cart Sidebar */}
            {isCartOpen && (
                <div className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg p-4 z-30">
                    <button className="absolute top-4 right-4 text-[24px]" onClick={() => setIsCartOpen(false)}>✖</button>
                    <h2 className="font-semibold text-lg">Cart</h2>
                    <ul className="mt-6">
                        {/* Add Cart items here */}
                        <li> Item 1</li>
                        <li> Item 2</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
