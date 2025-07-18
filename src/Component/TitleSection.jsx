import React from 'react'
import './Utility.css'

function TitleSection({ title, subtitle, description }) {
    return (
        <div className='px-2'>
            <section className="bg-[#F0F6FF]  container py-16 text-white rounded-xl mx-4">
                <div className="  mx-auto text-center px-4">
                    <h1 className="sora-semibold text-black  sora-regular mb-4">{title}</h1>
                    <h6 className="sora-regular primary-text mb-6">{subtitle}</h6>
                    <p className="text-sm text-black md:text-base max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
            </section>
        </div>

    )
}

export default TitleSection
