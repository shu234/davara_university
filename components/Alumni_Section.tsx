// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const alumniStories = [
//   {
//     name: "Ravi Sharma",
//     batch: "B.Tech 2015",
//     story:
//       "My journey at Shri Davara University was transformative. The supportive faculty and campus life shaped my career in IT.",
//     image: "/images/alumni1.jpg",
//   },
//   {
//     name: "Priya Mehta",
//     batch: "MBA 2018",
//     story:
//       "The university gave me not just education but leadership opportunities that helped me excel in corporate strategy roles.",
//     image: "/images/alumni2.jpg",
//   },
//   {
//     name: "Aman Verma",
//     batch: "PhD 2020",
//     story:
//       "The research facilities and mentorship at DU were world-class. I’m proud to be part of this legacy.",
//     image: "/images/alumni3.jpg",
//   },
// ];

// export default function AlumniSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrent((prev) => (prev + 1) % alumniStories.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#F8F9FA] py-16">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-12">
//           Our Proud Alumni
//         </h2>

//         {/* Carousel */}
//         <div className="relative w-full max-w-3xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//               className="bg-[#E8F1F5] shadow-lg rounded-2xl p-8 flex flex-col items-center"
//             >
//               <img
//                 src={alumniStories[current].image}
//                 alt={alumniStories[current].name}
//                 className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#C9A96E]"
//               />
//               <p className="text-[#1B2951] italic mb-4">
//                 "{alumniStories[current].story}"
//               </p>
//               <h4 className="font-semibold text-lg text-[#1B2951]">
//                 {alumniStories[current].name}
//               </h4>
//               <p className="text-[#555] text-sm">{alumniStories[current].batch}</p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Dots */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {alumniStories.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-3 h-3 rounded-full transition ${
//                   index === current ? "bg-[#C9A96E]" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Alumni Association Link + CTA */}
//         <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
//           <Link
//             href="/alumni-association"
//             className="px-6 py-3 bg-[#E8F1F5] hover:bg-[#d3e6ee] text-[#1B2951] font-semibold rounded-lg shadow-md transition"
//           >
//             Visit Alumni Association
//           </Link>
//           <Link
//             href="/connect-alumni"
//             className="px-6 py-3 bg-[#1B2951] hover:bg-[#2c3b6e] text-white font-semibold rounded-lg shadow-md transition"
//           >
//             Connect with Alumni Network
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
