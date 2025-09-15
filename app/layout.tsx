// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Header from "@/components/About _the _University";
import Secondary_header from "@/components/Secondary_header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"
import Highlights from "@/components/Highlights"
import Announcement from "@/components/Announcement"
import Sort_Intro from "@/components/Sort_Intro"
import Academics from "@/components/Academics"
import VirtualCampusTour from "@/components/Virtual_Campus_Tour";
import Campus_life from "@/components/Campus_Life"
import Research_innovation from "@/components/Research_innovation"
import Placements_Career_Development from "@/components/Placements_Career_Development"
import News_Events from "@/components/News_Events"
import Achievements_Rankings from "@/components/Achievements_Rankings"
// import Alumni_Section from "@/components/Alumni_Section"
// import Testimonials_Section from "@/components/Testimonials_Section"
import Scholarships_Financial_Aid from "@/components/Scholarships_Financial_Aid"
import Blog from "@/components/Blog"
import Bold_Highlight from "@/components/Bold_Highlight"
// import Wrap_High_Intro from "@/components/Wrap_High_Intro";

export const metadata = {
  title: "My App",
  description: "Next.js layout example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>

      <body className="font-poppins antialiased">
        <Header/>
        <Secondary_header/>
        <Hero/>
        <Announcement/>
       
        {/* Announcement bar*/}
        <Highlights/>
        <Sort_Intro/>

        {/* <Wrap_High_Intro/> */}
        <Academics/>
        <VirtualCampusTour/>
        <Campus_life/>h
        <Research_innovation/>
        <Placements_Career_Development/>
        <News_Events/>
        <Achievements_Rankings/>
        {/* <Alumni_Section/> */}
        {/* <Testimonials_Section/> */}
        <Scholarships_Financial_Aid/>
        <Blog/>
        <Bold_Highlight/>
       

        
                
        {children}
        <Footer/>
        
      </body>
    </html>

  );
}
