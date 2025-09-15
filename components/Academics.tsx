"use client";
import { useState } from "react";
import { GraduationCap, Award, BookOpen, Monitor, ArrowRight, Users, Clock, Star } from "lucide-react";

const programsData = {
  Undergraduate: {
    icon: GraduationCap,
    color: "from-[#1B2951] to-[#2C3A6B]",
    count: 12,
    description: "Bachelor's degree programs for emerging professionals",
    featured: [
      { name: "Computer Science", duration: "4 Years", students: "2.5K+", rating: 4.9 },
      { name: "Business Administration", duration: "4 Years", students: "1.8K+", rating: 4.8 },
      { name: "Data Science", duration: "4 Years", students: "1.2K+", rating: 4.9 }
    ]
  },
  Postgraduate: {
    icon: Award,
    color: "from-[#C9A96E] to-[#B38A4D]",
    count: 8,
    description: "Master's programs for career advancement",
    featured: [
      { name: "MBA Finance", duration: "2 Years", students: "900+", rating: 4.9 },
      { name: "M.Tech AI/ML", duration: "2 Years", students: "650+", rating: 4.8 },
      { name: "Master of Psychology", duration: "2 Years", students: "420+", rating: 4.7 }
    ]
  },
  Doctoral: {
    icon: BookOpen,
    color: "from-[#1B2951] to-[#2C3A6B]",
    count: 6,
    description: "PhD programs for research excellence",
    featured: [
      { name: "PhD Biotechnology", duration: "3-5 Years", students: "180+", rating: 4.8 },
      { name: "PhD Management", duration: "3-5 Years", students: "120+", rating: 4.7 },
      { name: "PhD Computer Science", duration: "4-6 Years", students: "95+", rating: 4.9 }
    ]
  },
  "Online Learning": {
    icon: Monitor,
    color: "from-[#E8F1F5] to-[#C9A96E]",
    count: 15,
    description: "Flexible online certificates and diplomas",
    featured: [
      { name: "AI & Machine Learning", duration: "6 Months", students: "3.2K+", rating: 4.8 },
      { name: "Digital Marketing", duration: "4 Months", students: "2.1K+", rating: 4.7 },
      { name: "Business Analytics", duration: "8 Months", students: "1.5K+", rating: 4.8 }
    ]
  }
};

export default function ProgramsSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof programsData | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="bg-[#F8F9FA] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-2">
            Explore Our Programs
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
            Choose from world-class programs designed to launch your career and transform your future
          </p>
          
          {/* Key Stats */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-[#1B2951]">41+</div>
              <div className="text-xs text-gray-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#1B2951]">15K+</div>
              <div className="text-xs text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#1B2951]">4.8★</div>
              <div className="text-xs text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* Program Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.entries(programsData).map(([category, data]) => {
            const Icon = data.icon;
            const isSelected = selectedCategory === category;
            
            return (
              <div
                key={category}
                className={`relative bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 border hover:scale-105 hover:shadow-md ${
                  isSelected 
                    ? 'border-[#1B2951] shadow-md scale-105' 
                    : 'border-gray-200 hover:border-[#C9A96E]'
                }`}
                onClick={() => setSelectedCategory(isSelected ? null : category as keyof typeof programsData)}
                onMouseEnter={() => setHoveredCard(category)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${data.color} flex items-center justify-center mb-3`}>
                  <Icon className="text-white" size={20} />
                </div>
                
                <h3 className="font-bold text-base text-[#1B2951] mb-1">{category}</h3>
                <p className="text-gray-600 text-sm mb-2">{data.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1B2951]">{data.count}</span>
                  <ArrowRight 
                    className={`transition-all duration-200 ${
                      hoveredCard === category ? 'text-[#C9A96E] translate-x-1' : 'text-gray-400'
                    }`} 
                    size={18} 
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Programs Detail */}
        {selectedCategory && (
          <div className="bg-[#E8F1F5] rounded-xl p-5 border border-gray-200 shadow-md mb-6">
            <div className="flex items-center gap-2 mb-4">
              {(() => {
                const Icon = programsData[selectedCategory].icon;
                return <Icon className="text-[#1B2951]" size={20} />;
              })()}
              <h3 className="text-lg font-bold text-[#1B2951]">
                Featured {selectedCategory} Programs
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {programsData[selectedCategory].featured.map((program, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-3 border border-gray-100 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-[#1B2951] text-sm leading-snug">
                      {program.name}
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#1B2951] to-[#2C3A6B] rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Ready to Start Your Journey?</h3>
            <p className="text-[#E8F1F5] mb-4 max-w-2xl mx-auto text-sm md:text-base">
              Join thousands of students who have transformed their careers with our world-class education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-[#C9A96E] text-[#1B2951] hover:bg-[#B38A4D] font-semibold px-5 py-2 rounded-lg transition-all hover:scale-105 text-sm">
                View All Programs
              </button>
              <button className="border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1B2951] font-semibold px-5 py-2 rounded-lg transition-all text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
