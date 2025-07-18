import React from 'react'
import '../Utility.css'
import TitleSection from '../TitleSection'
import Header from '../Header'
import Footer from '../Footer'
import TestimonialSlider from '../TestimonialSlider'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function Testimonial() {
    useMeta (
        "Customer Testimonials | Why People Love Lending Houz",
        " Hear from real customers who used Lending Houz to finance electronics, tools, pets and more. Fast service. Friendly support. Flexible terms."
    )
     const testimonialsData = [
        {
            text:
                "NexCash has transformed the way I manage my personal finances. The wallet is secure, and I love the real-time notifications.",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            text:
                "As a small business owner, NexCash Business Suite has been a game-changer. The invoicing and analytics tools save me so much time!",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            text:
                "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/46.jpg",
        },
        {
            text:
                "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/46.jpg",
        },
        {
            text:
                "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/46.jpg",
        },
        {
            text:
                "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/46.jpg",
        },
        {
            text:
                "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
            name: "Jane D",
            title: "Business Owner",
            image: "https://randomuser.me/api/portraits/women/46.jpg",
        },
    ];
    return (
        <>
            <Header />
            <TitleSection
                title="What Our Customers Say"
                subtitle="Discover how nexPay is transforming the way people manage their money with real stories from satisfied users"

            />
            <div className="container pt-10 max-md:px-2 px-10">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>


            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Call to Action "
                    subtitle="Get Pre-Approved Today — No Credit Impact"
                />
            </section>

            <Footer />
        </>
    )
}

export default Testimonial
