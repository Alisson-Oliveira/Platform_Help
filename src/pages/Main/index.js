import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {

  emBreve = () => alert("Em breve...");

  render() {
    return (
      <div className="scroll-functions">
        <div className="box-card">
          <div className="box-50">
            <h1 className="box-title"> Calcular Média </h1>
          </div>
          <div className="box-50">
            <Link className="box-button" to={`/media`}> Acessar </Link>
          </div>
        </div>
        <div className="box-card">
          <div className="box-50">
            <h1 className="box-title"> Localicação Atual </h1>
          </div>
          <div className="box-50">
          <Link className="box-button" to={`/locate`}> Acessar </Link>
          </div>
        </div>
      </div>
    )
  }
}
