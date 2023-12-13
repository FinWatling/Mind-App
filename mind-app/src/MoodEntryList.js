import React, { useState, useEffect } from "react";
import { Encryption } from "./Encryption";
const { decrypt } = Encryption();

const MoodEntryList = (props) => {
  const [dataMap, setDataMap] = useState(new Map());
  
  useEffect(() => {
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

  function onShare(value) {
    const encryptedMoodRating = value.moodrating;
    const encryptedMoodNotes = value.moodnotes;
  
    const shareData = {
      title: "Mood Entry",
      text: `DateTime Info: ${value.datetime} \nEncrypted Mood Rating: ${encryptedMoodRating}\nEncrypted Mood Notes: ${encryptedMoodNotes}\nTemperature: ${Math.round(value.currentweather.currenttemp)}°C\nDescription: ${value.currentweather.currentWeatherDescription}`,
    };
  
    navigator.share(shareData)
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  }

  return (
    <div className="bg-gray-800">
      <div className="card-container">
        {Array.from(dataMap).reverse().map(([key, value]) => (
          <div key={key} className="card">
            <h2>{value.datetime}</h2>
            <p>
              <strong>Mood Rating:</strong>{" "}
              {decrypt(value.moodrating, localStorage.getItem("pin"))}
              {"/10"}
            </p>
            <p>
              <strong>Mood Notes:</strong>{" "}
              {decrypt(value.moodnotes, localStorage.getItem("pin"))}
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
              <button
                onClick={() => onShare(value)}
                className="submit-button mt-3"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodEntryList;
