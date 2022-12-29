import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  function toggleLink(event) {
    const panel = event.target.firstElementChild;
    if (panel === null) {
      return;
    }
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

  useEffect(() => {
    const panel = document.body.querySelectorAll("nav .accordion");
    panel.forEach((item) => {
      if (item.innerHTML.includes("active")) {
        item.firstElementChild.style.opacity = 1;
        item.firstElementChild.style.maxHeight =
          item.firstElementChild.scrollHeight + 100 + "px";
        item.firstElementChild.style.padding = "0.5rem 0 0.7rem 1rem";
      }
    });
  }, []);

  function toggleMobileMenu() {
    const menu = document.querySelector(".collapse-menu");
    if (menu.style.maxHeight) {
      menu.style.opacity = "0";
      menu.style.maxHeight = null;
      setTimeout(function () {
        menu.style.padding = 0;
        menu.style.marginBottom = "0";
      }, 200);
    } else {
      menu.style.maxHeight = menu.scrollHeight + 500 + "px";
      menu.style.borderBottom = "1px solid var(--border)";
      menu.style.borderTop = "1px solid var(--border)";
      menu.style.padding = "1rem 0";
      menu.style.opacity = "1";
      menu.style.marginBottom = "1rem";
    }
  }

  function scrollDown() {
    const main = document.getElementById("contents");
    window.scrollTo(0, main.offsetTop);
  }

  return (
    <header>
      <nav className="mobile-nav">
        <NavLink to="/">
          <img src="./assets/logo.webp" alt="" className="logo" />
        </NavLink>

        <button
          className="mobile-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <svg width="45px" height="45px" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="#121212"
              strokeDasharray="24"
              strokeDashoffset="24"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path d="M5 5H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="24;0"
                ></animate>
              </path>
              <path d="M5 12H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="24;0"
                ></animate>
              </path>
              <path d="M5 19H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.2s"
                  values="24;0"
                ></animate>
              </path>
            </g>
          </svg>
        </button>

        <ul className="collapse-menu">
          <li>
            <NavLink to="/Overview" className="nav-link" onClick={scrollDown}>
              Overview
            </NavLink>
          </li>
          <li className="accordion nav-link" onClick={() => toggleLink(event)}>
            Project
            <ul className="nested panel">
              <li>
                <NavLink
                  to="/New_Galateia"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [New Galateia]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Kolorowa"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [Kolorowa]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Minus" className="nav-link" onClick={scrollDown}>
                  [Minus]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Concrete"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [Concrete]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Err0r" className="nav-link" onClick={scrollDown}>
                  [Err0r]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Living_And_Gone"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [Living and gone]
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="accordion nav-link" onClick={() => toggleLink(event)}>
            Reportage
            <ul className="nested panel">
              <li>
                <NavLink
                  to="/Neoliberalism"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [Neo-liberalism]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/LGBTQ_In_Warsaw"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [LGBTQ in Warsaw]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/8_1_Uprising"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [8/1 Uprising]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Independence_Day"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [Independence day]
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Dont_Look_Back_In_Anger"
                  className="nav-link"
                  onClick={scrollDown}
                >
                  [Don't look back in anger]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Issues" className="nav-link" onClick={scrollDown}>
                  [Issues]
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/Film" className="nav-link" onClick={scrollDown}>
              Film
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Commissioned"
              className="nav-link"
              onClick={scrollDown}
            >
              Commissioned
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Exhibition"
              className="nav-link italic first"
              onClick={scrollDown}
            >
              Exhibition
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="nav-link italic"
              onClick={scrollDown}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="nav-link italic last"
              onClick={scrollDown}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.facebook.com/youjun.ha"
              className="icon nav-link"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/studio_siseon"
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
            </a>
          </li>
        </ul>
      </nav>

      <nav className="desktop-nav">
        <NavLink to="/">
          <img src="./assets/logo.webp" alt="" className="logo" />
        </NavLink>

        <ul className="menu">
          <li>
            <NavLink to="/Overview" className="nav-link">
              Overview
            </NavLink>
          </li>
          <li className="accordion nav-link" onClick={() => toggleLink(event)}>
            Project
            <ul className="nested panel">
              <li>
                <NavLink to="/New_Galateia" className="nav-link">
                  [New Galateia]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Kolorowa" className="nav-link">
                  [Kolorowa]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Minus" className="nav-link">
                  [Minus]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Concrete" className="nav-link">
                  [Concrete]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Err0r" className="nav-link">
                  [Err0r]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Living_And_Gone" className="nav-link">
                  [Living and gone]
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="accordion nav-link" onClick={() => toggleLink(event)}>
            Reportage
            <ul className="nested panel">
              <li>
                <NavLink to="/Neoliberalism" className="nav-link">
                  [Neo-liberalism]
                </NavLink>
              </li>
              <li>
                <NavLink to="/LGBTQ_In_Warsaw" className="nav-link">
                  [LGBTQ in Warsaw]
                </NavLink>
              </li>
              <li>
                <NavLink to="/8_1_Uprising" className="nav-link">
                  [8/1 Uprising]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Independence_Day" className="nav-link">
                  [Independence day]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dont_Look_Back_In_Anger" className="nav-link">
                  [Don't look back in anger]
                </NavLink>
              </li>
              <li>
                <NavLink to="/Issues" className="nav-link">
                  [Issues]
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/Film" className="nav-link">
              Film
            </NavLink>
          </li>
          <li>
            <NavLink to="/Commissioned" className="nav-link">
              Commissioned
            </NavLink>
          </li>
          <li>
            <NavLink to="/Exhibition" className="nav-link italic first">
              Exhibition
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="nav-link italic">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="nav-link italic last">
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.facebook.com/youjun.ha"
              className="icon nav-link"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/studio_siseon/"
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
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
