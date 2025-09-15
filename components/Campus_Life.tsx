'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const facilities = [
  { name: "Hostel", image: "/images/facilities/hostel.jpg" },
  { name: "Sports", image: "/images/facilities/sports.jpg" },
  { name: "Library", image: "/images/facilities/library.jpg" },
];

const activities = [
  { name: "Cultural Fest", image: "/images/activities/cultural.jpg" },
  { name: "Tech Fest", image: "/images/activities/techfest.jpg" },
];

export default function CampusLifeSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [visibleCards]);

  return (
    <section className="relative bg-gradient-to-b from-[#f8f9fa] to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Life at <span className="text-[#191970]">Shri Davara University</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A glimpse of vibrant campus life filled with facilities and activities
          </p>
        </div>

        {/* Facilities Preview */}
        <div className="mb-14">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.name}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-700 transform
                  ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  hover:shadow-xl hover:-translate-y-1`}
              >
                <Image
                  src={facility.image}
                  alt={facility.name}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-semibold text-lg">{facility.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Preview */}
        <div className="mb-14">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Student Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.name}
                ref={(el) => (cardRefs.current[facilities.length + index] = el)}
                data-index={facilities.length + index}
                className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-700 transform
                  ${visibleCards.includes(facilities.length + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  hover:shadow-xl hover:-translate-y-1`}
              >
                <Image
                  src={activity.image}
                  alt={activity.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-lg font-semibold">{activity.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/campus-life"
            className="inline-flex items-center bg-[#191970] hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Explore Campus Life →
          </Link>
        </div>
      </div>
    </section>
  );
}
