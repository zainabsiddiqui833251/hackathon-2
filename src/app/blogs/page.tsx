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
                <div className='w-[820px] '>
                    <Image src='/images/Rectangle 14.png' alt='' width={1000} height={1000} className='w-full object-fill h-[500px]'></Image>
                    <h2 className='text-[16px] text-[#9F9F9F] my-3 capitalize'>
                        <span className='m-2 ml-0'><i className='bi bi-person-fill'></i> admin</span>
                        <span className='m-2'> <i className='bi bi-calendar-fill'></i> 14 oct 2022</span>
                        <span className='m-2'><i className='bi bi-tag-fill'></i> wood</span>
                    </h2>
                    <h1 className='text-[30px] font-medium'>Going all-in with millennial design</h1>
                    <p className='text-[16px] text-[#9F9F9F] my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <h3 className='text-[16px] w-[89px] h-[24px] border-b-2 border-black flex justify-center items-center capitalize pb-3 my-4'>read more</h3>
                </div>

                <div className='w-[820px] '>
                    <Image src='/images/Rectangle 68.png' alt='' width={1000} height={1000} className='w-full object-fill h-[500px]'></Image>
                    <h2 className='text-[16px] text-[#9F9F9F] my-3 capitalize'>
                        <span className='m-2 ml-0'><i className='bi bi-person-fill'></i> admin</span>
                        <span className='m-2'> <i className='bi bi-calendar-fill'></i> 14 oct 2022</span>
                        <span className='m-2'><i className='bi bi-tag-fill'></i> handmade</span>
                    </h2>
                    <h1 className='text-[30px] font-medium'>Exploring new ways of decorating</h1>
                    <p className='text-[16px] text-[#9F9F9F] my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <h3 className='text-[16px] w-[89px] h-[24px] border-b-2 border-black flex justify-center items-center capitalize pb-3 my-4'>read more</h3>
                </div>

                <div className='w-[820px] '>
                    <Image src='/images/Rectangle 68 (1).png' alt='' width={1000} height={1000} className='w-full object-fill h-[500px]'></Image>
                    <h2 className='text-[16px] text-[#9F9F9F] my-3 capitalize'>
                        <span className='m-2 ml-0'><i className='bi bi-person-fill'></i> admin</span>
                        <span className='m-2'> <i className='bi bi-calendar-fill'></i> 14 oct 2022</span>
                        <span className='m-2'><i className='bi bi-tag-fill'></i> wood</span>
                    </h2>
                    <h1 className='text-[30px] font-medium'>Handmade pieces that took time to make</h1>
                    <p className='text-[16px] text-[#9F9F9F] my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <h3 className='text-[16px] w-[89px] h-[24px] border-b-2 border-black flex justify-center items-center capitalize pb-3 my-4'>read more</h3>
                </div>
                <div className='w-[393px] border'>
                    <div className='w-[311px] h-[58px] border border-black flex justify-between items-center'>
                         <input type="text"  />
                         <i className='bi bi-search'></i>
                    </div>
                </div>


            </section>
            <div className='w-[392px] h-[60px] flex justify-between items-center m-auto'>
                <button className='w-[60px] h-[60px] rounded-md text-[20px] bg-[#FBEBB5]'>1</button>
                <button className='w-[60px] h-[60px] rounded-md text-[20px] bg-[#FFF9E5]'>2</button>
                <button className='w-[60px] h-[60px] rounded-md text-[20px] bg-[#FFF9E5]'>3</button>
                <button className='w-[98px] h-[60px] rounded-md text-[20px] bg-[#FFF9E5]'>Next</button>
            </div>



            <div className='w-full h-[300px] flex justify-center items-center bg-[#faf4f4] my-20 gap-10'>
                <div className='w-[376px] h-[108px] flex flex-col'>
                    <h1 className='font-medium text-[32px]'>Free Delivery</h1>
                    <p className='text-[20px] text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
                </div>
                <div className='w-[376px] h-[108px] flex flex-col'>
                    <h1 className='font-medium text-[32px]'>90 Days Return</h1>
                    <p className='text-[20px] text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
                </div>
                <div className='w-[376px] h-[108px] flex flex-col'>
                    <h1 className='font-medium text-[32px]'>Secure Payment</h1>
                    <p className='text-[20px] text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>
        </main>
    )
}

export default Blogs