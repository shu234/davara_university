'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'ACADEMICS', href: '/academics' },
  { name: 'PROGRAMMES', href: '/programmes' },
  { name: 'ADMISSIONS', href: '/admissions' },
  { name: 'INTERNATIONAL', href: '/international' },
  { name: 'CONTACT US', href: '/contact' },
];

const HeaderMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="text-uni-midnight-blue text-2xl focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 z-40 animate-fadeIn">
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-700 font-medium hover:text-uni-midnight-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Optional About submenu for mobile */}
            <li className="mt-4 border-t pt-4">
              <span className="text-gray-700 font-semibold">ABOUT</span>
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link href="/about/overview" className="block hover:text-uni-midnight-blue">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/about/why-davara" className="block hover:text-uni-midnight-blue">
                    WHY DAVARA
                  </Link>
                </li>
                <li>
                  <Link href="/about/approvals" className="block hover:text-uni-midnight-blue">
                    Approvals &amp; Recognitions
                  </Link>
                </li>
                <li>
                  <Link href="/about/vision-mission" className="block hover:text-uni-midnight-blue">
                    Vision &amp; Mission
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
