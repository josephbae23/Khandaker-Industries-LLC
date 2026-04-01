"use client";

import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "@/lib/basePath";

type LicenseItem = {
  label: string;
  fileName: string;
};

type LicenseGalleryPopupProps = {
  items: LicenseItem[];
  isRtl?: boolean;
};

export default function LicenseGalleryPopup({ items, isRtl = false }: LicenseGalleryPopupProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(
    () => (activeIndex === null ? null : items[activeIndex] ?? null),
    [activeIndex, items],
  );

  useEffect(() => {
    if (activeItem === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem]);

  return (
    <>
      <ul className="space-y-3">
        {items.map((doc, index) => (
          <li key={doc.fileName} className={`flex items-center gap-3 text-sm ${isRtl ? "flex-row-reverse" : ""}`}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-navy-200 bg-white text-navy-700 hover:text-gold-600 hover:border-gold-400 transition-colors"
            >
              <span>{doc.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {activeItem !== null && (
        <div
          className="fixed inset-0 z-[70] bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.label}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white border border-navy-200 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`flex items-center justify-between gap-4 p-4 border-b border-navy-100 ${isRtl ? "flex-row-reverse" : ""}`}>
              <h4 className="text-navy-900 font-semibold text-base">{activeItem.label}</h4>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="px-3 py-1.5 text-sm border border-navy-200 text-navy-700 hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                {isRtl ? "إغلاق" : "Close"}
              </button>
            </div>

            <div className="p-4 bg-sand-50 max-h-[80vh] overflow-auto">
              <img
                src={withBasePath(`/Licenses & Registrations/${encodeURIComponent(activeItem.fileName)}`)}
                alt={activeItem.label}
                className="w-full h-auto object-contain bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}