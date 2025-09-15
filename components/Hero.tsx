'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
  bgColor: string;
  linkPrimary: string;
  linkSecondary: string;
};

interface HeroSectionProps {
  slidesData?: Slide[];
}

export default function HeroSection({ slidesData }: HeroSectionProps) {
  const defaultSlides: Slide[] = [
    {
      id: 1,
      title: "Your Future Starts Here",
      description: "Join our diverse community of learners and innovators. Scholarships available for qualified students.",
      image: "/api/placeholder/1200/600",
      ctaPrimary: "Apply Now",
      ctaSecondary: "Watch Video",
      bgColor: "bg-[#1B2951]",
      linkPrimary: "/apply",
      linkSecondary: "/video",
    },
    {
      id: 2,
      title: "Experience Our Campus",
      description: "Tour our state-of-the-art facilities and see what makes our campus unique.",
      image: "/api/placeholder/1200/600",
      ctaPrimary: "Virtual Tour",
      ctaSecondary: "Schedule Visit",
      bgColor: "bg-[#C9A96E]",
      linkPrimary: "/virtual-tour",
      linkSecondary: "/schedule-visit",
    },
    {
      id: 3,
      title: "Upcoming Events",
      description: "Open house, workshops, and guest lectures. Connect with our community.",
      image: "/api/placeholder/1200/600",
      ctaPrimary: "View Events",
      ctaSecondary: "Register",
      bgColor: "bg-[#E8F1F5]",
      linkPrimary: "/events",
      linkSecondary: "/register",
    },
  ];

  const slides = slidesData && slidesData.length > 0 ? slidesData : defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Hero Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay for text */}
          <div className={`absolute inset-0 ${slide.bgColor} bg-opacity-60 flex items-center`}>
            <div className="container mx-auto px-6 text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8">{slide.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.linkPrimary}
                  className="px-6 py-3 bg-[#C9A96E] hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-lg transition"
                >
                  {slide.ctaPrimary}
                </Link>
                <Link
                  href={slide.linkSecondary}
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B2951] font-semibold rounded-lg transition"
                >
                  {slide.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx ? 'bg-white scale-110' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
