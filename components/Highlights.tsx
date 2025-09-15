'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [counted, setCounted] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    {
      id: 1,
      title: "Students Enrolled",
      value: 3500,
      suffix: "+",
      description: "From 50+ countries worldwide",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Faculty Members",
      value: 850,
      suffix: "+",
      description: "Experts in their fields",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Courses Offered",
      value: 350,
      suffix: "+",
      description: "Across various disciplines",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Placement Success",
      value: 95,
      suffix: "%",
      description: "Graduates employed within 6 months",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Global Partners",
      value: 200,
      suffix: "+",
      description: "International universities & organizations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Intersection Observer for count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) setCounted(true);
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    return () => element && observer.unobserve(element);
  }, [counted]);

  // Intersection Observer for fade-in of cards
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, [visibleCards]);

  return (
    <section id="stats-section" className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1B2951] to-[#C9A96E] bg-clip-text text-transparent mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            For over 50 years, we've been committed to excellence in education, research, and community engagement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`group bg-white rounded-2xl shadow-md flex flex-col items-center text-center p-6 border border-[#E8F1F5] 
                transition-all duration-500 ease-out
                ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                hover:shadow-lg hover:-translate-y-2 hover:border-[#C9A96E]`}
            >
              <div className="rounded-full bg-[#E8F1F5] p-4 mb-4 text-[#1B2951] group-hover:bg-[#C9A96E]/20 transition-colors duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-2">
                {counted ? (
                  <CountUp start={0} end={stat.value} suffix={stat.suffix} duration={2.5} delay={index * 0.2} />
                ) : (
                  `0${stat.suffix}`
                )}
              </h3>
              <p className="text-base font-semibold text-gray-800 mb-2">{stat.title}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 rounded-full px-6 py-3 border border-[#E8F1F5] shadow-sm">
            <div className="w-2 h-2 bg-[#C9A96E] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Updated in real-time • Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// CountUp Animation Component
function CountUp({ start, end, suffix = "", duration = 2.5, delay = 0 }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOutCubic * (end - start) + start));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [start, end, duration, delay]);

  return <>{count}{suffix}</>;
}
