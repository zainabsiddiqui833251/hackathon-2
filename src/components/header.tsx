import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <header className='w-full h-[800px] flex justify-end items-center bg-[#fbebb5] absolute top-[-10px] flex-wrap'>
                 <div className='abolute right-10 z-10'>
                    <h1 className='text-[64px] font-medium capitalize mb-6'>rocket single <br /> seater </h1>
                    <button className='w-[121px] h-[49px] border-b-4 text-[24px] font-medium capitalize border-black'>shop now</button>
                 </div>
                 <div className='w-[750px] h-full relative flex justify-center items-center'>
                    <Image src='/images/header.png' alt='sofa' width={650} height={500} className=' h-full'></Image>
                 </div>
        </header>
    )
}

export default Header