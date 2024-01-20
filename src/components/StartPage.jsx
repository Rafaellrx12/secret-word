import React from "react";
import Styles from "./StartPage.module.css";

const StartPage = ({ startGame }) => {
  return (
    <div className={Styles.start}>
      <h1>
        <span className={Styles.span_h1}>Secret </span>Word
      </h1>
      <p>Clique no botão abaixo para começar o jogo</p>
      <button onClick={startGame}>Começar Jogo</button>
    </div>
  );
};

export default StartPage;
