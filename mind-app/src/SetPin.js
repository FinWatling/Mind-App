import React, { useState } from "react";
import { Encryption } from "./Encryption";

export const SetPin = () => {
  const { encrypt, decrypt } = Encryption();

  const [password, setPassword] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    console.log(password);
    localStorage.setItem("loggedin", true);
    window.location.reload(true);
  }

  function getPassword() {
    return password;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-slate-500 text-slate-200 p-4">
        <h1>Please set a secure pin:</h1>
        <div className="flex flex-col items-center">
          <input
            className="p-2 border border-gray-300 rounded bg-slate-900"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => onSubmit(e)}
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
};

// Export the getPassword function
export const getPassword = SetPin.getPassword;
