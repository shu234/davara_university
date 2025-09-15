"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#1B2951] py-16 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Your Future Starts Here
        </h2>
        <p className="text-lg md:text-xl text-[#E8F1F5] mb-10">
          Take the first step towards an extraordinary career with Shri Davara University.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/apply"
            className="px-6 py-3 bg-[#C9A96E] hover:bg-[#b8965c] text-white font-semibold rounded-lg shadow-lg transition"
          >
            Apply Now
          </Link>
          <Link
            href="/visit-campus"
            className="px-6 py-3 bg-white hover:bg-gray-100 text-[#1B2951] font-semibold rounded-lg shadow-lg transition"
          >
            Visit Campus
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#E8F1F5] hover:bg-[#d4e5eb] text-[#1B2951] font-semibold rounded-lg shadow-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
