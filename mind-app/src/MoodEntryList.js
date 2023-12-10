import React from "react";
import { useState, useEffect } from "react";

const MoodEntryList = (props) => {
  const [dataMap, setDataMap] = useState(new Map());

  useEffect(() => {
    // Step 1: Retrieve JSON data from localStorage
    const jsonData = localStorage.getItem("MoodEntries");

    if (jsonData) {
      try {
        const dataObject = JSON.parse(jsonData);
        const mapFromObject = new Map(Object.entries(dataObject));
        setDataMap(mapFromObject);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  return (
    <div>
      <div className="card-container">
        {Array.from(dataMap).map(([key, value]) => (
          <div key={key} className="card">
            <h2>{value.datetime}</h2>
            <p>
              <strong>Mood Rating:</strong> {value.moodrating}
            </p>
            <p>
              <strong>Mood Notes:</strong> {value.moodnotes}
            </p>
            <div>
              <strong>Current Weather:</strong>
              <p>
                Temperature:{" "}
                {Math.round(value.currentweather.currenttemp) + "°C"}
              </p>
              <p>
                Description: {value.currentweather.currentWeatherDescription}
              </p>
            </div>
            <div>
              <a href="url" className="underline text-pink-800">
                Share this mood entry
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodEntryList;
