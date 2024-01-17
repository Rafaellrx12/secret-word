import Styles from "./Game.module.css";

const Game = ({verifyGame}) => {
  return <div>
    <h1>Inicio do game</h1>
    <button onClick={verifyGame}>Finalizar jogo</button>
  </div>;
};

export default Game;
