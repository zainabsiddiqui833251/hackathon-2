import React from 'react'
import Image from 'next/image'

const Home2 = () => {
    return (
        <section className='bg-[#faf4f4] w-full h-[672px] flex justify-end gap-8 text-left items-center pr-6'>
            <div className='w-[605px] h-[562px]  flex flex-col pt-10 pl-40'>
                <div>
                    <Image src='/images/table.png' alt='' width={500} height={400} className=' h-[400px]'></Image>
                </div>
                <div className='text-left'>
                    <h1 className='text-[36px] font-medium capitalize'>side table</h1>
                    <button className='h-[36px] text-[24px] font-meedium border-b-2 border-black capitalize flex justify-center items-center'>shop now</button>
                </div>
            </div>
            <div className='w-[605px] h-[562px]  flex flex-col pt-10 pl-40'>
                <div>
                    <Image src='/images/sofa.png' alt='' width={500} height={400} className=' h-[400px]'></Image>
                </div>
                <div>
                    <h1 className='text-[36px] font-medium capitalize'>side table</h1>
                    <button className='h-[36px] text-[24px] font-meedium border-b-2 border-black capitalize flex justify-center items-center'>shop now</button>
                </div>
            </div>
        </section>
    )
}

export default Home2