import React, { Component } from "react";

export class SetPin extends Component {
  render() {
    function onSubmit() {}

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center bg-slate-500 text-slate-200 p-4">
          <h1>Please set a secure pin:</h1>
          <div className="flex flex-col items-center">
            <input
              className="p-2 border border-gray-300 rounded bg-slate-900"
              type="password"
              id="password"
            />
            <button
              onClick={onSubmit()}
              className="submit-button mt-5"
              type="button"
              id="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
