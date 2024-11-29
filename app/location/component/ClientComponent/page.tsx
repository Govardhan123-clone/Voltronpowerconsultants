"use client";

import { useState } from "react";

const LocationPage = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="location-page">
      <h1>Our Location</h1>
      <button onClick={toggleMap} className="toggle-map-button">
        {showMap ? "Hide" : "Show"} Map
      </button>

      {showMap && (
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=...your-map-embed-url..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      )}

      <style jsx>{`
        .location-page {
          text-align: center;
          padding: 20px;
        }
        .toggle-map-button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        .toggle-map-button:hover {
          background-color: #005bb5;
        }
        .map-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
        iframe {
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default LocationPage;
