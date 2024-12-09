import React from 'react';
import Image from 'next/image';
import { products_data } from '../../../data/product_data'; // Adjust the import path as needed


type ProductPageProps = {
    productId: string;
  };
  
  
const Product_details = ({ productId }: ProductPageProps) => {
    // Find the product based on productId
    const product = products_data.find((prod) => prod.id === parseInt(productId, 10));

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <main>
            <nav className="w-full px-20">
                <div className="flex items-center gap-6 capitalize">
                    <p className="text-[16px] text-[#9F9F9F]">home</p>
                    <p className="text-[20px]">
                        <i className="bi bi-chevron-right"></i>
                    </p>
                    <p className="text-[16px] text-[#9F9F9F]">shop</p>
                    <p className="text-[20px]">
                        <i className="bi bi-chevron-right"></i>
                    </p>
                    <p className="text-[37px]">&#65372;</p>
                    <p className="text-[16px] "></p>
                </div>
            </nav>

            <section>
                <div className="w-[1241px] h-[730px] m-auto border my-16 flex justify-between ">
                    <div className="w-[76px] h-[416px] flex flex-col justify-between items-center">
                        {/* You can dynamically map the product images if you want */}
                        {Array(4).fill(0).map((_, index) => (
                            <div key={index} className="w-[76px] h-[80px] bg-[#FFF9E5]">
                                <Image
                                    src='{product.image}'
                                    alt='{product.name}'
                                    width={74}
                                    height={44}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-[481px] h-[500px]">
                        <div className="w-[423px ] h-[500px] bg-[#fff9e5]">
                            <Image
                                src='{product.image}'
                                alt='{product.name}'
                                width={74}
                                height={44}
                            />
                        </div>
                    </div>
                    <div className="w-[606px] h-[731px] capitalize">
                        <h2 className="text-[42px]">{product.name}</h2>
                        <h4 className="text-[24px] font-medium text-[#9f9f9f]">{product.price}</h4>
                        <h1 className="text-[#FFDA5B]">
                            <i className="bi bi-star-fill"></i>&#8200;&#8200;
                            <i className="bi bi-star-fill"></i>&#8200;&#8200;
                            <i className="bi bi-star-fill"></i>&#8200;&#8200;
                            <i className="bi bi-star-fill"></i>&#8200;&#8200;
                            <i className="bi bi-star-half"></i>{' '}
                            <span className="text-[30px] text-[#9F9F9F]">&#65372;</span>{' '}
                            <span className="text-[13px] text-[#9F9F9F]">5 customers review</span>
                        </h1>
                        <p className="text-[13px]">{product.product_description1}</p>
                        <p className="text-[13px]">{product.product_description2}</p>
                        <div className="w-[123px] h-[63px] mt-10">
                            <h5 className="text-[14px]">size</h5>
                            <div className="flex justify-between mt-6">
                                <div className="w-[30px] h-[30px] bg-[#FAF4F4] hover:bg-[#FBEBB5] flex justify-center items-center">L</div>
                                <div className="w-[30px] h-[30px] bg-[#FAF4F4] hover:bg-[#FBEBB5] flex justify-center items-center">XL</div>
                                <div className="w-[30px] h-[30px] bg-[#FAF4F4] hover:bg-[#FBEBB5] flex justify-center items-center">XS</div>
                            </div>
                        </div>
                        <div className="w-[123px] h-[63px] my-10">
                            <h5 className="text-[14px]">color</h5>
                            <div className="flex justify-between mt-4">
                                <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full flex justify-center items-center"></div>
                                <div className="w-[30px] h-[30px] bg-[#000000] rounded-full flex justify-center items-center"></div>
                                <div className="w-[30px] h-[30px] bg-[#CDBA7B] rounded-full flex justify-center items-center"></div>
                            </div>
                        </div>
                        <div className="my-8 flex items-center gap-4">
                            <div className="w-[123px] border border-black rounded-lg h-[64px] text-[16px] flex justify-between p-3 items-center">
                                <p>+</p>
                                <p>1</p>
                                <p>-</p>
                            </div>
                            <div className="w-[215px] h-[64px] capitalize flex justify-center items-center border border-black rounded-lg">
                                <h3 className="text-[20px]">add to cart</h3>
                            </div>
                        </div>
                        <div className="bg-black h-[1px] w-full opacity-30"></div>
                        <div className="capitalize text-[#9f9f9f]">
                            <p className="text-[#9f9f9f] mb-4">sku : {product.sku}</p>
                            <p className="text-[#9f9f9f] mb-4">category : {product.category}</p>
                            <p className="text-[#9f9f9f] mb-4">tags : {product.tags}</p>
                            <p className="text-[#9f9f9f] mb-4">share : <i className="bi bi-facebook"></i> &#8200;&#8200; <i className="bi bi-linkedin"></i> &#8200;&#8200; <i className="bi bi-twitter"></i></p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-[24px] text-[#9F9F9F] capitalize flex justify-center items-center gap-8">
                        <h2 className="text-black">description</h2>
                        <h2>additional information</h2>
                        <h2>reviews[5]</h2>
                    </div>
                    <p>{product.product_description1}</p>
                    <p>{product.product_description2}</p>
                    <div className="flex justify-center items-center gap-6">
                        <Image
                            src='{product.image}'
                            alt='{product.name}'
                            width={605}
                            height={348}
                        />
                        <Image
                            src='{product.image}'
                            alt='{product.name}'
                            width={605}
                            height={348}
                        />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-[36px] font-medium capitalize text-center mt-6 mb-3">
                    related products
                </h2>
                <div className="flex justify-center items-center gap-6 mt-5">
                    {/* Example related product */}
                    <div className="w-[287px] h-[372px]">
                        <Image
                            src="/images/modularsofa.png"
                            alt="Related Product"
                            width={400}
                            height={400}
                            className="h-[287px]"
                        />
                        <p className="text-[20px] text-[#9F9F9F]">Related Product</p>
                        <p className="text-[#9F9F9F]">Rs 22,000.00</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product_details;