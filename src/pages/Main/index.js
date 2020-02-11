import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Data from "./data"; 
import "./styles.css";

export default class Main extends Component {
  state = {
    info: Data,
  }
  
  loadMore = () => {
    return alert("Em breve...");
  }

  render() {
    const { info } = this.state;
    
    return (
      <div id="main-app">
        { 
          info.map(page => (
            <div key={page.id_page} className="scroll-functions">
            {
              page.actions.map(act => (
                <div key={ act.key } className="box-card">
                  <div className="box-50">
                    <h1 className="box-title"> { act.title } </h1>
                  </div>
                  <div className="box-50">
                    <Link className="box-button" to={ act.route }> Acessar </Link>
                  </div>
                </div>
              ))
            }
            </div>
          ))
        }
        <div className="load-more">
          <button className="box-button" onClick={ this.loadMore } > Carregar mais </button>
        </div>
        <div className="about-article">
          <div className="about-box">
            <article className="about-text">
              <h1> Sobre </h1>
              <p> A Plataforma de Ajuda foi criada como um simples projeto de conhecimento sobre React JS, 
              Javascript, HTML5, CSS3 e Resposividade, tudo feito manualmente. Busco ajudar as pessoas que precisem 
              de funções simples do dia a dia e as user de forma rápida, sem precisar escrever uma linha de código e 
              sem usar lápis/caneta e papel. 
              </p>
            </article>
          </div>
          <div className="about-box">
            <article className="about-text">
              <h1> O que podemos fazer? </h1>
              <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
              alteration in some form, by injected humour, or randomised words which don't look even slightly 
              believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
              embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
              repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a 
              dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate 
              Lorem Ipsum which looks reasonable. </p>
            </article>
          </div>
        </div>
      </div>
    )
  }
}
