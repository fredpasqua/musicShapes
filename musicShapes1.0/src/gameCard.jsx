import { useState } from "react";
import { gameTotalContext } from "./Contexts/gameTotalContext.js";
import getRandomColor from "./assets/colorScroll.jsx";

export default function GameCard() {
  const [color, setColor] = useState({
    color: "#FF5733",
    name: "o",
    fontsizer: "20px",
  });

  return (
    <button
      className={"gameButton"}
      style={{
        backgroundColor: color.color,
        height: "200px",
        width: "200px",
        fontSize: color.fontsizer,
      }}
      onClick={() => setColor(getRandomColor(color.color))}
    >
      {color.name}
    </button>
  );
}
