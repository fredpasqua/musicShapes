import { useState, useEffect } from "react";
import Gameboard2 from "./Gameboard2.jsx";
import getRandomColor from "./assets/colorScroll.jsx";
import "./App.css";
import Countdown from "react-countdown";

function App() {
  const [match, setMatch] = useState({ color: "#FF5733", name: "x" });
  const colors = ["#FF5733", "#33FF57", "#883982"];
  const names = ["x", "o"];
  const [showModal, setShowModal] = useState(true);
  const [start, setStart] = useState(Date.now() + 3000);

  useEffect(() => {
    setMatch(getRandomColor(match.color, colors, names));
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  const restart = () => {
    setMatch(getRandomColor(match.color, colors, names));

    setStart(Date.now() + 3000);

    setShowModal(true);
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
          <Countdown date={start} key={start} className="timer">
            {showModal ? (
              <div className="loser">
                <p>Sorry, try again!</p>
                <button onClick={() => closeModal()}>close</button>
              </div>
            ) : null}
          </Countdown>
          <button onClick={() => restart()}>START</button>
        </div>
        <div> {/* <Gameboard className={"board"}></Gameboard> */}</div>
        <div>{<Gameboard2 className={"board"}></Gameboard2>}</div>
      </div>
    </>
  );
}

export default App;
