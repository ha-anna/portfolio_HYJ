import React from "react";
import { Link } from "react-router-dom";

function Placeholder() {
  return (
    <>
      <h2>Placeholder page</h2>
      <Link to="/" className="text-link">
        Link to main page.
      </Link>
    </>
  );
}

export default Placeholder;
