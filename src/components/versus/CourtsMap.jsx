import { useMemo, useState } from "react";

import MapboxMap from "@/components/maps/MapboxMap";

export default function CourtsMap({ courts = [] }) {
  const [selected, setSelected] = useState(null);

  const markers = useMemo(
    () =>
      courts
        .filter(
          (court) =>
            court?.location &&
            typeof court.location.latitude === "number" &&
            typeof court.location.longitude === "number"
        )
        .map((court) => ({
          id: court.id,
          latitude: court.location.latitude,
          longitude: court.location.longitude,
          color: "#7c3aed",
          court,
          onClick: () =>
            setSelected({
              ...court,
              name: court.name,
              image: court.image || court.photo,
              type: "court",
              price: court.hourly_rate,
              rate: court.hourly_rate,
              rating: court.rating,
              isVenue: true,
              sport:
                Array.isArray(court.sports_supported) && court.sports_supported.length > 0
                  ? court.sports_supported[0].replace(/_/g, " ")
                  : court.venue_name,
            }),
        })),
    [courts]
  );

  if (markers.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center bg-slate-100 text-slate-600 rounded-2xl">
        <div className="text-center px-6">
          <p className="text-lg font-medium mb-2">No courts with map data</p>
          <p className="text-sm">Venues need latitude and longitude to appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <MapboxMap markers={markers} onMapClick={() => setSelected(null)} height="28rem" markerColor="#7c3aed" />

      {selected && (
        <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl z-50 animate-slide-up">
          <div className="p-4">

            {/* Top Image */}
            <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-200">
              {selected.image && (
                <img src={selected.image} className="w-full h-full object-cover" />
              )}
            </div>

            {/* Title */}
            <h2 className="mt-4 text-xl font-bold">{selected.name}</h2>

            {/* Subtitle */}
            <p className="text-gray-600">{selected.type || selected.sport}</p>

            {/* ⭐ Rating (auto-detect from item.rating) */}
            {selected.rating && (
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.round(selected.rating) ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-500 text-sm ml-1">{selected.rating}/5</span>
              </div>
            )}

            {/* Price */}
            {selected.price || selected.rate ? (
              <div className="text-blue-600 font-semibold text-lg mt-2">
                ${selected.price || selected.rate}
              </div>
            ) : null}

            {/* CTA Button */}
            <button className="mt-3 w-full py-3 bg-blue-600 text-white rounded-xl font-bold">
              {selected.type === "court" || selected.isVenue ? "View Venue" : "Book Session"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
