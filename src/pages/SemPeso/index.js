import React, { Component } from 'react';

import './styles.css';

export default class SemPeso extends Component {
  state = {
    inputs: 2,
  }

  embreve = () => {
    return alert('EM BREVE...');
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage = (newInput = 2) => {
    const { inputs } = this.state;

    if (inputs === 4) return;

    for (let i = 1; i <= inputs; i++) {
      this.createNewInput(i);
    }

    this.setState({ inputs: newInput });
  }

  createNewInput = (id) => {
    const newInputEl = document.querySelector(".inputs");
    
    const inputEl = document.createElement("input");
    inputEl.setAttribute('id', `nota-${id}`);
    inputEl.setAttribute('type', "text");
    inputEl.setAttribute('name', `nota-${id}`);

    newInputEl.appendChild(inputEl);
    
    return newInputEl;
  }

  removeNewInput = (id) => {
    const remInputEl = document.getElementById(`nota-${id}`);

    remInputEl.remove();
  }

  loadInputNext = () => {
    const { inputs } = this.state;

    if (inputs === 4) return;

    const newInput = inputs + 1;

    this.createNewInput(newInput);

    this.setState({ inputs: newInput });
  };

  loadInputPrev = () => {
    const { inputs } = this.state;

    if (inputs === 2) return;

    const newInput = inputs - 1;

    this.removeNewInput(inputs);

    this.setState({ inputs: newInput });
  };

  render() {
    const { inputs } = this.state;
    
    return (
      <div className="config-actions">
        <div className="config-box">
          <div className="config-media-com-peso">
            <label> Informe suas notas </label>
            <div className="inputs-row">
              <div className="inputs"> </div>
              <div>
                <button className="buttons" onClick={this.loadInputNext} disabled={inputs === 4} id="add" type="submit"> + </button>
                <button className="buttons" onClick={this.loadInputPrev} disabled={inputs === 2} id="del" type="submit"> - </button>
              </div>
            </div>
            <div className="inputs-row">
              <label> Média </label>
              <input className="inputs-media"/>
              <button onClick={this.embreve} className="buttons" id="calcular" type="submit"> Calcular </button>
            </div>
            <label> Detalhes </label>
            <div className="details-config">
              <div className="result-colunm">
                <h5> Média Final </h5>
                <strong> 0.0 </strong>
              </div>
              <div className="line" />
              <div className="result-colunm">
                <h5> Média Restante </h5>
                <strong> 0.0 </strong>
              </div>
              <div className="line" />
              <div className="result-colunm">
                <h5> Situação </h5>
                <strong> Reprovado </strong>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}