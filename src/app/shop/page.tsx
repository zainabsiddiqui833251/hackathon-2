import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const products_data = [
    {
        id: 1,
        product_name: 'Modular Sofa',
        product_price: 'Rs 25,000.00',
        product_image: '/images/modularsofa.png',
        product_description1: 'This modular sofa combines style and comfort, perfect for modern living rooms. Designed with a focus on flexibility, it can be arranged to fit any space.',
        product_description2: 'Made with high-quality fabric and a sturdy wooden frame, this sofa ensures durability and ease of maintenance. A versatile choice for every home.',
        category: 'Living Room Furniture',
        tags: 'sofa, modular, living room, furniture',
        sku: 'MS-001',
    },
    {
        id: 2,
        product_name: 'Granite Dining Table with Chairs',
        product_price: 'Rs 25,000.00',
        product_image: '/images/Granite dining table with dining chair 1.png',
        product_description1: 'Elevate your dining experience with this luxurious granite dining table paired with elegant chairs. Its sleek design adds sophistication to your home.',
        product_description2: 'Crafted with polished granite and sturdy wood, this set is both functional and durable, ideal for family meals or formal dinners.',
        category: 'Dining Furniture',
        tags: 'dining table, granite, chairs, dining room',
        sku: 'DT-001',
    },
    {
        id: 3,
        product_name: 'Outdoor Bar Table and Stool',
        product_price: 'Rs 25,000.00',
        product_image: '/images/Outdoor bar table and stool 1.png',
        product_description1: 'Enjoy your evenings outdoors with this stylish bar table and stool set. Perfect for balconies, patios, or garden areas.',
        product_description2: 'Made with weather-resistant materials, this set offers comfort and durability, making it an excellent addition to any outdoor setting.',
        category: 'Outdoor Furniture',
        tags: 'bar table, outdoor, stools, patio furniture',
        sku: 'BT-001',
    },
    {
        id: 4,
        product_name: 'Plain Console with Teak Mirror',
        product_price: 'Rs 25,000.00',
        product_image: '/images/Plain console with teak mirror 1.png',
        product_description1: 'This plain console table paired with a teak mirror exudes simplicity and elegance, suitable for entryways or living rooms.',
        product_description2: 'Constructed with premium teak wood, this set ensures a timeless appeal and exceptional functionality for your home.',
        category: 'Home Decor',
        tags: 'console, mirror, teak, home decor',
        sku: 'PC-001',
    },
    {
        id: 5,
        product_name: 'Grain Coffee Table',
        product_price: 'Rs 15,000.00',
        product_image: '/images/Grain coffee table 1.png',
        product_description1: 'The Grain Coffee Table combines rustic charm with modern design, making it a great centerpiece for your living room.',
        product_description2: 'Made from reclaimed wood, it is eco-friendly and adds a unique touch to any interior decor.',
        category: 'Living Room Furniture',
        tags: 'coffee table, wood, rustic, furniture',
        sku: 'CT-001',
    },
    {
        id: 6,
        product_name: 'Kent Coffee Table',
        product_price: 'Rs 225,000.00',
        product_image: '/images/Kent coffee table 1.png',
        product_description1: 'A luxurious coffee table with a sophisticated design that blends seamlessly into contemporary living spaces.',
        product_description2: 'Constructed from premium materials, the Kent Coffee Table is built for both style and durability.',
        category: 'Living Room Furniture',
        tags: 'coffee table, luxury, kent, modern',
        sku: 'CT-002',
    },
    {
        id: 7,
        product_name: 'Round Coffee Table',
        product_price: 'Rs 251,000.00',
        product_image: '/images/Round coffee table_color 2 1.png',
        product_description1: 'A stunning round coffee table that creates a warm and inviting focal point in any room.',
        product_description2: 'With its unique design and durable finish, this table complements both modern and classic interiors.',
        category: 'Living Room Furniture',
        tags: 'coffee table, round, luxury, furniture',
        sku: 'CT-003',
    },
    {
        id: 8,
        product_name: 'Reclaimed Teak Coffee Table',
        product_price: 'Rs 25,200.00',
        product_image: '/images/Reclaimed teak coffee table 1.png',
        product_description1: 'Eco-friendly and stylish, this reclaimed teak coffee table is perfect for creating a natural vibe in your home.',
        product_description2: 'Handcrafted from recycled wood, each piece is unique and full of character.',
        category: 'Living Room Furniture',
        tags: 'coffee table, teak, eco-friendly, living room',
        sku: 'CT-004',
    },
    {
        id: 9,
        product_name: 'Plain Console Table',
        product_price: 'Rs 258,200.00',
        product_image: '/images/Plain console_ 1.png',
        product_description1: 'This plain console table features a minimalistic design, perfect for modern interiors.',
        product_description2: 'Its spacious top provides ample space for decorative items or daily essentials.',
        category: 'Home Decor',
        tags: 'console, modern, minimal, home decor',
        sku: 'PC-002',
    },
    {
        id: 10,
        product_name: 'Reclaimed Teak Sideboard',
        product_price: 'Rs 20,000.00',
        product_image: '/images/Reclaimed teak Sideboard 1.png',
        product_description1: 'A functional sideboard made from reclaimed teak, offering ample storage and style.',
        product_description2: 'Perfect for dining rooms or hallways, it adds a rustic yet elegant touch to any space.',
        category: 'Dining Furniture',
        tags: 'sideboard, teak, reclaimed, furniture',
        sku: 'SB-001',
    },
    {
        id: 11,
        product_name: 'Outdoor Sofa Set',
        product_price: 'Rs 244,000.00',
        product_image: '/images/Outdoor sofa set 1.png',
        product_description1: 'Relax outdoors with this comfortable and stylish sofa set designed for patios and gardens.',
        product_description2: 'Built with weather-resistant materials, this set ensures longevity and ease of maintenance.',
        category: 'Outdoor Furniture',
        tags: 'sofa set, outdoor, garden, furniture',
        sku: 'OS-001',
    },
    {
        id: 12,
        product_name: 'Bella Chair and Table',
        product_price: 'Rs 100,000.00',
        product_image: '/images/Bella chair and table 1.png',
        product_description1: 'An elegant chair and table set that elevates any space with its modern design.',
        product_description2: 'Perfect for both indoor and outdoor use, crafted with durable materials for long-lasting beauty.',
        category: 'Dining Furniture',
        tags: 'chair, table, bella, modern',
        sku: 'BT-002',
    },
    {
        id: 13,
        product_name: 'Granite Square Side Table',
        product_price: 'Rs 258,800.00',
        product_image: '/images/Granite square side table 2.png',
        product_description1: 'A sleek granite side table that adds sophistication to your living or bedroom.',
        product_description2: 'Its compact size makes it versatile and easy to fit into any corner.',
        category: 'Living Room Furniture',
        tags: 'side table, granite, square, furniture',
        sku: 'ST-001',
    },
    {
        id: 14,
        product_name: 'Asgaard Sofa',
        product_price: 'Rs 250,000.00',
        product_image: '/images/Asgaard sofa 2.png',
        product_description1: 'Luxurious and spacious, the Asgaard Sofa brings comfort and elegance to your living room.',
        product_description2: 'Made with premium upholstery and a robust frame, it’s a perfect blend of style and durability.',
        category: 'Living Room Furniture',
        tags: 'sofa, asgaard, luxury, furniture',
        sku: 'SF-001',
    },
    {
        id: 15,
        product_name: 'Maya Sofa Three-Seater',
        product_price: 'Rs 115,000.00',
        product_image: '/images/Maya sofa three seater 1.png',
        product_description1: 'The Maya Sofa combines timeless design with unparalleled comfort, perfect for family gatherings.',
        product_description2: 'This three-seater is crafted for durability, ensuring it remains a staple in your home for years to come.',
        category: 'Living Room Furniture',
        tags: 'sofa, maya, three-seater, furniture',
        sku: 'SF-002',
    },
    {
        id: 16,
        product_name: 'Kent Outdoor Sofa Set',
        product_price: 'Rs 200,000.00',
        product_image: '/images/SJP_0825  1.png',
        product_description1: 'Experience outdoor luxury with this Kent sofa set, designed for patios or gardens.',
        product_description2: 'With its durable materials and elegant design, it creates a comfortable outdoor retreat.',
        category: 'Outdoor Furniture',
        tags: 'sofa set, outdoor, kent, furniture',
        sku: 'OS-002',
    },
];


const Shop = () => {
    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center"
            >
                <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>Shop</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>Shop</span></h3>
            </header>

            <div className='border my-10 px-20 w-full h-[100px] bg-[#faf4f4] flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <div className=' flex gap-8 items-center'>
                        <p className='flex capitalize w-[85px] text-[20px] justify-between'> <Image src='/images/system-uicons_filtering.png' alt='' width={25} height={25} />
                            filter</p>
                        <Image src='/images/ci_grid-big-round.png' alt='' width={28} height={28}></Image>
                        <Image src='/images/bi_view-list.png' alt='' width={24} height={24}></Image>

                    </div>
                    <div className='w-[237px] h-[37px] ml-6 flex justify-between items-center '>
                        <h1 className='text-[37px]'>&#65372;</h1>
                        <p className='text-[16px]'>Showing 1-16 of 32 results</p>
                    </div>
                </div>
                <div className='flex '>
                    <div className='flex justify-between items-center w-[126px] h-[55px]'>
                        <h3 className='text-[20px] '>Show</h3>
                        <div className='w-[55px] h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center text-[20px]'>
                            16
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-[288px] h-[55px]'>
                        <h3 className='text-[20px] '>Sort By</h3>
                        <div className='w-[188px] h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center text-[20px]'>
                            Default
                        </div>

                    </div>
                </div>
            </div>




            <div>
                <div className='w-[1242px] h-[1791px] m-auto flex flex-wrap justify-between items-center'>
                    {products_data.map((product) => (
                        <div key={product.id} className="card w-[287px] h-[397px] ">
                            <div className="w-[287px] h-[287px] flex justify-center items-center">
                                <Image
                                    src={product.product_image}
                                    alt={product.product_name}
                                    width={280}
                                    height={280}
                                    className="f"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-[16px]">{product.product_name}</h3>
                                <h4 className="text-[24px] font-medium">{product.product_price}</h4>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


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

export default Shop