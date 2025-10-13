import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import TitleSection from '../TitleSection'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function Faqs() {
    useMeta(
        " FAQs | Lending Houz Financing Questions Answered",
        "Find answers to your most common questions about Lending Houz financing—application process, payment plans, eligibility, and more."
    )
    const financingFaqs = [
        {
            question: "What exactly is a hard-money loan?",
            answer: "The property or asset you buy or refinance secures a hard-money loan, not your credit score. Because the collateral bears most of the risk, lenders approve and fund these loans far faster than traditional banks.",
        },
        {
            question: " How fast can I get funded after applying?",
            answer: " Many borrowers receive an approval decision within a few days, and funds are typically released as soon as closing documents are signed.",
        },
        {
            question: " Do I need perfect credit to qualify?",
            answer: "No. We review your complete financial profile, yet we base approval mainly on the collateral’s value and exit strategy, so less-than-ideal credit won’t automatically disqualify you.",
        },
        {
            question: "What kinds of properties or assets can I use as collateral?",
            answer: "We consider single-family flips, multifamily properties, mixed-use buildings, light-commercial real estate, and select non-real estate assets on a case-by-case basis. If you’re unsure, contact us, and we’ll evaluate your deal.",
        },
        {
            question: "What are the typical loan terms and interest rates? ",
            answer: "Loan terms generally range from 6 to 24 months. Rates are higher than conventional mortgages to reflect the speed and flexibility provided, and they vary based on loan-to-value (LTV), asset type, and experience level.",
        },
        {
            question: "Are there pre-payment penalties if I repay early? ",
            answer: " No. You can pay off the balance without penalty, and many clients do so once they sell or refinance the property.",
        },
        {
            question: "Which documents will I need for the application? ",
            answer: " If applicable, expect to provide a government-issued ID, the purchase contract or deed, an introductory financial statement or proof of funds, and a rehab budget. A loan officer will advise if anything else is needed.",
        },
        {
            question: "What loan amounts do you offer? ",
            answer: " Based on the value of the collateral and your experience, we can finance everything from smaller bridge deals to multi-million-dollar projects.",
        },
        {
            question: "  Do you lend outside of Texas?",
            answer: " Yes. Although our headquarters are in Houston, we fund projects nationwide in multiple states.",
        },
        {
            question: "How do I start the process? ",
            answer: "Submit our short online application or call the lending team to discuss your project. We’ll guide you through every step—from underwriting to closing.",
        },
    ];


    return (
        <>
            <Header />
            <TitleSection
                title="Frequently Ask Questions"
            />
            <div className="container px-2">
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={financingFaqs} />
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
