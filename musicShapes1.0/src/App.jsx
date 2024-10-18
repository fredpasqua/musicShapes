import { useState, useEffect } from "react";
import Gameboard from "./GameBoard.jsx";
import getRandomColor from "./assets/colorScroll.jsx";
import "./App.css";
import Countdown from "react-countdown";

function App() {
  const [match, setMatch] = useState({ color: "#FF5733", name: "x" });
  const colors = ["#FF5733", "#33FF57", "#883982"];
  const names = ["x", "o"];
  const [showModal, setShowModal] = useState(true);
  const [start, setStart] = useState(Date.now() + 5000);

  useEffect(() => {
    setMatch(getRandomColor(match.color, colors, names));
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
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
          <Countdown
            autoStart={true}
            date={start}
            key={start}
            className="timer"
          >
            {showModal ? (
              <div className="loser">
                <p>Sorry, try again!</p>
                <button onClick={() => closeModal()}>close</button>
              </div>
            ) : null}
          </Countdown>
          <button onClick={() => setStart(Date.now() + 5000)}>START</button>
        </div>
        <div>
          {" "}
          <Gameboard className={"board"}></Gameboard>
        </div>
      </div>
    </>
  );
}

export default App;
