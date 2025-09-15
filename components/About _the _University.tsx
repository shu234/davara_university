"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import Logo from "./Logo";

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") console.log("Searching for:", searchQuery);
  };

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#191970]">
          <Link href="/public/images/davara-logo.png">University</Link>
        </div>
        {/* <Logo/> */}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-8 font-medium">
            {/* ABOUT Mega Menu */}
            <li
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link
                href="#"
                className="relative inline-block text-gray-700 transition-colors hover:text-[#00008B]"
              >
                ABOUT
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#191970] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {aboutOpen && (
                <div className="absolute left-0 mt-3 w-[800px] bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-md py-6 px-6 grid grid-cols-3 gap-6 text-sm text-gray-700 z-50">
                  {/* Column 1 */}
                  <ul className="space-y-2">
                    <li><Link href="/about/overview" className="hover:text-[#191970]">Overview</Link></li>
                    <li><Link href="/about/why-davara" className="hover:text-[#191970]">WHY DAVARA</Link></li>
                    <li><Link href="/about/approvals" className="hover:text-[#191970]">Approvals & Recognitions</Link></li>
                    <li><Link href="/about/vision-mission" className="hover:text-[#191970]">Vision & Mission</Link></li>
                    <li><Link href="/about/awards" className="hover:text-[#191970]">Awards & Achievements</Link></li>
                    <li><Link href="/about/code-of-conduct" className="hover:text-[#191970]">Code of Conduct</Link></li>
                    <li><Link href="/about/core-values" className="hover:text-[#191970]">Core Values</Link></li>
                  </ul>

                  {/* Column 2 */}
                  <ul className="space-y-2">
                    <li className="font-semibold text-gray-900">Leadership</li>
                    <li><Link href="/components/Leadership/ChancellorMessage.tsx" className="hover:text-[#191970]">Chancellor</Link></li>
                    <li><Link href="/about/mres" className="hover:text-[#191970]">MRES</Link></li>
                    <li><Link href="/about/directors-general" className="hover:text-[#191970]">Directors General's</Link></li>
                    <li><Link href="/about/founder-director" className="hover:text-[#191970]">Founder Director</Link></li>
                    <li><Link href="/about/ceo" className="hover:text-[#191970]">Chief Executive Officer</Link></li>
                    <li><Link href="/about/honorary-director" className="hover:text-[#191970]">Honorary Director</Link></li>
                    <li><Link href="/about/vice-chancellor" className="hover:text-[#191970]">Vice Chancellor</Link></li>
                    <li><Link href="/about/registrar" className="hover:text-[#191970]">Registrar</Link></li>
                    <li><Link href="/about/controller-exam" className="hover:text-[#191970]">Controller of Examination</Link></li>
                  </ul>

                  {/* Column 3 */}
                  <ul className="space-y-2">
                    <li className="font-semibold text-gray-900">University Councils</li>
                    <li><Link href="/about/court-of-du" className="hover:text-[#191970]">Court of DU</Link></li>
                    <li><Link href="/about/executive-council" className="hover:text-[#191970]">Executive Council</Link></li>
                    <li><Link href="/about/academic-council" className="hover:text-[#191970]">Academic Council</Link></li>
                    <li><Link href="/about/planning-board" className="hover:text-[#191970]">Planning Board</Link></li>
                    <li><Link href="/about/finance-committee" className="hover:text-[#191970]">Finance Committee</Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Other Links */}
            {["ACADEMICS","PROGRAMMES","ADMISSIONS","INTERNATIONAL","CONTACT US"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`/${item.toLowerCase().replace(" ","-")}`}
                  className="relative inline-block text-gray-700 transition-colors hover:text-[#00008B]"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#191970] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Search */}
          <div ref={searchContainerRef} className="relative ml-6">
            <form onSubmit={handleSearch}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`transition-all duration-300 border border-gray-300 rounded-full pl-10 pr-4 py-1 outline-none w-0 opacity-0 ${
                  searchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
                }`}
              />
              <FaSearch
                className="absolute left-3 top-1.5 text-[#191970] cursor-pointer hover:text-[#00008B]"
                onClick={() => setSearchOpen(!searchOpen)}
              />
            </form>
          </div>
        </nav>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center space-x-2">
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch className="text-[#191970]" />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes className="text-[#191970]" /> : <FaBars className="text-[#191970]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-4 border-t bg-white">
          <ul className="flex flex-col space-y-2 font-medium text-[#191970]">
            {["ABOUT","ACADEMICS","PROGRAMMES","ADMISSIONS","INTERNATIONAL","CONTACT US"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Search */}
      {searchOpen && (
        <div className="lg:hidden px-6 py-2 border-t bg-white">
          <form onSubmit={handleSearch} className="flex">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md outline-none"
            />
            <button type="submit" className="px-3 py-2 bg-[#191970] text-white rounded-r-md">
              <FaSearch />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
