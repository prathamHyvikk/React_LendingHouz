import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import BtnGetStart from '../BtnGetStart'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import gooddog from '@assets/Images/good-dog.png'
import HeroSection from '../HeroSection '
import petmask from '@assets/Images/petmask.png'
import petmask1 from '@assets/Images/petmask-1.png'
import mask1 from '@assets/Images/mask-group.png'
import mask2 from '@assets/Images/Mask-group-(1).png'
import mask3 from '@assets/Images/Mask-group-(2).png'
import mask4 from '@assets/Images/Mask-group-(3).png'
import img1 from '@assets/Images/pet-Frame.png'
import img2 from '@assets/Images/pet-Frame-1.png'
import img3 from '@assets/Images/pet-Frame-2.png'
import img4 from '@assets/Images/pet-Frame-3.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'



function Pet() {

    useMeta(
        " Pet Financing | Make Pet Ownership Affordable",
        "Want a new pet? Lending Houz offers financing options to help you cover the cost of pet adoption, accessories and care."
    )

    const stats = [
        { value: '5000+', label: 'Happy Pet Owners' },
        { value: '95%', label: 'Approval Rate' },
        { value: '60', label: 'Sec Application Time' },
        { value: '100%', label: 'Shelter Partners' },
    ];

    const pets = [
        {
            src: mask1,
            alt: 'Happy Dog',
        },
        {
            src: mask2,
            alt: 'Cute Rabbit',
        },
        {
            src: mask3,
            alt: 'Curious Hamster',
        },
        {
            src: mask4,
            alt: 'Fluffy Cat',
        },
    ];
    const steps = [
        {
            title: 'Apply Online',
            description: 'Submit your application in minutes.',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Get Approved Fast',
            description: 'Instant approval or within 24 hours.',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Choose Your Pet',
            description: 'Shop from our trusted breeder & shelter partners.',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Take Them Home',
            description: 'Enjoy your new best friend, stress-free.',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];

    const PetFaq = [
        {
            question: "Which pets qualify?",
            answer: "Puppies, kittens, and select exotics from licensed breeders.",
        },
        {
            question: "Are vet exams covered?",
            answer: "Financing covers the initial wellness exam and vaccinations.",
        },
        {
            question: "Do you check breeder licensing?",
            answer: "Yes—we verify every breeder to protect buyers.",
        },
        {
            question: "Can I include microchipping costs?",
            answer: "Yes—add microchipping and registration fees to the loan.",
        },
        {
            question: "Is pet insurance required?",
            answer: "Insurance is optional but strongly recommended.",
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

    const options = [
        "Trusted by Thousands of Pet Owners Join a community of happy pet parents who’ve financed with confidence.",
        "Work Only With Reputable Breeders & Shelters We partner exclusively with responsible, humane sources.",
        "Instant Approvals Quick and secure application process with real-time decisions.",
        "Flexible Payment Plans Choose a monthly plan that fits your budget—with no hidden fees.",
        "All Breeds & Pets Welcome From purebreds to rescues, we support financing for all types of pets.",
    ];

    return (
        <>
            <Header />


            <section className='max-md:px-2 pb-10  px-10'>
                <HeroSection
                    title="Bring Home Your Dream Pet With Easy Financing"
                    subtitle="Flexible, Fast & Friendly Pet Financing Options Whether it’s a playful puppy or a cuddly kitten, our pet financing plans help you welcome your furry friend home without breaking the bank."
                    imageSrc={gooddog}
                    imgealt="herosection image"
                />

            </section>

            <section className=" container pb-10  flex items-center justify-between p-4">
                <div className="w-full rounded-lg flex flex-col justify-between gap-10 lg:flex-row items-center">
                    <div className="grid lg:w-1/2 items-center grid-cols-2 gap-4">
                        {pets.map((pet, index) => (
                            <img
                                key={index}
                                src={pet.src}
                                alt={pet.alt}
                                className="  w-[270px]    object-cover rounded-xl"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col lg:ml-10">
                        <h1 className="text-4xl sora-regular text-gray-800">Finance a Wide Range of Medical Equipment</h1>
                        <ul className="mt-4  ">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 primary-text sora-regular text-base"
                                >
                                    <svg
                                        className="w-5 h-5 min-w-[20px] min-h-[20px] mt-1"
                                        fill="black"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="10" fill="black" />
                                        <path
                                            d="M8 12l4 4 6-6"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>


            <section className='max-md:px-2 pb-10 px-10'>
                <HowItWorks steps={steps} maintitle="How It Works" bgColor="bg-gray-100" />
            </section>

            <section className="max-md:px-2 px-10 py-4 container">
                <div className="grid md:grid-cols-2 mt-4 gap-10 items-start">
                    <div>
                        <h1 className=" sora-regular  mb-4">How It Works</h1>
                        <p className="text-gray-600 sora-regular leading-relaxed">
                            At Petopia, we've helped over 7,500 pets find loving homes, with a 98% satisfaction rate from happy adopters.
                            Partnering with 500+ trusted shelters and rescues, we ensure every match is responsible and compassionate
                            often within just 24 hours.
                        </p>
                    </div>
                    <div className="  grid grid-cols-2 gap-8">
                        {stats.map((item, index) => (
                            <div className='flex flex-col lg:items-end' key={index}>
                                <h1 className="  sora-regular text-gray-900">{item.value}</h1>
                                <h6 className="primary-text">{item.label}</h6>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-4">
                    <img
                        src={petmask}
                        alt="Pet and human"
                        className="rounded-xl object-cover h-48 md:h-60 w-full"
                    />
                    <img
                        src={petmask1}
                        alt="Happy dog"
                        className="rounded-xl object-cover h-48 md:h-60 w-full"
                    />
                </div>
            </section>

            <div className="container max-md:px-2 px-10">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={PetFaq} />
            </div>


            <div className="container max-md:px-2 px-10">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular leading-10'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>


            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Your New Best Friend Is Waiting"
                    subtitle="Start your financing application today and bring your new companion home."
                />
            </section>

            <Footer />
        </>
    )
}

export default Pet