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

function buildEmbedUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
}

function buildDirectionsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?daddr=${lat},${lng}`;
}

export default function OfficesMap({ offices, isRtl = false }: OfficesMapProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {offices.map((office) => (
        <div
          key={`${office.name}-${office.lat}-${office.lng}`}
          className="border border-navy-100 bg-white shadow-card overflow-hidden"
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div className={`flex items-center justify-between gap-4 px-4 py-3 border-b border-navy-100 ${isRtl ? "flex-row-reverse" : ""}`}>
            <div>
              <h3 className="text-navy-900 font-semibold text-sm tracking-wide">{office.name}</h3>
              <p className="text-navy-500 text-xs mt-1">{office.address}</p>
            </div>
            <a
              href={buildDirectionsUrl(office.lat, office.lng)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-gold-600 hover:text-gold-700 text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {isRtl ? "الاتجاهات" : "Directions"}
            </a>
          </div>

          <div className="relative w-full aspect-[3/2]">
            <iframe
              title={`${office.name} Google Map`}
              src={buildEmbedUrl(office.lat, office.lng)}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
}
