import React, { Component } from 'react';

import './styles.css';

export default class SemPeso extends Component {
  state = {
    inputNumber: 2,
  }

  embreve = () => {
    return alert('EM BREVE');
  }

  componentDidMount() {
    this.loadPage();
  }

  loadPage = (newInput = 2) => {
    const { inputNumber } = this.state;

    if (inputNumber === 4) return;

    for (let i = 1; i <= inputNumber; i++) {
      this.createNewInput(i);
    }

    this.setState({ inputNumber: newInput });
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
    const { inputNumber } = this.state;

    if (inputNumber === 4) return;

    const newInput = inputNumber + 1;

    this.createNewInput(newInput);

    this.setState({ inputNumber: newInput });
  };

  loadInputPrev = () => {
    const { inputNumber } = this.state;

    if (inputNumber === 2) return;

    const newInput = inputNumber - 1;

    this.removeNewInput(inputNumber);

    this.setState({ inputNumber: newInput });
  };

  render() {
    const { inputNumber } = this.state;
    
    return (
      <div className="config-actions">
        <div className="config-box">
          <div className="config-media-com-peso">
            <label> Informe suas notas </label>
            <div className="inputs-row">
              <div className="inputs"> </div>
              <div>
                <button className="buttons" onClick={this.loadInputNext} disabled={inputNumber === 4} id="add" type="submit"> + </button>
                <button className="buttons" onClick={this.loadInputPrev} disabled={inputNumber === 2} id="del" type="submit"> - </button>
              </div>
            </div>
            <div className="inputs-row">
              <div className="inputs-label-media">
                <label> Média </label>
                <input className="inputs-media"/>
              </div>
              <button onClick={this.embreve} className="buttons" id="calcular" type="submit"> Calcular </button>
            </div>
            <label> Detalhes </label>
            <div className="result-media">
              <div className="result-colunm">
                <h5> Média Final </h5>
                <strong> 0.0 </strong>
              </div>
              <div className="result-colunm">
                <h5> Média Restante </h5>
                <strong> 0.0 </strong>
              </div>
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