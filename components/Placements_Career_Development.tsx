'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// CountUp Component for animated stats
function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const interval = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(interval);
        start = end;
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(interval);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function PlacementsSection() {
  const placementStats = [
    { label: "Average Salary", value: 12, suffix: " LPA" },
    { label: "Placement Rate", value: 95, suffix: "%" },
    { label: "Companies Participated", value: 200, suffix: "+" },
    { label: "Internship Opportunities", value: 100, suffix: "%" },
  ];

  const topRecruiters = [
    "/images/recruiters/google.png",
    "/images/recruiters/microsoft.png",
    "/images/recruiters/amazon.png",
    "/images/recruiters/facebook.png",
    "/images/recruiters/infosys.png",
  ];

  const successStories = [
    {
      name: "Rohan Sharma",
      company: "Google",
      image: "/images/students/rohan.jpg",
      testimonial: "Shri Davara University shaped my career and prepared me for Google interviews.",
    },
    {
      name: "Priya Verma",
      company: "Microsoft",
      image: "/images/students/priya.jpg",
      testimonial: "The training and placement guidance here is top-notch.",
    },
    {
      name: "Amit Singh",
      company: "Amazon",
      image: "/images/students/amit.jpg",
      testimonial: "Thanks to the university, I secured my dream job in Amazon.",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">
            Placements & Career Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students achieve outstanding success, thanks to dedicated placement guidance and industry partnerships.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-[#C9A96E]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#1B2951]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[#1B2951] mb-6 text-center">Top Recruiters</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {topRecruiters.map((logo, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center w-32 h-20"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Image src={logo} alt="Recruiter Logo" width={120} height={60} className="object-contain" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#1B2951] mb-6 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {successStories.map((student, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#C9A96E]">
                  <Image src={student.image} alt={student.name} width={96} height={96} className="object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-[#1B2951]">{student.name}</h4>
                <p className="text-[#C9A96E] mb-2">{student.company}</p>
                <p className="text-gray-600 text-sm">{student.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href="/placements"
            className="inline-block bg-[#1B2951] hover:bg-[#0F1A35] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 border-2 border-[#C9A96E]"
            whileHover={{ scale: 1.05 }}
            aria-label="See all placement details at Shri Davara University"
          >
            See All Placements →
          </motion.a>
        </div>

      </div>
    </section>
  );
}
