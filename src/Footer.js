import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This apps was created in React by{" "}
        <a
          href="https://muri-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Muri
        </a>
        , it's{" "}
        <a
          href="https://github.com/MurielCristina/react-weather-search-engine"
          target="_blank"
          rel="noreferrer"
        >
          open sourced at GitHub
        </a>{" "}
        and hosted at{" "}
        <a
          href="https://app.netlify.com/sites/calm-mousse-9a4410/overview"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
