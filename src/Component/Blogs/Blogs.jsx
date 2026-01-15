import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img1 from "/assets/Images/home-loan-CU00emLr.jpg";
import img2 from "/assets/Images/first-C0aHBhUb.jpg";
import img3 from "/assets/Images/finance-bJZ9iR-Z.jpg";

import { Link } from 'react-router-dom';


function Blogs() {

    const blogPosts = [
        {
            category: "Mortgage Tips",
            title: "How to Get Approved for a Home Loan Faster",
            desc: "Learn simple strategies to speed up your mortgage approval process.",
            img: img1,

        },
        {
            category: "Home Buying",
            title: "First-Time Home Buyer Checklist",
            desc: "Everything you need to know before buying your first home.",
            img: img2,

        },
        {
            category: "Refinancing",
            title: "When Is the Right Time to Refinance Your Mortgage?",
            desc: "Discover the key signs that refinancing could save you money.",
            img: img3,

        },
    ];

    return (
        <>
            <Header />

            {/* Blog Section */}
            <section className="w-full container py-16 px-4 md:px-10 lg:px-20 bg-white">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Latest Blogs & Insights
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Stay updated with the latest trends, tips, and insights from our experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white group cursor-pointer rounded-xl overflow-hidden shadow-sm   hover:shadow-md transition-all duration-200"
                        >
                            <div className="h-52 w-full overflow-hidden">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <p className="text-sm sora-semibold text-[#FF9201] mb-2">
                                    {post.category}
                                </p>

                                <h3 className="text-lg  sora-semibold group-hover:text-[#FF9201]   text-gray-900 leading-snug mb-3">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 sora-regular text-sm mb-4">
                                    {post.desc}
                                </p>

                                <Link
                                    to="/blog-detail"
                                    className="text-sm font-semibold text-black hover:underline inline-flex items-center"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Blogs
