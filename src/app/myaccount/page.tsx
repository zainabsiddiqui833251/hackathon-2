import React from 'react'
import Image from 'next/image'

const Account = () => {
    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center"
            >
                <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>My Account</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>My Account</span></h3>
            </header>


            <section className='w-full h-[760px] capitalize flex justify-center gap-4 items-center'>
                <div className='w-[608px] h-[630px] flex flex-col justify-center px-20'>
                    <h2 className='mb-4 text-[36px] font-semibold'>log in</h2>
                    <p className='mb-4'>Username or email address</p>
                    <input type="text" className='w-[423px] mb-4 h-[75px] rounded-lg border' />
                    <p className='mb-4'>password</p>
                    <input type="text" className='w-[423px] mb-4 h-[75px] rounded-lg border' /> <br />
                    <label className='text-[16px] mb-4 flex justify-start gap-5 items-center'>
                        <input type="checkbox" id="agreeCheckbox" className='w-[24px] h-[24px]' />
                        remember me
                    </label>
                    <div className='flex justify-start  gap-6 items-center'>
                        <button className='w-[215px] rounded-lg h-[64px] border border-black capitalize text-[20px] flex justify-center items-center'>log in</button>
                        <p>lost your password ?</p>
                    </div>
                </div>

                <div className='w-[608px] h-[630px] flex flex-col justify-center px-20'>
                    <h2 className='mb-4 text-[36px] font-semibold'>register</h2>
                    <p className='mb-4'>email address</p>
                    <input type="text" className='w-[423px] mb-4 h-[75px] rounded-lg border' />
                    <p className='mb-4 text-[16px]'> A link to set a new password will be sent to your email address.</p>
                    <p className='mb-4 text-[16px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>. </p>
                    <button className='w-[215px] rounded-lg h-[64px] border border-black flex justify-center text-[20px] capitalize mt-10 items-center'>register</button>
                </div>
            </section>
            <div className='w-full h-[300px] flex justify-center items-center bg-[#faf4f4] mb-20 gap-10'>
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

export default Account