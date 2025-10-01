import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Star, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Leaflet core + CSS
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// --- Fix default marker icons in Vite production builds ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).toString(),
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString(),
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString(),
});
// -----------------------------------------------------------

export default function MapView({ professionals = [] }) {
  // Filter to only those with valid coordinates
  const validProfessionals = React.useMemo(
    () =>
      professionals.filter(
        (p) =>
          p?.location &&
          typeof p.location.latitude === "number" &&
          typeof p.location.longitude === "number"
      ),
    [professionals]
  );

  // Default to San Francisco if no coordinates available
  const defaultCenter = [37.7749, -122.4194];

  // Compute map center (average of provided coords)
  const center = React.useMemo(() => {
    if (validProfessionals.length === 0) return defaultCenter;

    const { latSum, lngSum } = validProfessionals.reduce(
      (acc, p) => ({
        latSum: acc.latSum + p.location.latitude,
        lngSum: acc.lngSum + p.location.longitude,
      }),
      { latSum: 0, lngSum: 0 }
    );

    return [latSum / validProfessionals.length, lngSum / validProfessionals.length];
  }, [validProfessionals]);

  return (
    <div className="h-96 w-full">
      {validProfessionals.length > 0 ? (
        <MapContainer
          center={center}
          zoom={11}
          className="h-full w-full rounded-2xl"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {validProfessionals.map((professional) => (
            <Marker
              key={professional.id}
              position={[
                professional.location.latitude,
                professional.location.longitude,
              ]}
            >
              <Popup className="professional-popup">
                <div className="p-2 min-w-64">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {professional.full_name}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-slate-900">
                      ${professional.hourly_rate}/hour
                    </span>
                  </div>

                  {typeof professional.rating === "number" && (
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {professional.rating.toFixed(1)}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-3">
                    {(professional.specialties || []).slice(0, 2).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {String(specialty).replace(/_/g, " ")}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600">
                    {professional.location.address ||
                      `${professional.location.city}, ${professional.location.state}`}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <div className="h-full flex items-center justify-center bg-slate-100 text-slate-600 rounded-2xl">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">No location data available</p>
            <p className="text-sm">
              Professionals need location coordinates to appear on the map
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
