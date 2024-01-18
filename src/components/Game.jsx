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
  return (
    <>
      <div className={Styles.game}>
        <p className={Styles.points}>
          <span>Pontuação: {score}</span>
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
            guessedLetters.includes(letters) ? (
              <span key={i} className={Styles.letters}>
                {letter}
              </span>
            ) : (
              <span key={i} className={Styles.blankSquare}></span>
            )
          )}
        </div>
        <div className={Styles.letterContainer}>
          <p>Tente advinhar uma letra da palavra</p>
          <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Jogar</button>
          </form>
        </div>
        <div className={Styles.wrongLettersContainer}>
          <p>Letras já utilizadas</p>
          <div className={Styles.letrasErradas}>
            {wrongLetters.map((letter, i) => (
              <span key={i} className={Styles.letrasErradas}>
                {letter} ,{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
