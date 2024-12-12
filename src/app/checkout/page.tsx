import React from 'react'
import Image from 'next/image'

const Checkout = () => {
    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center"
            >
                <Image src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>Checkout</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>Checkout</span></h3>
            </header>


            <section className=' flex justify-center gap-6 flex-wrap capitalize '>
                <div className='w-[600px]  px-16 py-16'>
                    <h2 className='text-[36px] font-semibold mb-8'>Billing Details</h2>
                    <div className='flex justify-between items-center w-[453px] mb-4'>
                        <label htmlFor="fname" >
                            <p className='text-[16px]'>First Name</p> <br />
                            <input type="text" id="fname" name="fname" required className='w-[211px] h-[75px] p-6 border rounded-lg' />
                        </label>
                        <label htmlFor="lname">
                            <p className='text-[16px]'>Last Name</p> <br />
                            <input type="text" id="lname" name="lname" required className='w-[211px] h-[75px] p-6 border rounded-lg' />
                        </label>
                    </div>
                    <label htmlFor="companyname">
                        <p className='text-[16px]'>Company Name (optional)</p> <br />
                        <input type="text" id="companyname" name="companyname" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="country">
                        <p className='text-[16px]'>country / region</p> <br />
                        <input type="text" id="country" name="country" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="street">
                        <p className='text-[16px]'>street address</p> <br />
                        <input type="text" id="street" name="street" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="town">
                        <p className='text-[16px]'>town / city</p> <br />
                        <input type="text" id="town" name="town" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="province">
                        <p className='text-[16px]'>province</p> <br />
                        <input type="text" id="province" name="province" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="zipcode">
                        <p className='text-[16px]'>ZIP code</p> <br />
                        <input type="text" id="zipcode" name="zipcode" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="phone">
                        <p className='text-[16px]'>phone </p> <br />
                        <input type="text" id="phone" name="phone" className='w-[453px] mb-4 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="email">
                        <p className='text-[16px]'>email address</p> <br />
                        <input type="text" id="email" name="email" className='w-[453px] mb-16 h-[75px] p-6 border rounded-lg' />
                    </label>
                    <label htmlFor="info">
                        <input type="text" id="info" name="info" placeholder='Additional Information' className='w-[453px] h-[75px] p-6 border rounded-lg' />
                    </label>
                </div>


                <div className='w-[600px] capitalize px-16 py-16'>
                    <div className='flex justify-between text-[24px] font-medium items-center mb-4'>
                        <h4>product</h4>
                        <h4>subtotal</h4>
                    </div >
                    <div className='flex justify-between items-center mb-4 text-[16px]'>
                        <p className='text-[#9F9F9F]'>asgaard sofa <span className='lowercase text-black'> x 1</span></p>
                        <p>rs 250,000.00</p>
                    </div >
                    <div className='flex justify-between items-center mb-4 text-[16px]'>
                        <p>subtotal</p>
                        <p>rs 250,000.00</p>
                    </div>
                    <div className='flex justify-between items-center mb-6'>
                        <p>total</p>
                        <h4 className='text-[24px] font-bold text-[#B88E2F]'>rs 250,000.00</h4>
                    </div>
                    <hr className='mb-6' />
                    <label>
                        <input type="radio" id="singleRadio" name="choice" className='mr-3 mb-4 bg-black text-black checked' />
                        direct bank transfer
                    </label>
                    <p className='mb-4 text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <label className='text-[#9F9F9F]'>
                        <input type="radio" id="singleRadio" name="choice" className='mr-3 mb-4 text-[#9F9F9F] disabled' />
                        direct bank transfer
                    </label> <br />
                    <label className='text-[#9F9F9F]'>
                        <input type="radio" id="singleRadio" name="choice" className='mr-3 mb-4 text-[#9F9F9F] disabled' />
                        cash on delivery
                    </label>
                    <p className='mb-4 '>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button className='text-[20px] w-[318px] capitalize h-[64px] border rounded-lg block m-auto border-black flex justify-center items-center'>place order</button>
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

export default Checkout