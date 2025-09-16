"use client";

import { useEffect, useState } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Monitor,
  ArrowRight,
  Users,
  Clock,
  Star,
} from "lucide-react";

// Map category slugs to icons + colors
const categoryConfig: Record<
  string,
  { icon: any; color: string }
> = {
  undergraduate: {
    icon: GraduationCap,
    color: "from-[#1B2951] to-[#2C3A6B]",
  },
  postgraduate: {
    icon: Award,
    color: "from-[#C9A96E] to-[#B38A4D]",
  },
  doctoral: {
    icon: BookOpen,
    color: "from-[#1B2951] to-[#2C3A6B]",
  },
  online: {
    icon: Monitor,
    color: "from-[#E8F1F5] to-[#C9A96E]",
  },
};

interface Program {
  id: number;
  title: string;
  duration: string;
  students: string;
  rating: number;
  category: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  featured: Program[];
}

export default function ProgramsSection() {
  const [programsData, setProgramsData] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Fetch from WP REST API
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/program-categories?_embed&per_page=100`,
          { next: { revalidate: 60 } }
        );
        const categories = await res.json();

        // Transform WP data into our shape
        const formatted: Category[] = categories.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          count: cat.count,
          featured: (cat.featured_programs || []).map((p: any) => ({
            id: p.id,
            title: p.title.rendered,
            duration: p.meta?.duration || "N/A",
            students: p.meta?.students || "0",
            rating: parseFloat(p.meta?.rating) || 0,
            category: cat.slug,
          })),
        }));

        setProgramsData(formatted);
      } catch (err) {
        console.error("Failed to fetch programs:", err);
      }
    }
    loadData();
  }, []);

  if (!programsData.length) {
    return <div className="text-center py-10">Loading Programs...</div>;
  }

  return (
    <section className="bg-[#F8F9FA] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-2">
            Explore Our Programs
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
            Choose from world-class programs designed to launch your career and
            transform your future
          </p>
        </div>

        {/* Program Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {programsData.map((cat) => {
            const config = categoryConfig[cat.slug] || categoryConfig.undergraduate;
            const Icon = config.icon;
            const isSelected = selectedCategory === cat.slug;

            return (
              <div
                key={cat.id}
                className={`relative bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 border hover:scale-105 hover:shadow-md ${
                  isSelected
                    ? "border-[#1B2951] shadow-md scale-105"
                    : "border-gray-200 hover:border-[#C9A96E]"
                }`}
                onClick={() =>
                  setSelectedCategory(isSelected ? null : cat.slug)
                }
                onMouseEnter={() => setHoveredCard(cat.slug)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center mb-3`}
                >
                  <Icon className="text-white" size={20} />
                </div>

                <h3 className="font-bold text-base text-[#1B2951] mb-1">
                  {cat.name}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-2"
                  dangerouslySetInnerHTML={{ __html: cat.description }}
                />
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1B2951]">
                    {cat.count}
                  </span>
                  <ArrowRight
                    className={`transition-all duration-200 ${
                      hoveredCard === cat.slug
                        ? "text-[#C9A96E] translate-x-1"
                        : "text-gray-400"
                    }`}
                    size={18}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Programs */}
        {selectedCategory && (
          <div className="bg-[#E8F1F5] rounded-xl p-5 border border-gray-200 shadow-md mb-6">
            <h3 className="text-lg font-bold text-[#1B2951] mb-4">
              Featured {selectedCategory} Programs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {programsData
                .find((cat) => cat.slug === selectedCategory)
                ?.featured.map((program) => (
                  <div
                    key={program.id}
                    className="bg-white rounded-lg p-3 border border-gray-100 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-[#1B2951] text-sm leading-snug">
                        {program.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-[#C9A96E]">
                        <Star size={12} fill="currentColor" />
                        <span>{program.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{program.students} students</span>
                      </div>
                    </div>

                    <button className="mt-2 w-full bg-[#1B2951] hover:bg-[#0F1A33] text-white text-xs font-medium py-1.5 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
