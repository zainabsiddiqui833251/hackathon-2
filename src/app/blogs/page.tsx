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

            <section className='flex items-start justify-between p-16 flex-wrap'>
                <div>
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
                </div>
                <div className='w-[393px] flex flex-col items-center justify-center'>
                    <div className='w-[311px] h-[58px] border border-black flex justify-between items-center p-2 rounded-lg '>
                        <input type="text" typeof='search' className='hover:border-none hover:outline-none focus:outline-none bg-transparent  p-2' />
                        <i className='bi bi-search text-[24px]'></i>
                    </div>

                    <div className='w-[251px] capitalize mt-12'>
                        <h2 className='font-medium text-[24px]'>categories</h2>
                        <ul className='mt-6 text-[16px] text-[#9f9f9f]'>
                            <li className='flex justify-between items-center mt-10'>
                                <div>crafts</div>
                                <div>2</div>
                            </li>
                            <li className='flex justify-between items-center mt-10'>
                                <div>design</div>
                                <div>8</div>
                            </li>
                            <li className='flex justify-between items-center mt-10'>
                                <div>handmade</div>
                                <div>7</div>
                            </li>
                            <li className='flex justify-between items-center mt-10'>
                                <div>interior</div>
                                <div>1</div>
                            </li>
                            <li className='flex justify-between items-center mt-10'>
                                <div>wood</div>
                                <div>6</div>
                            </li>
                        </ul>
                    </div>

                    <div className='w-[251px] capitalize mt-36'>
                        <h2 className='font-medium text-[24px]'>recent posts</h2>
                        <div className='flex justify-center items-center  mt-6'>
                            <div className='w-[80px] h-[80px] rounded-lg '>
                                <Image src='/images/Rectangle 69 (1).png' alt='' width={80} height={80} className=''></Image>
                            </div>
                            <div className='flex-1  p-2'>
                              <h4 className='text-[14px] mb-1'>Going all-in with millennial design</h4>
                              <p className='text-[12px] text-[#9f9f9f]'>03 Aug 2022</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center  mt-6'>
                            <div className='w-[80px] h-[80px] rounded-lg '>
                                <Image src='/images/Rectangle 69 (2).png' alt='' width={80} height={80} className=''></Image>
                            </div>
                            <div className='flex-1  p-2'>
                              <h4 className='text-[14px] mb-1'>Exploring new ways of decorating</h4>
                              <p className='text-[12px] text-[#9f9f9f]'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  mt-6'>
                            <div className='w-[80px] h-[80px] rounded-lg '>
                                <Image src='/images/Rectangle 69 (3).png' alt='' width={80} height={80} className=''></Image>
                            </div>
                            <div className='flex-1  p-2'>
                              <h4 className='text-[14px] mb-1'>Handmade pieces that took time to make</h4>
                              <p className='text-[12px] text-[#9f9f9f]'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  mt-6'>
                            <div className='w-[80px] h-[80px] rounded-lg '>
                                <Image src='/images/Rectangle 69 (4).png' alt='' width={80} height={80} className=''></Image>
                            </div>
                            <div className='flex-1  p-2'>
                              <h4 className='text-[14px] mb-1'>Modern home in Milan</h4>
                              <p className='text-[12px] text-[#9f9f9f]'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center  mt-6'>
                            <div className='w-[80px] h-[80px] rounded-lg '>
                                <Image src='/images/Rectangle 69.png' alt='' width={80} height={80} className=''></Image>
                            </div>
                            <div className='flex-1  p-2'>
                              <h4 className='text-[14px] mb-1'>Colorful office <br /> redesign</h4>
                              <p className='text-[12px] text-[#9f9f9f]'>03 Aug 2022</p>
                            </div>
                        </div>
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