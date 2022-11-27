import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function toggle(event) {
    const panel = event.target.firstElementChild;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = 0;
      panel.style.opacity = 0;
    } else {
      panel.style.opacity = 1;
      panel.style.maxHeight = panel.scrollHeight + 100 + "px";
      panel.style.padding = "0.5rem 0 0.7rem 1rem";
    }
  }

  return (
    <header>
      <Link to="/">
        <img src="./assets/logo.webp" alt="" className="logo" />
      </Link>

      <svg className="menu-button" width="32" height="32" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-dasharray="24"
          stroke-dashoffset="24"
          stroke-linecap="round"
          stroke-width="2"
        >
          <path d="M5 5H19">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="24;0"
            />
          </path>
          <path d="M5 12H19">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="24;0"
            />
          </path>
          <path d="M5 19H19">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="24;0"
            />
          </path>
        </g>
      </svg>

      <nav className="top-nav">
        <ul>
          <li>
            <Link to="/overview" className="nav-link">
              Overview
            </Link>
          </li>
          <li className="accordion nav-link" onClick={() => toggle(event)}>
            Project
            <ul className="nested panel">
              <li>
                <Link to="/new-galateia" className="nav-link">
                  [New Galateia]
                </Link>
              </li>
              <li>
                <Link to="/kolorowa" className="nav-link">
                  [Kolorowa]
                </Link>
              </li>
              <li>
                <Link to="/minus" className="nav-link">
                  [Minus]
                </Link>
              </li>
              <li>
                <Link to="/concrete" className="nav-link">
                  [Concrete]
                </Link>
              </li>
              <li>
                <Link to="/err0r" className="nav-link">
                  [Err0r]
                </Link>
              </li>
              <li>
                <Link to="/living-and-gone" className="nav-link">
                  [Living and gone]
                </Link>
              </li>
            </ul>
          </li>
          <li className="accordion nav-link" onClick={() => toggle(event)}>
            Reportage
            <ul className="nested panel">
              <li>
                <Link to="/neoliberalism" className="nav-link">
                  [Neo-liberalism]
                </Link>
              </li>
              <li>
                <Link to="/lgbtq-in-warsaw" className="nav-link">
                  [LGBTQ in Warsaw]
                </Link>
              </li>
              <li>
                <Link to="/8-1-uprising" className="nav-link">
                  [8/1 Uprising]
                </Link>
              </li>
              <li>
                <Link to="/independence-day" className="nav-link">
                  [Independence day]
                </Link>
              </li>
              <li>
                <Link to="/dont-look-back-in-anger" className="nav-link">
                  [Don't look back in anger]
                </Link>
              </li>
              <li>
                <Link to="/issues" className="nav-link">
                  [Issues]
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/film" className="nav-link">
              Film
            </Link>
          </li>
          <li>
            <Link to="/commissioned" className="nav-link">
              Commissioned
            </Link>
          </li>
          <li>
            <Link to="/exhibition" className="nav-link italic first">
              Exhibition
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link italic">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link italic last">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/youjun.ha"
              className="icon nav-link"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/studio_siseon/"
              className="icon nav-link"
            >
              <svg width="32" height="34" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
