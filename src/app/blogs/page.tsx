'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogData = [
    {
        id: 1,
        title: "Going all-in with millennial design",
        date: "14 Oct 2022",
        category: "Wood",
        image: "/images/Rectangle 14.png",
        excerpt: "Lorem ipsum dolor sit amet...",
        slug: "going-all-in-with-millennial-design"
    },
    {
        id: 2,
        title: "Exploring new ways of decorating",
        date: "20 Nov 2022",
        category: "Interior",
        image: "/images/Rectangle 68.png",
        excerpt: "Lorem ipsum dolor sit amet...",
        slug: "exploring-new-ways-of-decorating"
    },
    {
        id: 3,
        title: "Handmade pieces that took time to make",
        date: "05 Dec 2022",
        category: "Handmade",
        image: "/images/Rectangle 68 (1).png",
        excerpt: "Lorem ipsum dolor sit amet...",
        slug: "handmade-pieces-time-to-make"
    }
];

const Blogs = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center">
                <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>Blog</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>Blog</span></h3>
            </header>

             {/* Blog Listing */}
             <section className='flex flex-wrap items-start justify-center lg:p-16 p-5'>
                <div className="max-w-3xl w-full mb-16 lg:mb-0">
                    {blogData.slice(0, showMore ? blogData.length : 1).map((post) => (
                        <div key={post.id} className="mb-10">
                            <Image src={post.image} alt={post.title} width={1000} height={500} className='w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]' />
                            <h2 className='text-gray-500 text-sm mt-2 flex space-x-3'>
                                <span><i className='bi bi-person-fill'></i> Admin</span>
                                <span><i className='bi bi-calendar-fill'></i> {post.date}</span>
                                <span><i className='bi bi-tag-fill'></i> {post.category}</span>
                            </h2>
                            <h1 className='text-xl sm:text-2xl font-semibold mt-3'>{post.title}</h1>
                            <p className='text-gray-600 text-sm sm:text-base mt-2'>{post.excerpt}</p>
                            <Link href={`/blogs/${post.slug}`} className='inline-block text-sm sm:text-base font-medium border-b-2 border-black mt-3 pb-1'>
                                Read More
                            </Link>
                        </div>
                    ))}
                    

                    {/* Toggle Button */}
                    <button 
                        className='mt-4 px-6 py-2 bg-black text-white rounded-md'
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'View Less' : 'View More'}
                    </button>
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

{/* 
            <div className='w-screen lg:w-[392px] h-[60px] flex justify-between items-center m-auto p-5 lg:p-0'>
                <button className='lg:w-[60px] w-12 h-12 lg:h-[60px] rounded-md text-xl lg:text-[20px] bg-[#FFF9E5] hover:bg-[#FBEBB5]'>1</button>
                <button className='lg:w-[60px] w-12 h-12 lg:h-[60px] rounded-md text-xl lg:text-[20px] bg-[#FFF9E5] hover:bg-[#FBEBB5]'>2</button>
                <button className='lg:w-[60px] w-12 h-12 lg:h-[60px] rounded-md text-xl lg:text-[20px] bg-[#FFF9E5] hover:bg-[#FBEBB5]'>3</button>
                <button className='lg:w-[98px] w-20 h-12 lg:h-[60px] rounded-md text-xl lg:text-[20px] bg-[#FFF9E5] hover:bg-[#FBEBB5]'>Next</button>
            </div> */}



            <div className="w-full h-auto p-5 lg:p-0  lg:h-[300px] flex flex-wrap justify-center items-center bg-[#faf4f4] my-20 gap-10">
                <div className="w-[376px] h-[108px] flex flex-col">
                    <h1 className="font-medium text-2xl lg:text-[32px]">Free Delivery</h1>
                    <p className="text-lg lg:text-[20px] text-[#9F9F9F]">For all orders over $50, consectetur adipiscing elit.</p>
                </div>
                <div className="w-[376px] h-[108px] flex flex-col">
                    <h1 className="font-medium text-2xl lg:text-[32px]">90 Days Return</h1>
                    <p className="text-lg lg:text-[20px] text-[#9F9F9F]">If goods have problems, consectetur adipiscing elit.</p>
                </div>
                <div className="w-[376px] h-[108px] flex flex-col">
                    <h1 className="font-medium text-2xl lg:text-[32px]">Secure Payment</h1>
                    <p className="text-lg lg:text-[20px] text-[#9F9F9F]">100% secure payment, consectetur adipiscing elit.</p>
                </div>
            </div>
        </main>
    );
};

export default Blogs;
