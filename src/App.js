import "./App.css";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import StartPage from "./components/StartPage";
import { useState, useCallback, useEffect } from "react";
import { wordsList } from "./Data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];
const chances = 7;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(chances);

  const [score, setScore] = useState(0);

  const PickedWordsAndCategories = useCallback(() => {
    const categorias = Object.keys(words);

    const categoriaEscolhida =
      categorias[Math.floor(Math.random() * Object.keys(words).length)];
    const arrayDaCategoriaEscolhida = words[categoriaEscolhida];
    const palavraEscolhida =
      arrayDaCategoriaEscolhida[
        Math.floor(Math.random() * arrayDaCategoriaEscolhida.length)
      ];

    return { categoriaEscolhida, palavraEscolhida };
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();
    const { categoriaEscolhida, palavraEscolhida } = PickedWordsAndCategories();
    let wordLetters = palavraEscolhida.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setpickedCategory(categoriaEscolhida);
    setPickedWord(palavraEscolhida);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [PickedWordsAndCategories]);

  const verifyGame = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualLetterGuesses) => [
        ...actualLetterGuesses,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetterGuesses) => [
        ...actualWrongLetterGuesses,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const resetGame = () => {
    setScore(0);
    setGuesses(chances);
    setGameStage(stages[0].name);
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ) {
      setScore((atualScore) => (atualScore += 100));

      startGame();
    }
  }, [startGame, letters, guessedLetters, gameStage]);

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
        {gameStage === "end" && (
          <GameOver
            resetGame={resetGame}
            score={score}
            pickedWord={pickedWord}
          />
        )}
      </header>
    </div>
  );
}
export default App;
