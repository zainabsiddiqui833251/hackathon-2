import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="w-full h-[100px] flex flex-col justify-center items-center z-10 relative text-[18px]  ">
            {/* Centered Links */}
            <ul className="flex items-center justify-between text-[16px] font-medium w-[430px]">
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

            {/* Icons on the Right */}
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center gap-12 font-bold text-[22px] w-[247px] h-[28px]">
                <Link href='/myaccount' ><i className="bi bi-person-exclamation"></i></Link>
                <i className="bi bi-search"></i>
                <i className="bi bi-heart"></i>
                <i className="bi bi-cart3"></i>
            </div>
        </nav>
    );
};

export default Nav;
