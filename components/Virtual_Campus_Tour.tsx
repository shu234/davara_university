"use client";

import { useEffect, useState } from "react";

export default function VirtualCampusTour() {
  const [tourImage, setTourImage] = useState<string | null>(null);

  useEffect(() => {
    // Example: fetch from CMS (replace with real API)
    fetch("https://your-cms.com/api/campus-tour")
      .then((res) => res.json())
      .then((data) => {
        setTourImage(data.imageUrl || "/campus-360.jpg");
      });
  }, []);

  useEffect(() => {
    if (tourImage) {
      // Dynamically load pannellum
      import("pannellum/build/pannellum.js").then((pannellumLib) => {
        // pannellum is default export on window
        const pannellum = (pannellumLib as any).default || (window as any).pannellum;

        if (pannellum) {
          pannellum.viewer("panorama", {
            type: "equirectangular",
            panorama: tourImage,
            autoLoad: true,
            showControls: true,
            compass: true,
          });
        }
      });
    }
  }, [tourImage]);

  return (
    <div className="w-full h-[600px] rounded-2xl shadow-lg overflow-hidden">
      {/* This div will host pannellum viewer */}
      <div id="panorama" className="w-full h-full"></div>

      <p></p>
    </div>
  );
}
