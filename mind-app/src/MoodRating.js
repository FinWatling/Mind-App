import React from "react";
import { useState } from "react";

export const MoodRating = () => {
  const [moodSelection, setMoodSelection] = useState(1);
  const [moodNotes, setMoodNotes] = useState("");
  const [moodEntries, setMoodEntries] = useState([]);
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLon, setCurrentLon] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const onMoodChange = (e) => {
    setMoodSelection(e.target.value);
  };

  const onMoodNotesChange = (e) => {
    setMoodNotes(e.target.value);
  };

  function getCurrentDateTime() {
    const dateTime = new Date();
    let time = dateTime.getHours() + ":" + dateTime.getMinutes();
    let date =
      dateTime.getDate() +
      "/" +
      dateTime.getMonth() +
      "/" +
      dateTime.getFullYear();
    return date + " " + time;
  }

  function getCurrentWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log(
        "Unable to retrieve geolocation data, does your browser support it?"
      );
    }

    const API_KEY = "f961d88f5421dff04a4fbbcadfdc14ba";

    let call =
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
      currentLat +
      "&lon=" +
      currentLon +
      "&appid=" +
      API_KEY;

    fetch(call)
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data);
      })
      .catch((error) => console.log(error));
  }

  function success(position) {
    setCurrentLat(position.coords.latitude);
    setCurrentLon(position.coords.longitude);
  }

  function error() {
    console.log("Unable to retrieve your location.");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      getCurrentWeather();
    } catch {
      console.error(error);
    }

    const currentTempCelcius =
      currentWeather === null ? 0 : currentWeather?.current?.temp - 273.15;
    const currentWeatherDescription =
      currentWeather === null || ""
        ? ""
        : currentWeather.current.weather[0].description;

    const moodEntry = {
      moodrating: moodSelection,
      moodnotes: moodNotes,
      datetime: getCurrentDateTime(),
      currentweather: {
        currenttemp: currentTempCelcius,
        currentWeatherDescription: currentWeatherDescription,
      },
    };

    setMoodEntries((moodEntries) => [...moodEntries, moodEntry]);
    console.log(moodEntries);

    //localStorage.setItem("MoodEntries", JSON.stringify(moodEntry));
  };

  return (
    <div className=" pb-4 max-w-screen text-center content-center bg-slate-300 wp">
      <form>
        <h1 className="text-4xl drop-shadow-sm pb-4">Mood rating for today:</h1>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="1"
          name="mood-rating"
          id="1"
        ></input>
        <label className="radio-buttons" htmlFor="1">
          1
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="2"
          name="mood-rating"
          id="2"
        ></input>
        <label className="radio-buttons" htmlFor="2">
          2
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="3"
          name="mood-rating"
          id="3"
        ></input>
        <label className="radio-buttons" htmlFor="3">
          3
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="4"
          name="mood-rating"
          id="4"
        ></input>
        <label className="radio-buttons" htmlFor="4">
          4
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="5"
          name="mood-rating"
          id="5"
        ></input>
        <label className="radio-buttons" htmlFor="5">
          5
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="6"
          name="mood-rating"
          id="6"
        ></input>
        <label className="radio-buttons" htmlFor="6">
          6
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="7"
          name="mood-rating"
          id="7"
        ></input>
        <label className="radio-buttons" htmlFor="7">
          7
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="8"
          name="mood-rating"
          id="8"
        ></input>
        <label className="radio-buttons" htmlFor="8">
          8
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="9"
          name="mood-rating"
          id="9"
        ></input>
        <label className="radio-buttons" htmlFor="9">
          9
        </label>
        <input
          onChange={onMoodChange}
          className="radio-buttons"
          type="radio"
          value="10"
          name="mood-rating"
          id="10"
        ></input>
        <label className="radio-buttons" htmlFor="10">
          10
        </label>
        <h1 className="text-4xl drop-shadow-sm pb-4">
          Mood comment for today:
        </h1>
        <textarea
          onChange={onMoodNotesChange}
          className="border-solid border-2 border-black w-1/2 h-auto"
          placeholder="How are you feeling?"
        ></textarea>
        <br></br>
        <button onClick={onSubmit} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
