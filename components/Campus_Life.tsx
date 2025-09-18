'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type CampusItem = {
  id: number;
  name: string;
  image: string;
};

type WpItem = {
  id: number;
  title: { rendered: string };
  acf?: { image?: string };
};

// ✅ Reusable Animated Card
function AnimatedCard({
  item,
  index,
  cardRefs,
  visibleCards,
  height = "h-56",
  overlay = "center",
}: {
  item: CampusItem;
  index: number;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  visibleCards: number[];
  height?: string;
  overlay?: "center" | "bottom";
}) {
  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      data-index={index}
      className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-700 transform
        ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:shadow-xl hover:-translate-y-1`}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={500}
        height={300}
        className={`w-full ${height} object-cover transition-transform duration-500 group-hover:scale-110`}
      />

      {/* Overlay */}
      {overlay === "center" ? (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white font-semibold text-lg">{item.name}</p>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg font-semibold">{item.name}</p>
        </div>
      )}
    </div>
  );
}

export default function CampusLifeSection() {
  const [facilities, setFacilities] = useState<CampusItem[]>([]);
  const [activities, setActivities] = useState<CampusItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Fetch from WordPress REST API
  useEffect(() => {
    async function fetchData() {
      try {
        const [facilitiesRes, activitiesRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_WP_API}/facilities`),
          fetch(`${process.env.NEXT_PUBLIC_WP_API}/activities`),
        ]);

        const facilitiesData: WpItem[] = await facilitiesRes.json();
        const activitiesData: WpItem[] = await activitiesRes.json();

        setFacilities(
          facilitiesData.map((item: WpItem): CampusItem => ({
            id: item.id,
            name: item.title.rendered,
            image: item.acf?.image || "/images/placeholder.jpg",
          }))
        );

        setActivities(
          activitiesData.map((item: WpItem): CampusItem => ({
            id: item.id,
            name: item.title.rendered,
            image: item.acf?.image || "/images/placeholder.jpg",
          }))
        );
      } catch (error) {
        console.error("Error fetching Campus Life data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ✅ Animation Observer
  useEffect(() => {
    const cards = cardRefs.current;

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

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [visibleCards]);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-600">Loading campus life...</p>
      </section>
    );
  }

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

        {/* Facilities */}
        <div className="mb-14">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <AnimatedCard
                key={facility.id}
                item={facility}
                index={index}
                cardRefs={cardRefs}
                visibleCards={visibleCards}
                height="h-56"
                overlay="center"
              />
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-14">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Student Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <AnimatedCard
                key={activity.id}
                item={activity}
                index={facilities.length + index}
                cardRefs={cardRefs}
                visibleCards={visibleCards}
                height="h-64"
                overlay="bottom"
              />
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
