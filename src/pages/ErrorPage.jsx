import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { tabTitle } from "../Utils/tabTitle";

function ErrorPage() {
  tabTitle("Error");
  const navigate = useNavigate();

  return (
    <div className="error">
      <svg width="50" height="50" viewBox="0 0 24 24">
        <path
          fill="#121212"
          d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9zm0 10c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5s2-1.12 2-2.5s-.895-2.5-2-2.5zM9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z"
        />
      </svg>
      <p className="error-message">Whoops! An error!</p>
      <button onClick={() => navigate(-1)} className="standard-button">
        Go back one page
      </button>
    </div>
  );
}

export default ErrorPage;
