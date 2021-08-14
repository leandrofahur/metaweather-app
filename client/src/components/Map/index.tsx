import { useState, useEffect, useRef } from 'react';

import mapbox, { Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface IMap {
  latitude: number;
  longitude: number;
}

const Map = ({ latitude, longitude }: IMap) => {
  const [map, setMap] = useState<mapbox.Map>();
  const mapRef = useRef(null);

  useEffect(() => {
    const ref = mapRef.current;

    if (typeof window === 'undefined' || ref === null) {
      return;
    }

    const mapboxMap = new mapbox.Map({
      container: ref,
      accessToken: process.env.MAPBOX_API_KEY,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 9,
    });

    const marker = new Marker()
      .setLngLat([longitude, latitude])
      .addTo(mapboxMap);

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, [latitude, longitude]);

  return (
    <div
      ref={mapRef}
      style={{ width: '500px', height: '500px', marginTop: '2rem' }}
    />
  );
};

export { Map };
