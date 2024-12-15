import React from 'react'
import Image from 'next/image'

const Blogs = () => {
    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center"
            >
                <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>Blog</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>Blog</span></h3>
            </header>

            <section className='flex justify-between p-16 flex-wrap'>
                <div className='w-[820px] border'>
                        <Image src='/images/Rectangle 13.png' alt='' width={817} height={817} ></Image>

                </div>
                <div className='w-[393px] border'>

                </div>
            </section>
        </main>
    )
}

export default Blogs