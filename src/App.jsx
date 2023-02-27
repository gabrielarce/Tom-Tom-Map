import React from "react";
import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import TOM_TOM_API_KEY from "../tomTomApiKey";

export default function App() {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: TOM_TOM_API_KEY,
      container: mapElement.current,
    });
    setMap(map);
  }, []);
  console.log("component loaded");
  return (
    <div className="app">
      <div ref={mapElement} className="map"></div>
    </div>
  );
}
