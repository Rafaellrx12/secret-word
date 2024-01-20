import Styles from "./GameOver.module.css";

const GameOver = ({ resetGame, score, pickedWord }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <p className={Styles.palavra}>A palavra era : <span>{pickedWord}</span></p>
      <h2>
        A sua pontuação foi: <span className={Styles.h2_span}>{score}</span>!
      </h2>
      <button onClick={resetGame}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
