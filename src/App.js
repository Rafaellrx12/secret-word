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

  const [worlds] = useState(wordsList);

  return (
    <div className="App">
      <header>
        {gameStage === "start" && <StartPage />}
        {gameStage === "game" && <Game />}
        {gameStage === "end" && <GameOver />}
      </header>
    </div>
  );
}

export default App;
