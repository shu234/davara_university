'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes, FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);
  const academicsMenuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
      
      if (
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
      
      if (
        academicsMenuRef.current &&
        !academicsMenuRef.current.contains(event.target as Node)
      ) {
        setAcademicsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = ['PROGRAMMES', 'ADMISSIONS', 'INTERNATIONAL', 'CONTACT US'];

  // Academics menu data
  const academicsMenuData = {
    stats: [
      { value: '14', label: 'Departments' },
      { value: '50+', label: 'Academic Programmes' }
    ],
    departments: [
      'Faculty of Arts and Humanities',
      'Faculty of Commerce & Management',
      'Faculty of Library & Information Science',
      'Faculty of Science & Technology',
      'Faculty of Vocational Education'
    ],
    description: 'Education for a Changing World! Shri Davara University is fast emerging University in Chhattisgarh focused on developing skills of students to ensure job placement for bright future.'
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/davara-logo.png"
            alt="Davara University Logo"
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-8 font-medium text-gray-700">
            {/* ABOUT Mega Menu */}
            <li
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="relative inline-block hover:text-[#00008B]">
                ABOUT
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#191970] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {aboutOpen && (
                <div ref={aboutMenuRef} className="absolute left-0 mt-3 w-[800px] bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-md py-6 px-6 grid grid-cols-3 gap-6 text-sm text-gray-700 z-50">
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
                    <li><Link href="/about/chancellor" className="hover:text-[#191970]">Chancellor</Link></li>
                    <li><Link href="/about/mres" className="hover:text-[#191970]">MRES</Link></li>
                    <li><Link href="/about/directors-general" className="hover:text-[#191970]">Directors General&apos;s</Link></li>
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

            {/* ACADEMICS Mega Menu */}
            <li
              className="relative group"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <button className="relative inline-block hover:text-[#00008B]">
                ACADEMICS
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#191970] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {academicsOpen && (
                <div ref={academicsMenuRef} className="absolute left-0 mt-3 w-[900px] bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-md py-6 px-6 grid grid-cols-4 gap-6 text-sm text-gray-700 z-50">
                  {/* Column 1 - Statistics */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 border-b pb-2">Academic Overview</h3>
                    <div className="space-y-3">
                      {academicsMenuData.stats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="bg-[#191970] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            {index === 0 ? <FaChalkboardTeacher size={14} /> : <FaBook size={14} />}
                          </div>
                          <div>
                            <div className="font-bold text-lg text-[#191970]">{stat.value}</div>
                            <div className="text-xs">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 - Departments */}
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b pb-2 mb-3">Departments</h3>
                    <ul className="space-y-2">
                      {academicsMenuData.departments.map((dept, index) => (
                        <li key={index}>
                          <Link href={`/academics/departments/${dept.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`} className="hover:text-[#191970] flex items-center">
                            <FaGraduationCap className="mr-2 text-[#191970] text-xs" />
                            {dept}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3 - Programmes */}
                  <div>
                    <h3 className="font-semibold text-gray-900 border-b pb-2 mb-3">Programmes</h3>
                    <ul className="space-y-2">
                      <li><Link href="/academics/undergraduate" className="hover:text-[#191970]">Undergraduate Programmes</Link></li>
                      <li><Link href="/academics/postgraduate" className="hover:text-[#191970]">Postgraduate Programmes</Link></li>
                      <li><Link href="/academics/diploma" className="hover:text-[#191970]">Diploma Programmes</Link></li>
                      <li><Link href="/academics/certificate" className="hover:text-[#191970]">Certificate Courses</Link></li>
                      <li><Link href="/academics/phd" className="hover:text-[#191970]">PhD Programmes</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Description */}
                  <div className="bg-[#f0f8ff] p-4 rounded-md">
                    <h3 className="font-semibold text-[#191970] mb-2">Education for a Changing World!</h3>
                    <p className="text-sm text-gray-600">{academicsMenuData.description}</p>
                    <Link href="/academics" className="mt-3 inline-block text-sm text-white bg-[#191970] hover:bg-[#00008B] px-4 py-2 rounded-md transition-colors">
                      Explore Academics
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* Other Links */}
            {navLinks.map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="relative inline-block hover:text-[#00008B]"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#191970] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Search */}
          <div ref={searchContainerRef} className="relative ml-6">
            <form onSubmit={handleSearch}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`transition-all duration-300 border border-gray-300 rounded-full pl-10 pr-4 py-1 outline-none w-0 opacity-0 ${
                  searchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'
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
          <ul className="flex flex-col space-y-4 font-medium text-[#191970]">
            <li>
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full py-2"
              >
                <span>ABOUT</span>
                <span>{aboutOpen ? '−' : '+'}</span>
              </button>
              {aboutOpen && (
                <ul className="pl-4 mt-2 space-y-2 border-l-2 border-[#191970]">
                  <li><Link href="/about/overview" className="block py-1">Overview</Link></li>
                  <li><Link href="/about/why-davara" className="block py-1">WHY DAVARA</Link></li>
                  <li><Link href="/about/vision-mission" className="block py-1">Vision & Mission</Link></li>
                </ul>
              )}
            </li>
            
            <li>
              <button 
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="flex items-center justify-between w-full py-2"
              >
                <span>ACADEMICS</span>
                <span>{academicsOpen ? '−' : '+'}</span>
              </button>
              {academicsOpen && (
                <ul className="pl-4 mt-2 space-y-2 border-l-2 border-[#191970]">
                  <li><Link href="/academics/departments" className="block py-1">Departments</Link></li>
                  <li><Link href="/academics/programmes" className="block py-1">Programmes</Link></li>
                  <li><Link href="/academics/undergraduate" className="block py-1">Undergraduate</Link></li>
                  <li><Link href="/academics/postgraduate" className="block py-1">Postgraduate</Link></li>
                </ul>
              )}
            </li>
            
            {navLinks.map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="block py-2">
                  {item}
                </Link>
              </li>
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