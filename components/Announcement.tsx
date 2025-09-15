'use client';

import { useEffect, useRef, useState } from 'react';

type Notice = { title: string; date: string; pdfUrl: string };
type Announcement = { title: string; pdfUrl: string };

// Raw WordPress API types (adjust if your WP API differs)
interface WPNotice {
  title: { rendered: string };
  acf: { date: string; pdf_url: string };
}

interface WPAnnouncement {
  title: { rendered: string };
  acf: { pdf_url: string };
}

export default function NoticesAndAnnouncements() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const noticesRef = useRef<HTMLDivElement>(null);
  const announcementsRef = useRef<HTMLDivElement>(null);
  const pauseNotices = useRef<{ value: boolean; timeout: NodeJS.Timeout | null }>({ value: false, timeout: null });
  const pauseAnnouncements = useRef<{ value: boolean; timeout: NodeJS.Timeout | null }>({ value: false, timeout: null });

  // Fetch data from WordPress
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Notices
        const noticesRes = await fetch(
          'https://your-wordpress-site.com/wp-json/wp/v2/notices?per_page=100'
        );
        const noticesData: WPNotice[] = await noticesRes.json();
        const formattedNotices: Notice[] = noticesData.map((n) => ({
          title: n.title.rendered,
          date: n.acf.date,
          pdfUrl: n.acf.pdf_url,
        }));
        setNotices([...formattedNotices, ...formattedNotices]); // duplicate for scroll

        // Announcements
        const announcementsRes = await fetch(
          'https://your-wordpress-site.com/wp-json/wp/v2/announcements?per_page=100'
        );
        const announcementsData: WPAnnouncement[] = await announcementsRes.json();
        const formattedAnnouncements: Announcement[] = announcementsData.map((a) => ({
          title: a.title.rendered,
          pdfUrl: a.acf.pdf_url,
        }));
        setAnnouncements([...formattedAnnouncements, ...formattedAnnouncements]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Auto-scroll
  const setupReel = (
    ref: React.RefObject<HTMLDivElement>,
    pauseRef: typeof pauseNotices
  ) => {
    let pos = 0;
    const speed = 0.3;

    const step = () => {
      const el = ref.current;
      if (el && !pauseRef.current.value) {
        pos += speed;
        if (pos >= el.scrollHeight / 2) pos = 0;
        el.scrollTop = pos;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (notices.length) setupReel(noticesRef, pauseNotices);
    if (announcements.length) setupReel(announcementsRef, pauseAnnouncements);
  }, [notices, announcements]);

  const handleUserScroll = (pauseRef: typeof pauseNotices) => {
    pauseRef.current.value = true;
    if (pauseRef.current.timeout) clearTimeout(pauseRef.current.timeout);
    pauseRef.current.timeout = setTimeout(() => {
      pauseRef.current.value = false;
    }, 3000);
  };

  const PdfIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="#191970"
      viewBox="0 0 24 24"
    >
      <path d="M6 2C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM6 20V4h6v5h5v11H6zm2-4h2v2H8v-2zm4 0h2v2h-2v-2z" />
    </svg>
  );

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Notices */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <h3 className="text-2xl font-bold px-6 py-4 border-b sticky top-0 z-20 bg-[#191970] text-white">
            Notices
          </h3>
          <div
            className="h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100"
            ref={noticesRef}
            onMouseEnter={() => (pauseNotices.current.value = true)}
            onMouseLeave={() => (pauseNotices.current.value = false)}
            onWheel={() => handleUserScroll(pauseNotices)}
            onTouchStart={() => handleUserScroll(pauseNotices)}
          >
            <ul className="space-y-5 p-6">
              {notices.map((notice, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b last:border-b-0 pb-3 hover:bg-blue-50 transition-colors rounded-md"
                >
                  <div>
                    <p className="text-gray-800 font-semibold text-lg">{notice.title}</p>
                    <p className="text-gray-500 mt-1 text-sm italic">{notice.date}</p>
                  </div>
                  {notice.pdfUrl && notice.pdfUrl !== '#' && (
                    <a
                      href={notice.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center font-semibold ml-5"
                      style={{ color: '#191970' }}
                    >
                      <PdfIcon />
                      <span className="text-sm mt-1">PDF</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Announcements */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <h3 className="text-2xl font-bold px-6 py-4 border-b sticky top-0 z-20 bg-[#191970] text-white">
            Announcements
          </h3>
          <div
            className="h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100"
            ref={announcementsRef}
            onMouseEnter={() => (pauseAnnouncements.current.value = true)}
            onMouseLeave={() => (pauseAnnouncements.current.value = false)}
            onWheel={() => handleUserScroll(pauseAnnouncements)}
            onTouchStart={() => handleUserScroll(pauseAnnouncements)}
          >
            <ul className="space-y-5 p-6">
              {announcements.map((announcement, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b last:border-b-0 pb-3 hover:bg-blue-50 transition-colors rounded-md"
                >
                  <p className="font-semibold text-lg">{announcement.title}</p>
                  {announcement.pdfUrl && announcement.pdfUrl !== '#' && (
                    <a
                      href={announcement.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center font-semibold ml-5"
                      style={{ color: '#191970' }}
                    >
                      <PdfIcon />
                      <span className="text-sm mt-1">PDF</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
