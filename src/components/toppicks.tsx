import React from 'react'
import Image from 'next/image'

const Toppicks = () => {
    return (
        <section className='p-5'>
            <h2 className='text-[36px] font-medium text-center mt-6 mb-3'>Top picks for you</h2>
            <p className='text-[16px] font-medium text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className='flex justify-center items-center flex-wrap gap-6 mt-5'>
                <div className='w-[287px] h-[372px] '>
                    <Image src='/images/modularsofa.png' alt='' width={400} height={400} className='h-[287px]'></Image>
                    <h3 className='text-[16px] mb-2 '>Trenton modular sofa_3</h3>
                    <h4 className='text-[24px] font-medium'>Rs. 25,000.00</h4>
                </div>
                <div className='w-[287px] h-[372px] '>
                    <div className='h-[287px] flex justify-center items-center'>
                        <Image src='/images/Granite dining table with dining chair 1.png' alt='' width={400} height={400} ></Image>
                    </div>
                    <h3 className='text-[16px] mb-2 '>Granite dining table with dining chair</h3>
                    <h4 className='text-[24px] font-medium'>Rs. 25,000.00</h4>
                </div>
                <div className='w-[287px] h-[372px] '>
                    <div className='h-[287px] flex justify-center items-center'>
                        <Image src='/images/Outdoor bar table and stool 1.png' alt='' width={350} height={200} ></Image>
                    </div>
                    <h3 className='text-[16px] mb-2 '>Outdoor bar table and stool </h3>
                    <h4 className='text-[24px] font-medium'>Rs. 25,000.00</h4>
                </div>
                <div className='w-[287px] h-[372px] '>
                    <div className='h-[287px] flex justify-center items-center'>
                        <Image src='/images/Plain console with teak mirror 1.png' alt='' width={400} height={400} ></Image>
                    </div>
                    <h3 className='text-[16px] mb-2 '>Plain console with teak mirror </h3>
                    <h4 className='text-[24px] font-medium'>Rs. 25,000.00</h4>
                </div>
            </div>
            <p className='text-center w-[115px] text-[20px] font-medium my-8 capitalize m-auto block h-[49px] border-b-2 border-black'>view more</p>
        </section>
    )
}

export default Toppicks