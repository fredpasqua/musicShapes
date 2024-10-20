import "./App.css";
import GameCard from "./gameCard.jsx";
function Gameboard() {
  return (
    <div className="gameContainer">
      <GameCard></GameCard> <GameCard></GameCard> <GameCard></GameCard>{" "}
      <GameCard></GameCard> <GameCard></GameCard> <GameCard></GameCard>{" "}
    </div>
  );
}

export default Gameboard;
