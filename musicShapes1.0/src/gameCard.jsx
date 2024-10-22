import { useState, useContext } from "react";
import getRandomColor from "./assets/colorScroll.jsx";
import { gameTotalContext } from "./Contexts/gameTotalContext.js";
export default function GameCard() {
  const [color, setColor] = useState({
    color: "#FF5733",
    name: "o",
    fontsizer: "20px",
  });
  const [gamePlayStatus, setGamePlayStatus] = useContext({ gameTotalContext });

  return (
    <button
      className={"gameButton"}
      style={{
        backgroundColor: color.color,
        height: "200px",
        width: "200px",
        fontSize: color.fontsizer,
      }}
      onClick={() => {
        setColor(getRandomColor(color.color));
        setGamePlayStatus((prevArray) => [...prevArray, color]);
        console.log(gameTotalContext);
      }}
    >
      {color.name}
    </button>
  );
}
