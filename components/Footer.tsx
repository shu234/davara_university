"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <Container>
        <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Shri Davara University
            </h2>
            <p className="text-sm leading-relaxed">
              Shri Davara University is a visionary organisation and a catalyst
              for higher education in India, going with its objective of
              elevating mankind to newer level of achievement and success.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 text-gray-200 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebookF className="hover:text-blue-400" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="hover:text-sky-400" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedinIn className="hover:text-blue-500" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="hover:text-pink-400" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <FaYoutube className="hover:text-red-500" />
              </Link>
              <Link href="https://wa.me/919201826857" target="_blank">
                <FaWhatsapp className="hover:text-green-400" />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500">NEP</a></li>
              <li><a href="#" className="hover:text-yellow-500">NIRF</a></li>
              <li><a href="#" className="hover:text-yellow-500">NAAC</a></li>
              <li><a href="#" className="hover:text-yellow-500">NAD CELL</a></li>
              <li><a href="#" className="hover:text-yellow-500">APPROVALS</a></li>
              <li><a href="#" className="hover:text-yellow-500">ACADEMICS</a></li>
              <li><a href="#" className="hover:text-yellow-500">ONBUDSPERSON</a></li>
              <li><a href="#" className="hover:text-yellow-500">STUDENT SERVICES</a></li>
              <li><a href="#" className="hover:text-yellow-500">MANDATORY DISCLOSURE</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Important Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500">RTI</a></li>
              <li><a href="#" className="hover:text-yellow-500">SBM</a></li>
              <li><a href="#" className="hover:text-yellow-500">CAREERS</a></li>
              <li><a href="#" className="hover:text-yellow-500">GRIEVANCE</a></li>
              <li><a href="#" className="hover:text-yellow-500">ORDINANCES</a></li>
              <li><a href="#" className="hover:text-yellow-500">ANTI RAGGING</a></li>
              <li><a href="#" className="hover:text-yellow-500">WEBSITE POLICY</a></li>
              <li><a href="#" className="hover:text-yellow-500">ACADEMIC CALENDAR</a></li>
              <li><a href="#" className="hover:text-yellow-500">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Contact Section */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        <p>
          Email:{" "}
          <a
            href="mailto:info@davarauniversity.in"
            className="hover:text-yellow-500"
          >
            info@davarauniversity.in
          </a>
        </p>
        <p>
          Contact:
          <a href="tel:+919201826857" className="hover:text-yellow-500">
            {" "}+91-9201826857
          </a>
          , 
          <a href="tel:+919201737170" className="hover:text-yellow-500">
            {" "}+91-9201737170
          </a>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4 text-center text-xs text-gray-400">
        © 2024 Shri Davara University, All Rights Reserved.
      </div>
    </footer>
  );
}
