import React from "react";

//import background from "../../assets/photo-04.jpg";

import "./styles.css";

const Header = () => (
  <>
    <header id="main-header"> Platform Help </header>
    <div className="search-background">
      <header className="title-center">
        <h2> Funções simples e fáceis de usar </h2>
      </header>
      <article className="search-center">
        <input id="busca" type="text" name="pesquisar" placeholder="Pesquisar função" />
        <button id="busca" type="submit"> Ok </button>
      </article>
    </div>
  </>
)

export default Header; 
