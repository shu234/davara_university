"use client";

import Link from "next/link";

export default function ScholarshipsSection() {
  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B2951] mb-12">
          Scholarships & Financial Aid
        </h2>

        {/* Scholarships List */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Scholarship 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#E8F1F5] hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#1B2951] mb-3">
              Merit-Based Scholarship
            </h3>
            <p className="text-gray-600 mb-4">
              Awarded to students with outstanding academic achievements in their
              previous studies.
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Eligibility:</span> 90%+ in qualifying exams
            </p>
          </div>

          {/* Scholarship 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#E8F1F5] hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#1B2951] mb-3">
              Need-Based Aid
            </h3>
            <p className="text-gray-600 mb-4">
              Financial assistance for students from economically disadvantaged
              backgrounds.
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Eligibility:</span> Income proof required
            </p>
          </div>

          {/* Scholarship 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#E8F1F5] hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#1B2951] mb-3">
              Sports Scholarship
            </h3>
            <p className="text-gray-600 mb-4">
              For students who have represented at state, national, or
              international sports events.
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Eligibility:</span> Sports certificates required
            </p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <Link
            href="/scholarships/apply"
            className="px-6 py-3 bg-[#C9A96E] hover:bg-[#b8965c] text-white font-semibold rounded-lg shadow-md transition"
          >
            Apply for Scholarships
          </Link>
        </div>
      </div>
    </section>
  );
}
