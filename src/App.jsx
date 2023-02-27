import React from "react";
import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import TOM_TOM_API_KEY from "../tomTomApiKey";

export default function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(-118.4572302);
  const [latitude, setLatitude] = useState(34.1731309);

  useEffect(() => {
    // Initialize Tom Tom Map
    let map = tt.map({
      key: TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    });
    setMap(map);
    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <div className="app">
      <div ref={mapElement} className="map"></div>
      <div className="search-bar">
        <h4>Where to?</h4>
        <input
          type="text"
          id="longitude"
          className="longitude"
          placeholder="Put in longitude"
          onChange={(e) => {
            setLongitude(e.target.value);
          }}
        />
        <input
          type="text"
          id="latitude"
          className="latitude"
          placeholder="Put in latitude"
          onChange={(e) => {
            setLatitude(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
