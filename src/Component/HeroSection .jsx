import React from 'react';
import './Utility.css'
import BtnGetStart from './BtnGetStart';

const HeroSection = ({ reverse = false, title, subtitle, imageSrc ,imgealt,btncategory }) => {
    return (
        <section className="container bg-white  max-md:pb-10   ">
            <div className={`flex flex-col-reverse items-center gap-12 max-w-7xl mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`} >

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="  sora-regular tracking-tight leading-tight text-black">
                        {title}
                    </h1>
                    <h6 className=" sora-regular primary-text mt-4 text-lg max-w-md mx-auto md:mx-0">
                        {subtitle}
                    </h6>
                    <div className='mt-4 max-md:flex max-md:justify-center'>
                    <BtnGetStart category={btncategory} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative flex justify-center">
                    <img
                        src={imageSrc}
                        alt={imgealt}
                        className="w-full max-w-sm max-h-[543px] object-contain sm:max-w-md md:max-w-lg"
                    />

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
