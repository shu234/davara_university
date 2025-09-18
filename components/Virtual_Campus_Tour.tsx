'use client';

import { useEffect, useState } from 'react';

// Type for CMS data
interface CampusTourData {
  imageUrl?: string;
}

// Extend window type
declare global {
  interface Window {
    pannellum?: {
      viewer: (
        id: string,
        options: {
          type: 'equirectangular';
          panorama: string;
          autoLoad: boolean;
          showControls: boolean;
          compass: boolean;
        }
      ) => void;
    };
  }
}

export default function VirtualCampusTour() {
  const [tourImage, setTourImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch image from CMS
  useEffect(() => {
    fetch('https://your-wordpress-site.com/wp-json/custom/v1/campus-tour')
      .then((res) => res.json())
      .then((data: CampusTourData) => {
        setTourImage(data.imageUrl || '/campus-360.jpg');
      })
      .catch(() => setError('Failed to load campus tour'))
      .finally(() => setLoading(false));
  }, []);

  // Load pannellum safely only on client
  useEffect(() => {
    if (!tourImage) return;

    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.js';
    script.async = true;

    script.onload = () => {
      if (window.pannellum) {
        window.pannellum.viewer('panorama', {
          type: 'equirectangular',
          panorama: tourImage,
          autoLoad: true,
          showControls: true,
          compass: true,
        });
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [tourImage]);

  if (loading) {
    return <p className="text-center py-20">Loading campus tour...</p>;
  }
  if (error) {
    return <p className="text-center py-20 text-red-500">{error}</p>;
  }

  return (
    <div className="w-full h-[600px] rounded-2xl shadow-lg overflow-hidden">
      <div id="panorama" className="w-full h-full"></div>
    </div>
  );
}
