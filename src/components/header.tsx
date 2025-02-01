import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='w-screen h-auto lg:h-[800px] lg:flex lg:justify-end justify-center items-center bg-[#fbebb5] absolute lg:top-[-10px] top-0 flex-wrap text-sm'>
                 <div className='abolute right-10 z-10 w-fit m-auto'>
                    <h1 className='lg:text-[64px] text-5xl text-center font-medium capitalize mb-6 mt-20'><span>rocket single</span> <br /> <br /><span>seater </span></h1>
                    <button className='lg:w-[121px] flex justify-center items-center w-fit lg:h-[49px] h-10 border-b-4 lg:text-[24px] text-sm font-medium capitalize border-black'><Link href='/shop'>shop now</Link></button>
                 </div>
                 <div className='lg:w-[750px] w-screen lg:h-full h-auto relative flex justify-center items-center'>
                    <Image src='/images/header.png' alt='sofa' width={650} height={500} className=' lg:h-full lg:w-[650px] w-48 h-80'></Image>
                 </div>
        </header>
    )
}

export default Header