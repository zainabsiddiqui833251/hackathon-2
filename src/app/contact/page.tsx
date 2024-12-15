import React from 'react'

const Contact = () => {
    return (
        <main>
            <header className="shop w-full h-[316px] bg-no-repeat bg-cover flex flex-col justify-center items-center"
            >
                <img src="/images/Meubel House_Logos-05.png" alt="Website Logo" width={77} height={77} />
                <h1 className='text-[48px] font-medium'>Contact</h1>
                <h3 className='text-[16px] font-medium'>Home <i className='bi bi-chevron-right'></i> <span className='font-normal'>Contact</span></h3>
            </header>

            <div className='mt-28 w-[644px] m-auto text-center capitalize'>
                <h3 className='text-[36px] font-semibold'>get in touch with us</h3>
                <p className='text-[#9F9F9F] text-[16px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>


            <div className='flex justify-center gap-20'>
                <div className='w-[393px] p-24 capitalize text-[16px]'>
                    <div className='flex justify-between items-center gap-6 mb-8'>
                        <i className='bi bi-geo-alt-fill text-[25px]'></i>
                        <div>
                            <h3 className='text-[24px] font-medium'>address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center  gap-6 mb-8'>
                        <i className='bi bi-telephone-fill text-[25px] '></i>
                        <div>
                            <h3 className='text-[24px] font-medium w-[212px]'>phone</h3>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-6 '>
                        <i className='bi bi-clock-fill text-[25px]'></i>
                        <div>
                            <h3 className='text-[24px] font-medium w-[212px]'>working time</h3>
                            <p>Monday-Friday: 9:00 - 22:00
                            </p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                <div className='w-[635px] py-16'>
                    <form action="post">
                        <label htmlFor="name">
                            <p className='mb-4 text-[16px] capitalize font-medium'>your name</p>
                            <input type="text" id="name" name="name" required placeholder='Abc' className='w-[527px] mb-4 h-[75px] p-6 border rounded-lg' />
                        </label>

                        <label htmlFor="email">
                            <p className='mb-4 text-[16px] capitalize font-medium'>email address</p>
                            <input type="email" id="email" name="email" placeholder='Abc@def.com' required className='w-[527px] mb-4 h-[75px] p-6 border rounded-lg' />
                        </label>

                        <label htmlFor="subject">
                            <p className='mb-4 text-[16px] capitalize font-medium'>subject</p>
                            <input type="text" id="subject" name="subject" placeholder='This is optional' className='w-[527px] mb-4 h-[75px] p-6 border rounded-lg' />
                        </label>

                        <label htmlFor="message">
                            <p className='mb-4 text-[16px] capitalize font-medium'>message</p>
                            <textarea id="message" name="message" required placeholder="Hi! I&apos;d like to ask about " className='w-[527px] mb-4 h-[120px] p-6 border rounded-lg' rows={4}></textarea>
                        </label>
                        <button className='w-[237px] h-[48px] text-[16px] flex justify-center items-center capitalize border-black border-2 rounded-lg'>submit</button>
                    </form>
                </div>
            </div>
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

export default Contact