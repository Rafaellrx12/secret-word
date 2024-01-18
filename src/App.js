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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  const [guessedLetters, setGuessedLetters] = useState("");
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState("");

  const PickedWordsAndCategories = () => {
    const categorias = Object.keys(worlds);
    const categoriaEscolhida =
      categorias[Math.floor(Math.random() * Object.keys(worlds).length)];
    const arrayDaCategoriaEscolhida = worlds[categoriaEscolhida];

    const palavraEscolhida =
      arrayDaCategoriaEscolhida[
        Math.floor(Math.random() * arrayDaCategoriaEscolhida.length)
      ];

    return { categoriaEscolhida, palavraEscolhida };
  };

  const startGame = () => {
    const { categoriaEscolhida, palavraEscolhida } = PickedWordsAndCategories();

    setpickedCategory(categoriaEscolhida);
    setPickedWord(palavraEscolhida);

    let wordLetters = palavraEscolhida.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(categoriaEscolhida, palavraEscolhida);
    console.log(wordLetters);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };
  const verifyGame = () => {
    setGameStage(stages[2].name);
  };
  const resetGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      <header>
        {gameStage === "start" && <StartPage startGame={startGame} />}
        {gameStage === "game" && (
          <Game
            verifyGame={verifyGame}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver resetGame={resetGame} />}
      </header>
    </div>
  );
}

export default App;
