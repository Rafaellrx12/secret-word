import "./App.css";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import StartPage from "./components/StartPage";
import { useState, useCallback, useEffect } from "react";
import { wordsList } from "./Data/words";
function App() {
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];

  const [gameStage, setGameStage] = useState(stages[0].name);

  const startGame = () => {
    setGameStage(stages[1].name);
  };
  const verifyGame = () => {
    setGameStage(stages[2].name);
  };
  const resetGame = () => {
    setGameStage(stages[0].name);
  };

  const [worlds] = useState(wordsList);

  return (
    <div className="App">
      <header>
        {gameStage === "start" && <StartPage props={startGame} />}
        {gameStage === "game" && <Game props={verifyGame} />}
        {gameStage === "end" && <GameOver props={resetGame} />}
      </header>
    </div>
  );
}

export default App;
