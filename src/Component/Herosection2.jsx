import React from 'react'
import './Utility.css'
import BtnGetStart from './BtnGetStart'

function Herosection2({title, subtitle, description}) {
    return (
        <section className="w-full container to-white text-center md:py-16   px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="sora-regular mb-4 leading-tight">
                    {title}
                </h1>
                <h6 className="sora-regular font-medium mb-6">
                    {subtitle}
                </h6>    
                <p className="text-sm md:text-base primary-text font-medium mb-8 max-w-3xl mx-auto">
                    {description}
                </p>
                <div className='flex justify-center'>
                <BtnGetStart/>
                </div>
                 
            </div>
        </section>

    )
}

export default Herosection2
