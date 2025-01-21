'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '../../sanity/lib/client'; // Import your sanity client
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const query = '*[_type == "product"]';
      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <main>
      {/* Header Section */}
      <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
        <h1 className="text-[48px] font-medium">Shop</h1>
        <h3 className="text-[16px] font-medium">
          Home <i className="bi bi-chevron-right"></i> <span className="font-normal">Shop</span>
        </h3>
      </header>

      {/* Filter Section */}
      <div className="border my-10 px-20 w-full h-[100px] bg-[#faf4f4] flex justify-between items-center">
        <div className="flex justify-center items-center">
          <div className="flex gap-8 items-center">
            <p className="flex capitalize w-[85px] text-[20px] justify-between">
              <Image src="/images/system-uicons_filtering.png" alt="" width={25} height={25} />
              filter
            </p>
            <Image src="/images/ci_grid-big-round.png" alt="" width={28} height={28}></Image>
            <Image src="/images/bi_view-list.png" alt="" width={24} height={24}></Image>
          </div>
          <div className="w-[237px] h-[37px] ml-6 flex justify-between items-center">
            <h1 className="text-[37px]">&#65372;</h1>
            <p className="text-[16px]">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of{' '}
              {products.length} results
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-between items-center w-[126px] h-[55px]">
            <h3 className="text-[20px]">Show</h3>
            <div className="w-[55px] h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center text-[20px]">
              {productsPerPage}
            </div>
          </div>
          <div className="flex justify-between items-center w-[288px] h-[55px]">
            <h3 className="text-[20px]">Sort By</h3>
            <div className="w-[188px] h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center text-[20px]">
              Default
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-[1242px] m-auto flex flex-wrap justify-between items-center">
        {currentProducts.map((product) => (
          <div key={product._id} className="card w-[287px] h-[397px]">
            <Link href={`/shop/${product._id}`}>
              <div className="w-[287px] h-[287px] flex justify-center items-center">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="f"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[16px]">{product.name}</h3>
                <h4 className="text-[24px] font-medium">{product.price} $</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="w-[392px] h-[60px] flex justify-between items-center m-auto mt-10">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            className={`w-[60px] h-[60px] rounded-md text-[20px] ${
              currentPage === page + 1 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>

      {/* Footer Section */}
      <div className="w-full h-[300px] flex justify-center items-center bg-[#faf4f4] my-20 gap-10">
        <div className="w-[376px] h-[108px] flex flex-col">
          <h1 className="font-medium text-[32px]">Free Delivery</h1>
          <p className="text-[20px] text-[#9F9F9F]">For all orders over $50, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[376px] h-[108px] flex flex-col">
          <h1 className="font-medium text-[32px]">90 Days Return</h1>
          <p className="text-[20px] text-[#9F9F9F]">If goods have problems, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[376px] h-[108px] flex flex-col">
          <h1 className="font-medium text-[32px]">Secure Payment</h1>
          <p className="text-[20px] text-[#9F9F9F]">100% secure payment, consectetur adipiscing elit.</p>
        </div>
      </div>
    </main>
  );
};

export default Shop;
