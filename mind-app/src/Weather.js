import { useState } from "react";

export const Weather = () => {
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLon, setCurrentLon] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  function getCurrentWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLat(position.coords.latitude);
          setCurrentLon(position.coords.longitude);

          // Call the weather API here
          const call =
            "https://api.openweathermap.org/data/3.0/onecall?lat=" +
            position.coords.latitude +
            "&lon=" +
            position.coords.longitude +
            "&appid=" +
            API_KEY;

          fetch(call)
            .then((response) => response.json())
            .then((data) => setCurrentWeather(data))
            .catch((error) => console.log(error));
        },
        error,
        { timeout: 10000 }
      );
    } else {
      console.log(
        "Unable to retrieve geolocation data, does your browser support it?"
      );
    }
  }

  function error() {
    console.log("Unable to retrieve your location.");
  }

  return {
    currentLat,
    currentLon,
    currentWeather,
    getCurrentWeather,
  };
};
