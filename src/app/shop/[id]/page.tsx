'use client'
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Product {
    _id: string;
    name: string;
    description: string;
    price: string;
    stockLevel: number;
    category: string;
    imagePath: string;
}

const ProductDetails = ({ params }: { params: { id: string } }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!params.id) return;

        const fetchProduct = async () => {
            const query = `*[_type == "product" && _id == $productId][0]`;
            const data = await client.fetch(query, { productId: params.id });
            setProduct(data);
        };

        fetchProduct();
    }, [params.id]);

    if (!product) {
        return (
            <div>
                <h1>Product Not Found</h1>
            </div>
        );
    }

    return (
        <main>
            <nav className='w-full px-20'>
                <div className='flex items-center gap-6 capitalize'>
                    <p className='text-[16px] text-[#9F9F9F]'>home</p>
                    <p className='text-[20px]'><i className='bi bi-chevron-right'></i></p>
                    <p className='text-[16px] text-[#9F9F9F]'>shop</p>
                    <p className='text-[20px]'><i className='bi bi-chevron-right'></i></p>
                    <p className='text-[16px] flex justify-center items-center'>{product.name}</p>
                </div>
            </nav>

            <section>
                <div className='w-[1241px] h-[730px] m-auto my-16 flex justify-between'>
                    <div className='w-[76px] h-[416px] flex flex-col justify-between items-center'>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className='w-[76px] h-[80px] bg-[#FFF9E5]'>
                                <Image src={product.imagePath} alt='' width={74} height={44} />
                            </div>
                        ))}
                    </div>
                    <div className='w-[481px] h-[500px]'>
                        <div className='w-[423px] h-[500px] bg-[#fff9e5]'>
                            <Image src={product.imagePath} alt={product.name} layout="responsive" width={423} height={500} />
                        </div>
                    </div>
                    <div className='w-[606px] h-[731px] capitalize'>
                        <h2 className='text-[42px]'>{product.name}</h2>
                        <h4 className='text-[24px] font-medium text-[#9f9f9f]'>{product.price} $</h4>
                        <p className='text-[13px]'>{product.description}</p>

                        <div className='my-8 flex items-center gap-4'>
                            <div className='w-[123px] border border-black rounded-lg h-[64px] text-[16px] flex justify-between p-3 items-center'>
                                <p className='cursor-pointer' onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</p>
                                <p>{quantity}</p>
                                <p className='cursor-pointer' onClick={() => setQuantity(quantity + 1)}>+</p>
                            </div>
                            <div className='w-[215px] h-[64px] capitalize flex justify-center items-center border border-black rounded-lg'>
                                <h3 className='text-[20px]'>add to cart</h3>
                            </div>
                        </div>

                        <div className='bg-black h-[1px] w-full opacity-30'></div>
                        <div className='capitalize text-[#9f9f9f]'>
                            <p className='text-[#9f9f9f] mb-4'>SKU: Default</p>
                            <p className='text-[#9f9f9f] mb-4'>Category: {product.category}</p>
                        </div>
                    </div>
                </div>

                <div className='text-center my-8'>
                    <h2 className='text-[24px] font-medium'>Description</h2>
                    <p className='text-[14px]'>{product.description}</p>
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
