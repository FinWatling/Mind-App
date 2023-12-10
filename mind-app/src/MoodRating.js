import React from "react";
import { Weather } from "./Weather";
import { useState, useEffect } from "react";
import { Encryption } from "./Encryption";

export const MoodRating = () => {
  const [moodSelection, setMoodSelection] = useState(1);
  const [moodNotes, setMoodNotes] = useState("");
  const [password, setPassword] = useState("");
  const [moodEntries, setMoodEntries] = useState([]);

  const { currentWeather, getCurrentWeather } = Weather();
  const { encrypt } = Encryption();

  useEffect(() => {
    // Get existing data from localStorage
    const existingData = localStorage.getItem("MoodEntries");

    // If there is existing data, parse it and append the new entry
    if (existingData) {
      try {
        const parsedData = JSON.parse(existingData);
        const newData = [...parsedData, ...moodEntries];
        localStorage.setItem("MoodEntries", JSON.stringify(newData));
      } catch (error) {
        console.error("Error parsing existing data:", error);
      }
    } else {
      // If no existing data, set the current moodEntries
      localStorage.setItem("MoodEntries", JSON.stringify(moodEntries));
    }
  }, [moodEntries]);

  useEffect(() => {
    getCurrentWeather();
  }, [moodEntries]);

  const onMoodChange = (e) => {
    setMoodSelection(e.target.value);
  };

  const onMoodNotesChange = (e) => {
    setMoodNotes(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function getCurrentDateTime() {
    const dateTime = new Date();
    let time =
      dateTime.getHours() +
      ":" +
      dateTime.getMinutes() +
      ":" +
      dateTime.getMilliseconds();
    let date =
      dateTime.getDate() +
      "/" +
      dateTime.getMonth() +
      "/" +
      dateTime.getFullYear();
    return date + " " + time;
  }

  function onSubmit(e) {
    e.preventDefault();

    const currentTempCelcius =
      currentWeather === null ? 0 : currentWeather?.current?.temp - 273.15;
    const currentWeatherDescription =
      currentWeather === null
        ? "No Location Data"
        : currentWeather?.current?.weather[0]?.description;

    const moodEntry = {
      moodrating: encrypt(moodSelection, password).toString(),
      moodnotes: encrypt(moodNotes, password).toString(),
      datetime: getCurrentDateTime(),
      currentweather: {
        currenttemp: currentTempCelcius,
        currentWeatherDescription: currentWeatherDescription,
      },
    };

    setMoodEntries((moodEntries) => [...moodEntries, moodEntry]);
  }

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
        <label className="" htmlFor="password">
          Password:
        </label>
        <input
          onChange={onPasswordChange}
          type="password"
          id="password"
        ></input>
        <br></br>
        <button onClick={onSubmit} className="submit-button mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};
