import React from "react";
import logo from '@assets/Images/header-logo.png';
import { Link } from "react-router-dom";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
      <div className="absolute -top-16 -right-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-24 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />


      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">

        <div className="mb-12 rounded-2xl border border-orange-200/70 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="flex-1 text-center lg:text-left">
              <p className="inline-flex items-center text-[11px] tracking-wider uppercase sora-semibold text-[#F7941D]">
                Flexible Financing — Fast Approvals
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl sora-bold text-gray-900">
                Finance What Matters: Pets, Medical, Travel, Equipment & More
              </h2>
              <p className="mt-2 text-gray-600">
                Simple plans, transparent pricing, and quick decisions—tailored
                for your needs.
              </p>
            </div>

            {/* Newsletter */}
            <form
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to our newsletter"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 sm:w-80 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-orange-100"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 sora-semibold bg-[#F7941D] text-white hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center group">
              <img
                src={logo}
                alt="Lending Houz"
                className="w-40 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              Lending Houz simplifies financing across categories—pets, medical,
              lifestyle, equipment, and more—so you can move forward confidently.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              {[
                { href: "#", label: "Twitter", icon: "ri-twitter-fill" },
                { href: "#", label: "LinkedIn", icon: "ri-linkedin-fill" },
                { href: "#", label: "Instagram", icon: "ri-instagram-fill" },
                { href: "#", label: "GitHub", icon: "ri-github-fill" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-700 text-2xl p-2 rounded-xl border border-transparent hover:border-orange-200 hover:bg-white hover:shadow transition hover:text-[#F7941D]"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>


          </div>

          {/* Columns */}
          {/* <nav aria-label="Product" className="flex flex-col">
            <h3 className="text-base sora-semibold text-gray-900">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {["Pet Financing", "Medical Equipment", "Travel & Lifestyle", "Business & Equipment"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-gray-600 hover:text-[#F7941D] transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav> */}

          

          <nav aria-label="Product" className="flex flex-col">
            <h3 className="text-base sora-semibold text-gray-900">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Pet Financing", to: "/pet" },
                { name: "Medical Equipment", to: "/medical-equipment" },
                { name: "Travel & Lifestyle", to: "#" },  
                { name: "Business & Equipment", to: "#" },     
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-gray-600 hover:text-[#F7941D] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>




          <nav aria-label="Resources" className="flex flex-col">
            <h3 className="text-base sora-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "How It Works", to: "#" },
                { name: "FAQs", to: "/faqs" },
                { name: "Blog", to: "#" },
                { name: "Support", to: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-gray-600 hover:text-[#F7941D] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          {/* <nav aria-label="Company" className="flex flex-col">
            <h3 className="text-base sora-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {["About", "Testimonials", "Become a Partner", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group inline-flex items-center text-gray-600 hover:text-[#F7941D] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav> */}

          <nav aria-label="Company" className="flex flex-col">
            <h3 className="text-base sora-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "About", to: "/about" },
                { name: "Testimonials", to: "/testimonial" },
                { name: "Become a Partner", to: "/become-partner" },
                { name: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-gray-600 hover:text-[#F7941D] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {year} <span className="sora-medium text-gray-700">Lending Houz</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-600 hover:text-[#F7941D] transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#F7941D] transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-[#F7941D] transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
