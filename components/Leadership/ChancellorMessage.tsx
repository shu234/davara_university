"use client";

import Image from "next/image";

export default function ChancellorMessage() {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-gradient-to-r from-[#F8F9FA] to-[#E8F1F5] overflow-hidden">
      {/* Optional soft overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
            src="/images/chancellor.jpg"
            alt="Mrs. Preeti Davara"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Message Text */}
        <div className="md:w-2/3 text-gray-700">
          <h2 className="text-3xl font-bold text-[#1B2951] mb-4">
            Chancellor&apos;s Message
          </h2>
          <p className="mb-2 font-semibold text-lg">
            Mrs. Preeti Davara
            <br />
            Hon&apos;ble Chancellor
          </p>
          <p className="mb-4">
            Leading Shri Davara University is a wonderful honour and a source of great pleasure for me.
          </p>
          <p className="mb-4">
            The higher education landscape has seen substantial changes in terms of methodology, global needs, and issues throughout the post-pandemic period. In order to bring about a change in the sphere of higher education, Shri Davara University adopts policies properly reflected in the National Education Policy 2020, emphasising progress towards interdisciplinary studies.
          </p>
          <p className="mb-4">
            With the goal of developing core competencies in students by integrating information with skills on the basis of ethics and values, our main focus is on building an optimal and lively platform for excellence in knowledge enhancement and bridging the gap between academia and industry.
          </p>
          <p className="mb-4">
            Knowledge is power, and Shri Davara University has been on the path of providing quality education through fostering the development of young human resources with moral and ethical principles while enhancing their leadership abilities. The core of the university is its research culture and creative teaching methods that provide a learning environment focused on the needs of the students.
          </p>
          <p className="mb-4">
            Our curriculum, which is incredibly modern and has been benchmarked against the academic offerings of other reputable schools, is the outcome of fantastic think tanks that include numerous faculty members, industry professionals, and research organisations.
          </p>
          <p className="mb-4 italic text-lg text-[#1B2951]/80">
            &ldquo;The finest education is that which makes our life in harmony with all existence, rather than only giving us facts.&rdquo; – Guru Rabindranath Tagore
          </p>
          <p>
            The students at Shri Davara University can look forward to a fresh academic life filled with love, happiness, and creative knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}
