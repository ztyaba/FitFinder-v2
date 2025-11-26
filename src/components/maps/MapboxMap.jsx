import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE_URL,
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_ZOOM,
} from "@/lib/mapbox";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const DEFAULT_HEIGHT = "24rem";

export default function MapboxMap({ markers = [], height = DEFAULT_HEIGHT, markerColor = "#2563eb", onMapClick }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRefs = useRef([]);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: containerRef.current,
      style: MAPBOX_STYLE_URL,
      center: DEFAULT_MAP_CENTER,
      zoom: DEFAULT_MAP_ZOOM,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl({ showCompass: true }), "top-right");

    return () => {
      markerRefs.current.forEach(({ marker }) => {
        marker.remove();
      });
      markerRefs.current = [];

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    markerRefs.current.forEach(({ marker }) => {
      marker.remove();
    });
    markerRefs.current = [];

    const validMarkers = markers.filter((marker) => {
      return (
        marker &&
        typeof marker.latitude === "number" &&
        typeof marker.longitude === "number"
      );
    });

    if (validMarkers.length === 0) {
      mapRef.current.easeTo({ center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM, duration: 600 });
      return;
    }

    const bounds = new mapboxgl.LngLatBounds();

    validMarkers.forEach((markerData) => {
      const { latitude, longitude } = markerData;
      const marker = new mapboxgl.Marker({ color: markerData.color || markerColor })
        .setLngLat([longitude, latitude]);

      marker.getElement().addEventListener("click", () => {
        if (typeof markerData.onClick === "function") {
          markerData.onClick(markerData);
        }
      });

      marker.addTo(mapRef.current);
      markerRefs.current.push({ marker });
      bounds.extend([longitude, latitude]);
    });

    if (validMarkers.length === 1) {
      const [single] = validMarkers;
      mapRef.current.easeTo({ center: [single.longitude, single.latitude], zoom: 12, duration: 800 });
    } else {
      mapRef.current.fitBounds(bounds, { padding: 60, maxZoom: 14, duration: 1000 });
    }
  }, [markers, markerColor]);

  useEffect(() => {
    if (!mapRef.current) return;

    const handleClick = (e) => {
      if (typeof onMapClick === "function") {
        onMapClick(e);
      }
    };

    mapRef.current.on("click", handleClick);

    return () => {
      if (mapRef.current) {
        mapRef.current.off("click", handleClick);
      }
    };
  }, [onMapClick]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl" style={{ minHeight: height }}>
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
}
