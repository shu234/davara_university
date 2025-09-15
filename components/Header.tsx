'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import { FaSearch } from 'react-icons/fa';

// Type-safe throttle function
function throttle<T extends (...args: any[]) => void>(func: T, limit: number) {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function (this: any, ...args: Parameters<T>) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const aboutRef = useRef<HTMLLIElement>(null);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 10);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close About menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      console.log('Searching for:', value);
      // Call your search API here
    }, 500);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const navLinks = [
    { name: 'ACADEMICS', href: '/academics' },
    { name: 'PROGRAMMES', href: '/programmes' },
    { name: 'ADMISSIONS', href: '/admissions' },
    { name: 'INTERNATIONAL', href: '/international' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <ul className="flex space-x-8 text-gray-700 font-medium">
              {/* ABOUT Dropdown */}
              <li
                ref={aboutRef}
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className="cursor-pointer hover:text-uni-midnight-blue transition-colors relative flex items-center"
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen(!aboutOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setAboutOpen(false);
                  }}
                >
                  ABOUT
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-uni-midnight-blue transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Mega Menu */}
                {aboutOpen && (
                  <div
                    className="absolute left-0 mt-3 w-full max-w-[800px] bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-md py-6 px-6 grid grid-cols-3 gap-6 text-sm text-gray-700 animate-fadeIn"
                    role="menu"
                  >
                    {/* Column 1 */}
                    <ul className="space-y-2">
                      <li><Link href="/about/overview">Overview</Link></li>
                      <li><Link href="/about/why-davara">WHY DAVARA</Link></li>
                      <li><Link href="/about/approvals">Approvals & Recognitions</Link></li>
                      <li><Link href="/about/vision-mission">Vision & Mission</Link></li>
                      <li><Link href="/about/awards">Awards & Achievements</Link></li>
                      <li><Link href="/about/code-of-conduct">Code of Conduct</Link></li>
                      <li><Link href="/about/core-values">Core Values</Link></li>
                    </ul>

                    {/* Column 2 */}
                    <ul className="space-y-2">
                      <li className="font-semibold text-gray-900">Leadership</li>
                      <li><Link href="/about/chancellor">Chancellor</Link></li>
                      <li><Link href="/about/mres">MRES</Link></li>
                      <li><Link href="/about/directors-general">Directors General's</Link></li>
                      <li><Link href="/about/founder-director">Founder Director</Link></li>
                      <li><Link href="/about/ceo">CEO</Link></li>
                      <li><Link href="/about/honorary-director">Honorary Director</Link></li>
                      <li><Link href="/about/vice-chancellor">Vice Chancellor</Link></li>
                      <li><Link href="/about/registrar">Registrar</Link></li>
                      <li><Link href="/about/controller-exam">Controller of Examination</Link></li>
                    </ul>

                    {/* Column 3 */}
                    <ul className="space-y-2">
                      <li className="font-semibold text-gray-900">University Councils</li>
                      <li><Link href="/about/court-of-du">Court of DU</Link></li>
                      <li><Link href="/about/executive-council">Executive Council</Link></li>
                      <li><Link href="/about/academic-council">Academic Council</Link></li>
                      <li><Link href="/about/planning-board">Planning Board</Link></li>
                      <li><Link href="/about/finance-committee">Finance Committee</Link></li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Other Links */}
              {navLinks.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="hover:text-uni-midnight-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-uni-midnight-blue transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="ml-6 flex items-center border border-gray-300 rounded-full overflow-hidden"
              role="search"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-3 py-1 outline-none text-sm focus:ring-2 focus:ring-uni-midnight-blue rounded-l-full"
              />
              <button
                type="submit"
                aria-label="Search"
                className="px-3 py-1 bg-uni-midnight-blue text-white hover:bg-uni-dark transition-colors rounded-r-full"
              >
                <FaSearch />
              </button>
            </form>
          </nav>

          {/* Mobile Menu */}
          <HeaderMenu />
        </div>
      </Container>
    </header>
  );
}
