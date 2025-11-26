import { useMemo, useState } from "react";

import MapboxMap from "@/components/maps/MapboxMap";

export default function MapView({ professionals = [] }) {
  const [selected, setSelected] = useState(null);

  const validProfessionals = useMemo(
    () =>
      professionals.filter(
        (professional) =>
          professional?.location &&
          typeof professional.location.latitude === "number" &&
          typeof professional.location.longitude === "number"
      ),
    [professionals]
  );

  const markers = useMemo(
    () =>
      validProfessionals.map((professional) => ({
        id: professional.id,
        latitude: professional.location.latitude,
        longitude: professional.location.longitude,
        color: "#2563eb",
        professional,
        onClick: () =>
          setSelected({
            ...professional,
            name: professional.full_name,
            image: professional.profile_picture_url || professional.image,
            type:
              professional.primary_sport ||
              (Array.isArray(professional.specialties)
                ? professional.specialties[0]?.replace(/_/g, " ")
                : undefined),
            price:
              typeof professional.hourly_rate === "number"
                ? professional.hourly_rate
                : undefined,
            rate: professional.hourly_rate,
            rating: professional.rating,
          }),
      })),
    [validProfessionals]
  );

  if (markers.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center bg-slate-100 text-slate-600 rounded-2xl">
        <div className="text-center">
          <p className="text-lg font-medium mb-2">No location data available</p>
          <p className="text-sm">
            Professionals need location coordinates to appear on the map
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <MapboxMap markers={markers} onMapClick={() => setSelected(null)} height="24rem" />

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
