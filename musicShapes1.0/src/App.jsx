import { useState, useEffect } from "react";
import Gameboard2 from "./GameBoard2.jsx";
import getRandomColor from "./assets/colorScroll.jsx";
import "./App.css";
import Countdown from "react-countdown";
import { gameTotalContext } from "./Contexts/gameTotalContext.js";
function App() {
  const colors = ["#FF5733", "#33FF57", "#883982"];
  const names = ["x", "o"];
  const [match, setMatch] = useState(getRandomColor("#FF5733", colors, names));
  const [showModal, setShowModal] = useState(true);
  const [start, setStart] = useState(Date.now() + 45000);
  const [showWin, setShowWin] = useState(false);
  //todo import gameTotalContext and create logic to store state of cards and when cards

  const closeModal = () => {
    setShowModal(false);
  };
  const closeWin = () => {
    setShowWin(false);
  };
  const restart = () => {
    setMatch(getRandomColor(match.color, colors, names));
    console.log(match);

    setStart(Date.now() + 2000);

    setShowModal(true);
  };
  //winner configuration will be determined if all the squares match this configuraion)

  // const winnerConfig = {
  //   color: match.color,
  //   name: match.name,
  // };

  // if (winnerConfig === state of all )

  return showWin ? (
    <div className="loser">
      <p>YOU WON!</p>
      <button onClick={() => closeWin()}>X</button>
    </div>
  ) : match ? (
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
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
