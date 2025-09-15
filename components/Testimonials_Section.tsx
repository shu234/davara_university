// 'use client';

// import Container from "./Container";
// import Slider from "react-slick";
// import Image from "next/image";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       type: "Student",
//       name: "Rahul Sharma",
//       quote:
//         "Shri Davara University has completely transformed my career path. The faculty support and research opportunities are world-class.",
//       image: "/images/front.png",
//     },
//     {
//       type: "Student",
//       name: "Ananya Verma",
//       quote:
//         "The campus environment is so vibrant and inclusive. I gained confidence and lifelong friendships here.",
//       image: "/images/student2.jpg",
//     },
//     {
//       type: "Faculty",
//       name: "Prof. Meera Iyer",
//       quote:
//         "At DU, we focus on holistic education—shaping not just scholars but responsible citizens.",
//       image: "/images/faculty1.jpg",
//     },
//     {
//       type: "Faculty",
//       name: "Dr. Arvind Patel",
//       quote:
//         "The research ecosystem here allows faculty and students to collaborate and innovate freely.",
//       image: "/images/mewithher.jpg",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     autoplaySpeed: 4000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 1 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="py-20 bg-[#F8F9FA]">
//       <Container>
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B2951] mb-12">
//           Testimonials
//         </h2>
//         <Slider {...settings}>
//           {testimonials.map((item, idx) => (
//             <div key={idx} className="px-4">
//               <div className="bg-white border-t-4 border-[#C9A96E] rounded-3xl p-6 md:p-8 shadow-lg flex flex-col items-center justify-between text-center h-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                
//                 {/* Profile Image */}
//                 <div className="relative w-20 h-20 mb-4 md:mb-6">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={80}
//                     height={80}
//                     className="rounded-full shadow-md object-cover w-20 h-20"
//                   />
//                 </div>

//                 {/* Quote */}
//                 <p className="italic text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
//                   "{item.quote}"
//                 </p>

//                 {/* Name and Type */}
//                 <h4 className="font-semibold text-[#1B2951] text-base md:text-lg">{item.name}</h4>
//                 <span className="text-xs md:text-sm text-[#C9A96E]">{item.type}</span>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </Container>
//     </section>
//   );
// }
