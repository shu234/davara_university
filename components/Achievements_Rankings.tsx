'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Achievement {
  title: string;
  image: string;
  link: string;
  type: string;
}

export default function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      title: "NIRF 2025: Top 10 in India",
      image: "/images/achievements/nirf.png",
      link: "#nirf",
      type: "National Ranking",
    },
    {
      title: "NAAC A+ Accreditation",
      image: "/images/achievements/naac.png",
      link: "#naac",
      type: "Accreditation",
    },
    {
      title: "QS Asia Ranking 2025",
      image: "/images/achievements/qs.png",
      link: "#qs",
      type: "International Ranking",
    },
    {
      title: "Best Innovation University Award",
      image: "/images/achievements/innovation.png",
      link: "#innovation",
      type: "Award",
    },
    {
      title: "Featured in Times Higher Education",
      image: "/images/achievements/the.png",
      link: "#the",
      type: "Media Recognition",
    },
  ];

  // ✅ Fix: explicitly allow number or null
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-4">
            Achievements & Rankings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Recognized nationally and internationally for excellence in education, innovation, and research. Explore our awards, accreditations, and global rankings.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {achievements.map((achievement, idx) => (
            <a
              key={idx}
              href={achievement.link}
              className="group relative w-full max-w-xs bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Interactive Badge */}
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-contain"
                />
                {/* Hover Overlay */}
                {hovered === idx && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/40 to-[#b89054]/30 rounded-2xl animate-pulse"></div>
                )}
              </div>

              {/* Title & Type */}
              <h4 className="text-center text-[#191970] font-semibold text-sm md:text-base mb-1">
                {achievement.title}
              </h4>
              <span className="text-xs md:text-sm text-gray-500">{achievement.type}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-[#191970] hover:bg-[#0f0f5c] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore More Achievements
          </button>
        </div>
      </div>

      {/* Optional Background Decorative Elements */}
      <div className="absolute top-10 left-5 w-28 h-28 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-15 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-5 w-32 h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
}
