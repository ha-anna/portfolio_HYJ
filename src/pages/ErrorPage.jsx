import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h2>Whoops! An error!</h2>
      <Link to="/">Go back.</Link>
    </>
  );
}

export default ErrorPage;
