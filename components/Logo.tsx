'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/davara-logo.png"   // place your logo in public/images/davara-logo.png
        alt="Davara University Logo"
        width={160}                     // adjust as needed
        height={50}
        priority                        // improves loading for above-the-fold content
      />
      {/* Optional Logo Text */}
      {/* <span className="font-bold text-xl text-uni-midnight-blue">
        Davara University
      </span> */}
    </Link>
  );
}
