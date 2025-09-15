"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com", color: "hover:text-blue-400" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com", color: "hover:text-sky-400" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com", color: "hover:text-blue-500" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com", color: "hover:text-pink-400" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com", color: "hover:text-red-500" },
];

export default function SecondaryHeader() {
  const [dateTime, setDateTime] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-IN", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(formatted);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#191970] text-white text-xs sm:text-sm border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-2 sm:gap-0">
        {/* Left section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-6">
          <Link
            href="/components/Admission_page.tsx"
            className="bg-yellow-400 text-[#191970] font-semibold px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            Admission
          </Link>
          <Link
            href="/erp-login"
            className="bg-white text-[#191970] font-semibold px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            ERP Login
          </Link>
          <span className="text-gray-200 sm:ml-2">{dateTime}</span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          {/* Desktop Icons */}
          <div className="hidden sm:flex items-center space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Icon className={`w-5 h-5 transition ${social.color}`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden ml-auto p-1 hover:bg-white/20 rounded transition"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="sm:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-md p-3 rounded-md mt-1 flex flex-col space-y-2 z-50"
            role="menu"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline transition"
                role="menuitem"
              >
                {social.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
