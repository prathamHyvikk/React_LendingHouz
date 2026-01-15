import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import img1 from "/assets/Images/home-loan-CU00emLr.jpg";


function BlogDetails() {
    return (
        <>
            <Header />


            <section className="container mx-auto  py-10">
                <div className="sm:px-8 px-4">

                    {/* Category */}
                    <p className="text-sm sora-semibold text-[#FF9201] mb-2">
                        Mortgage Tips
                    </p>

                    {/* Title */}
                    <h1 className="sora-medium  text-2xl  sm:text-[35px] md:text-[50px] leading-10  text-gray-900 mb-4">
                        How to Get Approved for a Home Loan Faster
                    </h1>

                    {/* Meta */}
                    <p className="text-gray-500 sora-regular text-sm mb-6">
                        By Admin • January 10, 2026
                    </p>

                    {/* Featured Image */}
                    <div className="w-full rounded-lg overflow-hidden mb-8">
                        <img
                            src={img1}
                            alt="Blog"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-gray-700 leading-relaxed space-y-6">

                        <p className="sora-regular">
                            Getting approved for a home loan doesn’t have to be complicated.
                            With the right preparation and guidance, you can significantly
                            speed up the process.
                        </p>

                        <ol className="list-decimal pl-6 space-y-4  ">
                            <li>
                                <h2 className="text-lg   sora-bold  text-gray-900">
                                    Check Your Credit Score
                                </h2>
                                <p className="sora-regular">
                                    Before applying, make sure your credit score is healthy.
                                    A higher score improves approval chances and interest rates.
                                </p>
                            </li>

                            <li>
                                <h2 className="text-lg sora-bold   text-gray-900">
                                    Prepare Your Documents
                                </h2>
                                <p className="sora-regular">
                                    Keep income statements, tax returns, and bank statements ready
                                    to avoid delays.
                                </p>
                            </li>

                            <li>
                                <h2 className="text-lg sora-bold   text-gray-900">
                                    Work With Experts
                                </h2>
                                <p className="sora-regular">
                                    Professional guidance helps you choose the best loan and avoid
                                    common mistakes.
                                </p>
                            </li>
                        </ol>

                    </div>


                </div>


            </section>



            <Footer />
        </>
    );
}

export default BlogDetails;
