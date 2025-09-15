"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/Users/shubhammahant/Desktop/university/davara_university/public/images/davara-logo.png"   // 👈 put your logo inside /public/images/logo.png
        alt="University Logo"
        width={160}              // adjust size as per your design
        height={50}
        priority                 // loads faster for above-the-fold
      />
      {/* Optional: Logo Text */}
      {/* <span className="font-bold text-xl text-uni-midnight-blue">Davara University</span> */}
    </Link>
  );
}
