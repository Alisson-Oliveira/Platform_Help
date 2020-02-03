import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {

  emBreve = () => alert("Em breve...");

  render() {

    const actions = [
      {
        key: 0,
        title: "Calcular Média com Peso",
        route: "/media",
        action: this.emBreve,
      },
      {
        key: 1,
        title: "Calcular Média sem Peso",
        route: "/media",
        action: this.emBreve,
      },
      {
        key: 2,
        title: "Localicação Atual",
        route: "/locate",
        action: this.emBreve,
      },
    ];

    return (
      <div className="scroll-functions">
        { 
          actions.map(act => (  
            <div key={ act.key } className="box-card">
              <div className="box-50">
                <h1 className="box-title"> { act.title } </h1>
              </div>
              <div className="box-50">
                <Link className="box-button" to={ act.route }> Acessar </Link>
              </div>
            </div>
            )
          )
        }
      </div>
    )
  }
}
