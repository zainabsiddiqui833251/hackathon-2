import React from 'react';
import Image from 'next/image';

const Instagram = () => {
    return (
        <section className="w-full text-center capitalize h-[456px] bg-[#FAF4F4] relative">
            {/* Background Image */}
            <Image
                src="/images/Rectangle 17.png"
                alt="Instagram Background"
                width={1440}
                height={456}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Content Div */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black z-10">
                <h2 className="text-[60px] font-bold">our instagram</h2>
                <p className="text-[20px] my-6">Follow our store on Instagram</p>
                <button
                    className="w-[255px] h-[64px] text-[20px] border bg-[#FAF4F4] capitalize rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.2)]"
                >
                    follow us
                </button>
            </div>
        </section>
    );
};

export default Instagram;

