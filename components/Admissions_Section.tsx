"use client";

import { CalendarDays, FileText, ClipboardList, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AdmissionsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Admissions 2025
        </h2>

        {/* Dates & Deadlines */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12 text-center">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">Important Dates</h3>
          <p className="text-gray-700">
            Applications Open: <span className="font-medium">1st March 2025</span> | 
            Deadline: <span className="font-medium">31st May 2025</span>
          </p>
        </div>

        {/* Admission Process */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <CalendarDays className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Step 1</h4>
            <p className="text-gray-600 text-sm">Register online and select your desired program.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileText className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Step 2</h4>
            <p className="text-gray-600 text-sm">Fill out the application form and upload documents.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ClipboardList className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Step 3</h4>
            <p className="text-gray-600 text-sm">Appear for entrance exams or interviews (if applicable).</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-12 h-12 text-yellow-500 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Step 4</h4>
            <p className="text-gray-600 text-sm">Receive admission confirmation and complete enrollment.</p>
          </div>
        </div>

        {/* Downloadable Brochures */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Download Brochures</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/brochures/undergraduate.pdf"
              target="_blank"
              className="px-5 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-lg shadow-sm transition"
            >
              Undergraduate Programs
            </a>
            <a
              href="/brochures/postgraduate.pdf"
              target="_blank"
              className="px-5 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-lg shadow-sm transition"
            >
              Postgraduate Programs
            </a>
            <a
              href="/brochures/doctoral.pdf"
              target="_blank"
              className="px-5 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-lg shadow-sm transition"
            >
              Doctoral Programs
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            href="/apply"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Apply Now
          </Link>
          <Link
            href="/enquiry"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md transition"
          >
            Enquiry Form
          </Link>
        </div>
      </div>
    </section>
  );
}
