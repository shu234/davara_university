"use client";

import Image from "next/image";
import Link from "next/link";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const researchProjects = [
  { title: "AI in Healthcare", description: "Developing AI solutions for disease detection.", image: "/images/research/ai-healthcare.jpg" },
  { title: "Sustainable Energy", description: "Researching renewable energy solutions.", image: "/images/research/energy.jpg" },
  { title: "Robotics & Automation", description: "Creating advanced robotics for industrial applications.", image: "/images/research/robotics.jpg" },
];

const industryPartners = [
  { name: "TechCorp", logo: "/images/partners/techcorp.png" },
  { name: "InnovateX", logo: "/images/partners/innovatex.png" },
  { name: "BioLabs", logo: "/images/partners/biolabs.png" },
  { name: "GreenEnergy", logo: "/images/partners/greenenergy.png" },
];

const patents = [
  { title: "AI-based Diagnostic Tool", year: 2024 },
  { title: "Solar Energy Optimizer", year: 2023 },
  { title: "Robotic Arm for Manufacturing", year: 2025 },
];

export default function ResearchInnovationSection() {
  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] text-center mb-12">
          Research & Innovation
        </h2>

        {/* Featured Research Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#1B2951] mb-6 text-center">
            Featured Research Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {researchProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-[#C9A96E] border-t-4 border-[#C9A96E] cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: idx * 0.15 }}
                tabIndex={0}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#1B2951] mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Collaborations */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#1B2951] mb-6 text-center">
            Industry Collaborations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {industryPartners.map((partner, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-4 rounded-xl shadow-md border border-[#C9A96E] border-t-4 border-[#C9A96E] cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: idx * 0.15 }}
                tabIndex={0}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patents & Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#1B2951] mb-6 text-center">
            Patents & Publications
          </h3>
          <ul className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {patents.map((patent, idx) => (
              <motion.li 
                key={idx} 
                className="bg-white p-5 rounded-xl shadow-md text-center flex flex-col items-center border border-[#C9A96E] border-t-4 border-[#C9A96E] cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: idx * 0.15 }}
                tabIndex={0}
              >
                <FiAward className="text-[#C9A96E] text-3xl mb-3" />
                <p className="font-semibold text-[#1B2951] mb-1">{patent.title}</p>
                <span className="text-sm bg-[#E8F1F5] text-[#1B2951] px-3 py-1 rounded-full">
                  {patent.year}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/research"
            className="inline-block bg-[#1B2951] hover:bg-[#0F1A35] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 border-2 border-[#C9A96E]"
            aria-label="Explore all research and innovation at Shri Davara University"
          >
            Explore More Research →
          </Link>
        </div>
      </div>
    </section>
  );
}
