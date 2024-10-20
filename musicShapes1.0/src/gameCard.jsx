import { useState } from "react";
import getRandomColor from "./assets/colorScroll.jsx";

export default function GameCard() {
  const [color, setColor] = useState({
    color: "#FF5733",
    name: "o",
    size: "purple",
  });
  const colors = ["#FF5733", "#33FF57", "#883982"];
  const names = ["x", "o"];
  const sizes = ["purple", "red"];

  return (
    <button
      className={"gameButton"}
      style={{
        backgroundColor: color.color,
        height: "200px",
        width: "200px",
        fontColor: color.size,
      }}
      onClick={() =>
        setColor(getRandomColor(color.color, colors, names, sizes))
      }
    >
      {color.name}
    </button>
  );
}
