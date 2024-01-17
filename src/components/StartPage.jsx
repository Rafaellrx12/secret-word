import React from "react";
import Styles from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={Styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar o jogo</p>
      <button>Começar Jogo</button>
    </div>
  );
};

export default StartPage;
