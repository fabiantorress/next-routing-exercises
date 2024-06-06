import React from "react";

import ScreenSaver from "../../../components/ScreenSaver";
import Link from "next/link";

const COLORS = ["lavender", "slateblue", "hotpink", "white"];

function ScreenSaverIndexPage() {
  return (
    <main className="screen-saver-wrapper">
      <p>Choose your color:</p>
      <ul>
        {COLORS.map((color, index) => (
          <li key={index}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
