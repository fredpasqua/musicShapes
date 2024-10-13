import { useState, useEffect } from "react";
import getRandomColor from "./assets/colorScroll.jsx";
import "./App.css";
import Countdown from "react-countdown";

function Gameboard() {
  const [color1, setColor1] = useState({ color: "#FF5733", name: "1" });
  const [color2, setColor2] = useState({ color: "#FF5733", name: "2" });
  const [color3, setColor3] = useState({ color: "#FF5733", name: "3" });
  const [color4, setColor4] = useState({ color: "#FF5733", name: "4" });
  const [color5, setColor5] = useState({ color: "#FF5733", name: "5" });
  const [color6, setColor6] = useState({ color: "#FF5733", name: "6" });
  const [match, setMatch] = useState({ color: "#FF5733", name: "x" });
  const colors = ["#FF5733", "#33FF57", "#883982"];
  const names = ["x", "o"];
  const [size, setSize] = useState(30);
  useEffect(() => {
    setMatch(getRandomColor(match.color, colors, names));
  }, []);

  return (
    <div className="gameContainer">
      <button
        className={"gameButton"}
        style={{
          backgroundColor: color1.color,
          height: "200px",
          width: "200px",
          fontSize: size + "px",
        }}
        onClick={() =>
          setColor1(getRandomColor(color1.color, colors, names)) +
          setSize(size + 20)
        }
      >
        {color1.name}
      </button>

      <button
        className={"gameButton"}
        style={{
          backgroundColor: color2.color,
          height: "200px",
          width: "200px",
          fontSize: size,
        }}
        onClick={() =>
          setColor2(getRandomColor(color2.color, colors, names)) +
          setSize(size - 20)
        }
      >
        {color2.name}
      </button>
      <button
        className={"gameButton"}
        style={{
          backgroundColor: color3.color,
          height: "200px",
          width: "200px",
          fontSize: size,
        }}
        onClick={() =>
          setColor3(getRandomColor(color3.color, colors, names)) +
          setSize(size + 35)
        }
      >
        {color3.name}
      </button>
      <button
        className={"gameButton"}
        style={{
          backgroundColor: color4.color,
          height: "200px",
          width: "200px",
          fontSize: size,
        }}
        onClick={() =>
          setColor4(getRandomColor(color4.color, colors, names)) +
          setSize(size - 35)
        }
      >
        {color4.name}
      </button>
      <button
        className={"gameButton"}
        style={{
          backgroundColor: color5.color,
          height: "200px",
          width: "200px",
          fontSize: size,
        }}
        onClick={() =>
          setColor5(getRandomColor(color5.color, colors, names)) +
          setSize(size + 20)
        }
      >
        {color5.name}
      </button>
      <button
        className={"gameButton"}
        style={{
          backgroundColor: color6.color,
          height: "200px",
          width: "200px",
          fontSize: size,
        }}
        onClick={() =>
          setColor6(getRandomColor(color6.color, colors, names)) +
          setSize(size - 20)
        }
      >
        {color6.name}
      </button>
    </div>
  );
}

export default Gameboard;
