import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center"
            >
                <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>Cart</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>Cart</span></h3>
            </header>



            <section className='w-[86%] m-auto flex justify-between mt-20'>
                <div className='w-[66%] '>
                    <div className='h-[55px] flex bg-[#FFF9E5] justify-between items-center capitalize'>
                        <div className='w-[55%] '>
                            <ul className='flex justify-around items-center'>
                                <li>product</li>
                                <li>price</li>
                            </ul>
                        </div>
                        <div className='w-[45%] '>
                            <ul className='flex justify-around items-center'>
                                <li>quantity</li>
                                <li>subtotal</li>
                            </ul>
                        </div>
                    </div>


                    <div className='mt-6 flex justify-between gap-6 capitalize items-center text-[16px] text-[#9F9F9F]'>
                        <div className='w-[106px] h-[106px] bg-[#FBEBB5]'>
                            <Image src='/images/Asgaard sofa 1.png' alt='' width={106} height={106}></Image>
                        </div>
                        <div>
                            <p>agaard sofa</p>
                        </div>
                        <div>
                            <p>rs 250,000.00</p>
                        </div>
                        <div>
                            <p className='text-black'>1</p>
                        </div>
                        <div>
                            <p className='text-black'>rs 250,000.00</p>
                        </div>
                        <i className='bi bi-trash3-fill text-[#fbebb5] text-[32px]'></i>
                    </div>
                </div>

                <div className='w-[32%] bg-[#FFF9E5]  px-16 pb-12 pt-6 capitalize'>
                    <h2 className='text-[32px] font-semibold text-center mb-16'>cart totals </h2>
                    <div className='flex justify-between text-[16px] items-center mb-6'>
                        <h4 className='font-medium'>subtotal</h4>
                        <p className='text-[#9F9F9F]'>rs 250,000.00</p>
                    </div>
                    <div className='flex justify-between text-[16px] items-center mb-8'>
                        <h4 className='font-medium'>total</h4>
                        <h4 className='text-[20px] font-medium text-[#B88E2F]'>rs 250,000.00</h4>
                    </div>
                    <Link href='/checkout'><button className='w-[222px] h-[58px] border border-black text-[20px] rounded-lg block m-auto flex justify-center items-center capitalize '>check out</button></Link>
                </div>
            </section>

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

export default Cart