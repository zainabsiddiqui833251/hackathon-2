import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Ourblogs = () => {
    return (
        <section className='h-[900px] capitalize '>
            <h2 className='text-[36px] font-medium text-center mt-10 mb-4'>Our Blogs</h2>
            <p className='text-[16px] font-medium text-center '>Find a bright ideal to suit your taste with our great selection</p>
            <div className='flex justify-center gap-6 items-center text-center mt-20'>
                <div className='w-[393px] h-[553px]'>
                    <div className='w-[393px] h-[393px] mb-3'>
                        <Image src='/images/Rectangle 13.png' alt='' width={393} height={393} ></Image>
                    </div>
                    <p className='text-[20px]'>Going all-in with millennial design</p>
                    <h3 className='text-[24px] font-medium border-b-2 border-black w-[130px] h-[46px] m-auto my-6'> Read More</h3>
                    <p><i className="bi bi-clock"></i> 5 min &#8200; <i className="bi bi-calendar"></i> 12th Oct 2022</p>
                </div>
                <div className='w-[393px] h-[553px]'>
                    <div className='w-[393px] h-[393px] mb-3'>
                        <Image src='/images/Rectangle 14.png' alt='' width={393} height={393} ></Image>
                    </div>
                    <p className='text-[20px]'>Going all-in with millennial design</p>
                    <h3 className='text-[24px] font-medium border-b-2 border-black w-[130px] h-[46px] m-auto my-6 '> Read More</h3>
                    <p><i className="bi bi-clock"></i> 5 min &#8200; <i className="bi bi-calendar"></i> 12th Oct 2022</p>
                </div>
                <div className='w-[393px] h-[553px]'>
                    <div className='w-[393px] h-[393px] mb-3'>
                        <Image src='/images/Rectangle 15.png' alt='' width={393} height={393} ></Image>
                    </div>
                    <p className='text-[20px]'>Going all-in with millennial design</p>
                    <h3 className='text-[24px] font-medium border-b-2 border-black w-[130px] h-[46px] m-auto my-6 '> Read More</h3>
                    <p><i className="bi bi-clock"></i> 5 min &#8200; <i className="bi bi-calendar"></i> 12th Oct 2022</p>
                </div>
            </div>
            <p className='w-[126px] text-[20px] font-medium text-center mt-16 h-[49px] border-b-2 border-black capitalize m-auto'><Link href='/blogs'>view all post</Link></p>
        </section>
    )
}

export default Ourblogs