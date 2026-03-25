"use client";
import { useEffect, useRef } from "react";

interface Office {
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
}

interface OfficesMapProps {
  offices: Office[];
  isRtl?: boolean;
}

export default function OfficesMap({ offices, isRtl = false }: OfficesMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!mapContainer.current || initialized.current) return;

    // Use requestAnimationFrame to ensure DOM is ready
    const frameId = requestAnimationFrame(() => {
      if (!mapContainer.current || initialized.current) return;

      // Dynamic import to avoid SSR issues
      import("leaflet").then((L) => {
        if (!mapContainer.current) return;

        // Clear container if it already has Leaflet content
        if (mapContainer.current.children.length) {
          mapContainer.current.innerHTML = "";
        }

        // Import CSS dynamically
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
        document.head.appendChild(link);

        // Fix default icon issue
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/shadow.png",
        });

        // Create custom gold icon
        const customIcon = L.icon({
          iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4af37' stroke='%231e293b' stroke-width='2'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3' fill='%231e293b'/%3E%3C/svg%3E",
          iconSize: [32, 40],
          iconAnchor: [16, 40],
          popupAnchor: [0, -40],
        });

        try {
          // Initialize map - container is now ready
          const map = L.map(mapContainer.current).setView([22.5, 64.8], 3);
          mapInstance.current = map;
          initialized.current = true;

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
            maxZoom: 19,
          }).addTo(map);

          // Add markers
          offices.forEach((office) => {
            L.marker([office.lat, office.lng], { icon: customIcon })
              .bindPopup(
                `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; text-align: center; min-width: 150px;">
                  <h4 style="margin: 8px 0; color: #1e293b; font-weight: 600;">${office.name}</h4>
                  <p style="margin: 4px 0; color: #475569; font-size: 12px;">${office.address}</p>
                  <p style="margin: 4px 0; color: #d4af37; font-size: 12px; font-weight: 600;">${office.phone}</p>
                </div>`
              )
              .addTo(map);
          });
        } catch (error) {
          console.error("Error initializing map:", error);
          initialized.current = false;
        }
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
        initialized.current = false;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      dir={isRtl ? "rtl" : "ltr"}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        position: "relative",
        zIndex: 10,
      }}
    />
  );
}
