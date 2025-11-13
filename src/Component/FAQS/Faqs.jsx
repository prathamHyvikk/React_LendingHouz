import React, { useEffect, useState } from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import TitleSection from '../TitleSection'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import GetStart from '../GetStart'
import useMeta from '../useMeta'
import axios from 'axios'


function Faqs() {
    useMeta(
        " FAQs | Lending Houz Financing Questions Answered",
        "Find answers to your most common questions about Lending Houz financing—application process, payment plans, eligibility, and more."
    )
    const [financingFaqs, setFinancingFaqs] = useState([])

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const { data } = await axios.get('/data/faqs.json')
                setFinancingFaqs(data)
            } catch (error) {
                console.error('Failed to load FAQs:', error)
            }
        }

        fetchFaqs()
    }, [])


    return (
        <>
            <Header />
            <TitleSection
                title="Frequently Ask Questions"
            />
            <div className="container px-2">
                <FAQAccordion title={""} faqs={financingFaqs} />
            </div>


            <section className='px-2' >
                <GetStart
                    title="Call to Action "
                    subtitle="Get Pre-Approved Today — No Credit Impact"
                />
            </section>
            <Footer />
        </>
    )
}

export default Faqs
