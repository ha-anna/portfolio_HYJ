import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/">
            <img src="./assets/logo.webp" alt="" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/reportage">Reportage</Link>
              </li>
              <li>
                <Link to="/film">Film</Link>
              </li>
              <li>
                <Link to="/commissioned">Commissioned</Link>
              </li>
              <li>
                <Link to="/exhibiition">Exhibition</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/youjun.ha"></Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/studio_siseon/"></Link>
              </li>
            </ul>
          </nav>
        </header>
      </BrowserRouter>
    </>
  );
}

export default App;
