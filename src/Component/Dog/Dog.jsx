import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../HeroSection '
import dogimg from '@assets/Images/dog.png'
import GetStart from '../GetStart'
import TestimonialSlider from '../TestimonialSlider'
import FAQAccordion from '../FAQAccordion'
import HowItWorks from '../HowItWorks'
import img1 from '@assets/Images/Featured-icon-1.png'
import img2 from '@assets/Images/feature-icon.png'
import img3 from '@assets/Images/Featured-icon-2.png'
import img4 from '@assets/Images/Featured-icon-3.png'
import useMeta from '../useMeta'


function Dog() {
    useMeta(
        " Dog Financing | Bring Home Your Dream Pet with Easy Payments",
        "Financing a new puppy just got easier. Lending Houz helps you bring home your dog with flexible pet financing options."
    )

    const steps = [
        {
            title: 'Choose Your Product',
            description: 'Choose a puppy from one of our trusted breeders or shelters.',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Apply in Minutes',
            description: 'Our simple application takes less than 5 minutes. Instant decisions available.',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Get Approved Instantly',
            description: 'We offer flexible financing options for all credit types even first time pet owners.',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Pay Over Time',
            description: 'Pick up your pup or arrange delivery. Your journey together starts today.',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];

    const stats = [
        { value: '50,000+', label: 'Happy Pet Owners' },
        { value: '1,200+', label: 'Verified Breeders' },
        { value: '100%', label: 'Secure & Transparent' },
        { value: '150+', label: 'Dog Breeds Financed' },
    ];

    const dogFaq = [
        {
            question: "What expenses can I finance?",
            answer: "Purchase price, initial vet check, vaccinations, and registration fees.",
        },
        {
            question: "Do you finance training or supplies?",
            answer: "No financing covers the dog and requires medical paperwork only.",
        },
        {
            question: "Is pet insurance required?",
            answer: "We highly recommend insurance, but don’t mandate it.",
        },
        {
            question: "Do you verify breeder licenses?",
            answer: "Yes—we approve only licensed, reputable breeders for your protection.",
        },
        {
            question: "Can I pay off early?",
            answer: "Yes—settle the balance anytime without penalty.",
        },
    ];

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
            <Header btncategory="Dog"  />

            {/* section 1 start  */}

            <section className='max-md:px-2 pb-5 mb-2 px-10'>
                <HeroSection
                    title="Get Your Dream Dog with Easy Financing"
                    subtitle="Affordable Monthly Plans | Fast Approval | No Hidden Fees"
                    imageSrc={dogimg}
                    imgealt="herosection image"
                    btncategory="Dog" 
                />

            </section>

            {/* section 1 end  */}

            {/* section 2 start  */}

            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle="How Financing Works" bgColor="bg-gray-100" />
            </section>

            {/* section 2 end  */}

            {/* section 3 start  */}

            <div className="bg-white max-md:px-2 px-10 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl   sora-regular text-gray-900 mb-4">Why Choose Us?</h1>
                        <h6 className="text-lg text-blue-600 mb-8">
                            We’re more than just a financing option we’re your trusted partner in bringing home a healthy, happy dog. Our mission is to make pet ownership accessible, ethical, and stress free from day one.
                        </h6>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white shadow-md rounded-lg">
                                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* section 3 end   */}

            {/* section 4 start  */}

            <section className='max-md:px-2 px-10' >
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={dogFaq} />
            </section>

            {/* section 4 end  */}

            {/* section 5 start */}

            <section className='max-md:px-2 pt-10 px-10' >
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </section>

            {/* section 5 end */}

            {/* section 6 start  */}

            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Start Your Dog Parenting Journey Today"
                    subtitle="Apply now and bring home your pup as soon as today."
                    btncategory="Dog" 
                />
            </section>

            {/* section 6 end */}

            <Footer />
        </>
    )
}

export default Dog