import { useState, useRef } from "react";
import Styles from "./Game.module.css";

const Game = ({
  verifyGame,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyGame(letter);

    setLetter("");
    letterInputRef.current.focus();
  };
  return (
    <>
      <div className={Styles.game}>
        <p className={Styles.points}>
          <span>Pontuação: </span>
          {score}
        </p>
        <h1>Advinhe a palavra: </h1>

        <h3 className={Styles.tip}>
          Dica sobre a palavra:
          <span>
            {" "}
            {pickedCategory.charAt(0).toUpperCase() + pickedCategory.slice(1)}
          </span>
        </h3>
        <p>Você ainda tem {guesses} tentativas</p>
        <div className={Styles.wordContainer}>
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <span key={i} className={Styles.guessedLetters}>
                {letter}
              </span>
            ) : (
              <span key={i} className={Styles.blankSquare}></span>
            )
          )}
        </div>
        <div className={Styles.letterContainer}>
          <p>Tente advinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button>Jogar</button>
          </form>
        </div>
        <div className={Styles.wrongLettersContainer}>
          <p>Letras Erradas</p>
          <div className={Styles.letrasErradas}>
            {wrongLetters.map((letter, i) => (
              <span key={i} className={Styles.letrasErradas}>
                {letter} ,{" "}
              </span>
            ))}
          </div>
          <p>Letras já Utilizadas: </p>
          {guessedLetters}
        </div>
      </div>
    </>
  );
};

export default Game;
