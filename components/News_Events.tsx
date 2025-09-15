'use client';

import Image from 'next/image';

export default function NewsEventsSection() {
  const announcements = [
    {
      title: "University Ranked Top 10 in India",
      date: "Sep 1, 2025",
      image: "/images/news/ranking.jpg",
      link: "/news/university-top-10",
    },
    {
      title: "New Research Lab Inauguration",
      date: "Aug 25, 2025",
      image: "/images/news/lab.jpg",
      link: "/news/new-research-lab",
    },
    {
      title: "International Conference on AI",
      date: "Aug 18, 2025",
      image: "/images/news/ai-conference.jpg",
      link: "/news/ai-conference",
    },
  ];

  const upcomingEvents = [
    { date: "2025-09-15", title: "Cultural Fest 2025" },
    { date: "2025-10-05", title: "Tech Symposium" },
    { date: "2025-10-20", title: "Alumni Meet" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] mb-4">
            News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements and upcoming events at Shri Davara University.
          </p>
        </div>

        {/* Latest Announcements */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#191970] mb-6 text-center">Latest Announcements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {announcements.map((news, idx) => (
              <a
                key={idx}
                href={news.link}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-48">
                  <Image src={news.image} alt={news.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                  <h4 className="text-lg font-semibold text-[#191970]">{news.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl font-semibold text-[#191970] mb-6 text-center">Upcoming Events</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-xl p-4 w-64 text-center">
                <p className="text-sm text-gray-500 mb-2">{new Date(event.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                <h4 className="text-lg font-semibold text-[#191970]">{event.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
