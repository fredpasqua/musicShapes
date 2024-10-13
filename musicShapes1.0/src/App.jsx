import { useState, useEffect } from 'react'
import Gameboard from "./App2.jsx";
import getRandomColor from "./assets/colorScroll.jsx";
import "./App.css";
import Countdown from "react-countdown";

function App() {
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
    <div className="screen">
      <div className="gameHeader">
        {" "}
        <h4>Set the letter and color of each card to</h4>
        <br></br>
        <button
          className={"matchButton gameButton"}
          style={{
            backgroundColor: match.color,
            height: "100px",
            width: "200px",
          }}
        >
          {match.name}
        </button>
        <br></br>
        <h4>All 6 cards must fit within the red line</h4>
        <Countdown date={Date.now() + 30000} className="timer" />
      </div>

      <Gameboard className={"board"}></Gameboard>
    </div>
  );
}

export default App
