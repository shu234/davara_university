"use client";

import Link from "next/link";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "How NEP 2020 is Transforming Higher Education in India",
      excerpt:
        "A closer look at the impact of the National Education Policy on universities and students across the country.",
      date: "August 28, 2025",
      link: "/blog/nep-2020-transforming-education",
    },
    {
      id: 2,
      title: "Inside Shri Davara University’s Research & Innovation Initiatives",
      excerpt:
        "Our latest projects in AI, biotechnology, and renewable energy are shaping the future of research in India.",
      date: "September 5, 2025",
      link: "/blog/research-innovation",
    },
    {
      id: 3,
      title: "Campus Life: A Glimpse Into Student Experiences",
      excerpt:
        "From cultural fests to tech clubs, explore how student life at Shri Davara University goes beyond academics.",
      date: "September 8, 2025",
      link: "/blog/campus-life",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B2951] mb-12">
          Blog & Insights
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-2xl p-6 border border-[#E8F1F5] hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold text-[#1B2951] mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={post.link}
                className="text-[#C9A96E] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-[#C9A96E] hover:bg-[#b8965c] text-white font-semibold rounded-lg shadow-md transition"
          >
            Explore All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
