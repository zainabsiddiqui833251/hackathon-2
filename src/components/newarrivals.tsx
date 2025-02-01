import React from 'react'
import Image from 'next/image'

const Newarrivals = () => {
    return (
        <section className='w-full h-[639px] flex flex-wrap justify-between gap-6 items-center bg-[#fff9e5] mt-6 '>
            <div className='lg:w-[983px] w-[300px]'>
                <Image src='/images/Asgaard sofa 1.png' alt='' width={983} height={639}></Image>
            </div>
            <div className='mr-10 lg:w-[331px] w-[300px] m-auto text-center capitalize'>
                 <h1 className='text-[24px] font-medium text-center'>New Arrivals</h1>
                 <p className='font-bold text-[48px] capitalize'>asgaard sofa</p>
                 <button className='border-black border mt-6 text-[20px] w-[255px] h-[64px] capitalize'>order now</button>
            </div>
        </section>
    )
}

export default Newarrivals