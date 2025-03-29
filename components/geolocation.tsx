"use client";

import { useState } from "react";

export default function Geolocation() {
  const [location, setLocation] = useState<string>("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  const success = (position: GeolocationPosition) => {
    setLocation(
      `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`
    );
  };

  const error = () => {
    alert("Sorry, no position available.");
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      <p dangerouslySetInnerHTML={{ __html: location }}></p>
    </div>
  );
}
