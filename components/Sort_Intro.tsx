"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div 
          className="animate-fadeInUp" // subtle scroll animation
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-6">
            About Shri Davara University
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Shri Davara University is a visionary organisation and a catalyst 
            for higher education in India. With a commitment to excellence, 
            the university fosters an environment where knowledge, research, 
            and innovation thrive. 
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We prepare students for global challenges with world-class 
            academics and innovation. 
          </p>
          <Link
            href="/about"
            aria-label="Learn more about Shri Davara University"
            className="inline-block bg-[#191970] hover:bg-[#00008B] text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Right: Image with gradient overlay */}
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg animate-fadeInUp">
          <Image
            src="/images/campus.jpg" // replace with actual campus image
            alt="Shri Davara University Campus"
            fill
            className="object-cover"
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
