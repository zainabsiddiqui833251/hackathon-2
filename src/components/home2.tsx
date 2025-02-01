import React from 'react'
import Image from 'next/image'

const Home2 = () => {
    return (
        <section className='bg-[#faf4f4] w-full flex-wrap lg:h-[672px] h-auto p-8 lg:mt-[680px] mt-[500px] flex justify-end gap-8 text-left items-center pr-6'>
            <div className='lg:w-[605px] lg:h-[562px] w-auto h-auto flex flex-col pt-10 lg:pl-40 justify-center items-center'>
                <div>
                    <Image src='/images/table.png' alt='' width={500} height={400} className=' lg:h-[400px] lg:w-[500px] h-72 w-80'></Image>
                </div>
                <div className='text-left'>
                    <h1 className='text-lg lg:text-[36px] font-medium capitalize'>side table</h1>
                    <button className='h-[36px] text-sm lg:text-[24px] font-meedium border-b-2 border-black capitalize flex justify-center items-center'>shop now</button>
                </div>
            </div>
            <div className='lg:w-[605px] lg:h-[562px] w-auto h-auto flex flex-col pt-10 lg:pl-40 justify-center items-center'>
                <div >
                    <Image src='/images/sofa.png' alt='' width={500} height={400} className=' lg:h-[400px] lg:w-[500px] h-72 w-80'></Image>
                </div>
                <div>
                    <h1 className='text-lg lg:text-[36px] font-medium capitalize'>side table</h1>
                    <button className='h-[36px] text-sm lg:text-[24px] font-meedium border-b-2 border-black capitalize flex justify-center items-center'>shop now</button>
                </div>
            </div>
        </section>
    )
}

export default Home2