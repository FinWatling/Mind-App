import React from "react";
import { useState, useEffect } from "react";
import { Encryption } from "./Encryption";
const { decrypt, encrypt } = Encryption();

const MoodEntryList = (props) => {
  const [dataMap, setDataMap] = useState(new Map());
  const [pin, setPin] = useState("");

  useEffect(() => {
    setPin(localStorage.getItem("pin").toString());
    console.log(decrypt(encrypt("123", "123").toString(), "123").toString());

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
              <strong>Mood Rating:</strong>{" "}
              {decrypt(value.moodrating, pin).toString()}
            </p>
            <p>
              <strong>Mood Notes:</strong>{" "}
              {decrypt(value.moodnotes, pin).toString()}
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
