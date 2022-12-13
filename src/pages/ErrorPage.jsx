import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Whoops! An error!</h2>
      <button onClick={() => navigate(-1)} className="standard-button">
        Go back one page
      </button>
    </>
  );
}

export default ErrorPage;
