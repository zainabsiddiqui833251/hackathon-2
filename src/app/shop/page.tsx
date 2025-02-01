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
    const fetchProducts = async () => {
      const query = '*[_type == "product"]';
      const result: Product[] = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

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
      <div className="border my-10 lg:px-20 p-5 lg:p-0 w-full h-auto lg:h-[100px] bg-[#faf4f4] flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex gap-8 items-center justify-center">
            <p className="flex capitalize w-[85px] text-[20px] justify-between">
              <Image src="/images/system-uicons_filtering.png" alt="filter icon" width={25} height={25} />
              filter
            </p>
            <Image src="/images/ci_grid-big-round.png" alt="grid view" width={28} height={28} />
            <Image src="/images/bi_view-list.png" alt="list view" width={24} height={24} />
          </div>
          <div className="lg:w-[237px] h-[37px] lg:ml-6 mt-4 lg:mt-0 flex justify-between items-center">
            <h1 className="text-[37px] lg:block hidden">&#65372;</h1>
            <p className="text-[16px] text-center">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of{' '}
              {products.length} results
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 m-auto w-fit lg:justify-end text-sm">
          <div className="flex justify-between items-center gap-3 lg:w-[126px] w-fit h-[55px]">
            <h3 className="lg:text-[20px]">Show</h3>
            <div className="w-12 h-12 lg:w-[55px] lg:h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center lg:text-[20px]">
              {productsPerPage}
            </div>
          </div>
          <div className="flex justify-between gap-3 items-center lg:w-[288px] w-fit h-[55px]">
            <h3 className="lg:text-[20px]">Sort By</h3>
            <div className="lg:w-[188px] lg:h-[55px] w-24 h-12 bg-white text-[#9F9F9F] flex justify-center items-center lg:text-[20px]">
              Default
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="lg:w-[1242px]  w-screen m-auto flex flex-wrap justify-between items-center">
        {currentProducts.map(({ _id, name, imagePath, price }) => (
          <div key={_id} className="card m-5 lg:m-0 p-5 lg:p-0 w-[287px] h-[397px]">
            <Link href={`/shop/${_id}`} passHref>
              <div className="w-[287px] h-[287px] flex justify-center items-center">
                <Image
                  src={imagePath}
                  alt={name}
                  width={280}
                  height={280}
                  className="f"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[16px]">{name}</h3>
                <h4 className="text-[24px] font-medium">{price} $</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className='lg:w-[392px] p-5 lg:p-0 w-screen h-[60px] flex  justify-between items-center m-auto '>
        <button
          onClick={() => setCurrentPage(1)}  // Set page to 1 when clicked
          className={`w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-md text-sm lg:text-[20px] ${currentPage === 1 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
            }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}  // Set page to 2 when clicked
          className={`w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-md text-sm lg:text-[20px] ${currentPage === 2 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
            }`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage(3)}  // Set page to 3 when clicked
          className={`w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-md text-sm lg:text-[20px] ${currentPage === 3 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
            }`}
        >
          3
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}  // Go to the next page when clicked
          className={`lg:w-[98px] lg:h-[60px] w-20 h-12 rounded-md text-sm lg:text-[20px] ${currentPage === totalPages ? 'bg-[#FFF9E5]' : 'bg-[#FFF9E5]'
            }`}
          disabled={currentPage === totalPages}  // Disable if it's the last page
        >
          Next
        </button>
      </div>


      {/* Footer Section */}
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

export default Shop;
