import React from "react";

import Designer from "./Designer.png";
import "./Header.css";
import "@fontsource/lily-script-one";

export default function Header() {
  return (
    <div className="header">
      <img src={Designer} alt="Muri logo" />
      <span>Muri</span>
    </div>
  );
}
