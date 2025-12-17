import React from 'react'
import './Utility.css'

function WhyWeChoose() {
    return (
        <section className=" container flex flex-col items-center justify-center  px-2 py-10">
            <h1 className=" sora-regular mb-10">Why Choose Us?</h1>
            <div className="flex flex-wrap justify-evenly w-full gap-6">
                <div className="bg-white relative w-[70%] md:max-w-[266px] p-6 rounded-lg shadow-md  text-center">
                    <div className="primary-bg absolute top-0 -left-10 text-white  w-10 h-10 flex items-center justify-center mb-4">
                        <span className="text-xl sora-bold">01</span>
                    </div>
                    <h2 className="text-xl sora-semibold mb-2">Choose Your Equipment</h2>
                    <p className="text-gray-600">Work with your preferred dealer or let us connect you.</p>
                </div>
                <div className="bg-white relative w-[70%] md:max-w-[266px] p-6 rounded-lg shadow-md  text-center">
                    <div className="primary-bg absolute top-0 -left-10 text-white   w-10 h-10 flex items-center justify-center mb-4">
                        <span className="text-xl sora-bold">02</span>
                    </div>
                    <h2 className="text-xl sora-semibold mb-2">Apply Online</h2>
                    <p className="text-gray-600">Quick and secure application with instant pre-approval.</p>
                </div>
                <div className="bg-white relative w-[70%] md:max-w-[266px] p-6 rounded-lg shadow-md  text-center">
                    <div className="primary-bg absolute top-0 -left-10 text-white   w-10 h-10 flex items-center justify-center mb-4">
                        <span className="text-xl sora-bold">03</span>
                    </div>
                    <h2 className="text-xl sora-semibold mb-2">Get Funded & Grow</h2>
                    <p className="text-gray-600">Take delivery and put your new tools to work.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyWeChoose

