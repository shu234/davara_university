"use client";

import { useEffect, useRef, useState } from "react";

// Types
type Notice = { title: string; date?: string; pdfUrl: string };
type Announcement = { title: string; pdfUrl: string };

// Generic API fetcher (future-ready for WordPress REST/GraphQL)
async function fetchWPContent<T>(endpoint: string, mockData: T[]): Promise<T[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/${endpoint}`);
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data;
  } catch {
    console.warn(`⚠️ Using mock data for ${endpoint}`);
    return mockData;
  }
}

// Reusable PDF Icon
const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="#191970"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M6 2C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM6 20V4h6v5h5v11H6zm2-4h2v2H8v-2zm4 0h2v2h-2v-2z" />
  </svg>
);

// Reusable Scrolling List Component
function ScrollingList<T extends { title: string; pdfUrl: string; date?: string }>({
  title,
  icon,
  data,
  pauseRef,
}: {
  title: string;
  icon: React.ReactNode;
  data: T[];
  pauseRef: React.MutableRefObject<{ value: boolean; timeout: ReturnType<typeof setTimeout> | null }>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!data.length) return;
    let pos = 0;
    const speed = 0.5;
    let frame: number;

    const step = () => {
      const el = containerRef.current;
      if (el && !pauseRef.current.value) {
        pos += speed;
        if (pos >= el.scrollHeight / 2) pos = 0;
        el.scrollTop = pos;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [data, pauseRef]);

  const handleUserScroll = () => {
    pauseRef.current.value = true;
    if (pauseRef.current.timeout) clearTimeout(pauseRef.current.timeout);
    pauseRef.current.timeout = setTimeout(() => {
      pauseRef.current.value = false;
    }, 3000);
  };

  return (
    <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold px-6 py-4 border-b sticky top-0 z-20 bg-gradient-to-r from-[#191970] to-blue-900 text-white flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div
        ref={containerRef}
        className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100"
        onMouseEnter={() => (pauseRef.current.value = true)}
        onMouseLeave={() => (pauseRef.current.value = false)}
        onWheel={handleUserScroll}
        onTouchStart={handleUserScroll}
      >
        <ul className="space-y-4 p-6">
          {data.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-start p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-all group"
            >
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-lg group-hover:text-[#191970] transition">
                  {item.title}
                </p>
                {item.date && (
                  <p className="text-gray-500 mt-1 text-sm bg-blue-100 px-2 py-1 rounded-md inline-block">
                    {item.date}
                  </p>
                )}
              </div>
              {item.pdfUrl && item.pdfUrl !== "#" && (
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center font-semibold ml-4 transition-transform hover:scale-110"
                  aria-label={`View PDF for ${item.title}`}
                  style={{ color: "#191970" }}
                >
                  <PdfIcon />
                  <span className="text-xs mt-1">PDF</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function NoticesAndAnnouncements() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  const pauseNotices = useRef({ value: false, timeout: null });
  const pauseAnnouncements = useRef({ value: false, timeout: null });

  // Fetch data (replace with WP API later)
  useEffect(() => {
    const fetchData = async () => {
      const mockNotices: Notice[] = [
        { title: "Fall Semester Registration Opens", date: "2023-08-15", pdfUrl: "#" },
        { title: "Tuition Fee Payment Deadline", date: "2023-09-10", pdfUrl: "#" },
        { title: "Midterm Examination Schedule", date: "2023-10-05", pdfUrl: "#" },
      ];

      const mockAnnouncements: Announcement[] = [
        { title: "New Library Hours Effective Next Week", pdfUrl: "#" },
        { title: "Career Fair 2023: Register Now", pdfUrl: "#" },
        { title: "Guest Lecture on AI in Education", pdfUrl: "#" },
      ];

      const noticesData = await fetchWPContent("notices", mockNotices);
      const announcementsData = await fetchWPContent("announcements", mockAnnouncements);

      // duplicate for continuous scroll
      setNotices([...noticesData, ...noticesData]);
      setAnnouncements([...announcementsData, ...announcementsData]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#191970] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading announcements...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          University <span className="text-[#191970]">Announcements</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <ScrollingList
            title="Notices"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            data={notices}
            pauseRef={pauseNotices}
          />

          <ScrollingList
            title="Announcements"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            }
            data={announcements}
            pauseRef={pauseAnnouncements}
          />
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Scroll or hover to pause auto-scrolling</p>
        </div>
      </div>
    </section>
  );
}
