import Styles from "./GameOver.module.css";

const GameOver = ({resetGame}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={resetGame}>Finalizar jogo</button>
    </div>
  )
}

export default GameOver