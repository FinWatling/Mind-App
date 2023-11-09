import React from "react";
import { useState } from "react";

export const MoodRating = () => {
  const [moodSelection, setMoodSelection] = useState("1");

  const onMoodChange = (e) => {
    setMoodSelection(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className=" pb-4 max-w-screen text-center content-center bg-slate-300 wp">
      <form>
        <h1 className="text-4xl drop-shadow-sm">Mood rating for today:</h1>
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
        <h1>Mood comment for today:</h1>
        <textarea
          className="border-solid border-2 border-black "
          placeholder="How are you feeling?"
        ></textarea>
        <br></br>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};
