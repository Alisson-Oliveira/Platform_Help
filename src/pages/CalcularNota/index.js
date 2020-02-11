import React, { Component } from 'react';

import './styles.css';

export default class CalcularNota extends Component {
  state = {
    inputs: 2,
    media_final: 0,
    status: "-",
  }

  componentDidMount() {
    this.loadPage();
  };

  errorInput = () => {
    return alert('POR FAVOR PREENCHA TODOS OS CAMPOS DE TEXTO.');
  };

  calularNota = () => {
    const { inputs } = this.state;
    
    const calInputEl_1 = document.getElementById("nota-1");
    const calInputEl_2 = document.getElementById("nota-2");
    const calInputEl_3 = document.getElementById("nota-3");
    const calInputEl_4 = document.getElementById("nota-4");

    const mediaInputEl = document.getElementById("input-media");
    
    if (inputs === 2) {
      if (calInputEl_1.value === "") return this.errorInput();
      if (calInputEl_2.value === "") return this.errorInput();

      const allNotas =  parseFloat(calInputEl_1.value) +
                        parseFloat(calInputEl_2.value);

      const media = allNotas / 2;
      const media_geral = mediaInputEl.value;

      let status = "-";
      if (media >= media_geral) {
        status = "Aprovado";
      } else {
        status = "Reprovado"
      }

      this.setState({ media_final: media, status });
    }
    
    if (inputs === 3) {
      if (calInputEl_1.value === "") return this.errorInput();
      if (calInputEl_2.value === "") return this.errorInput();
      if (calInputEl_3.value === "") return this.errorInput();

      const allNotas =  parseFloat(calInputEl_1.value) +
                        parseFloat(calInputEl_2.value) +
                        parseFloat(calInputEl_3.value);
      
      const media = allNotas / 3;
      const media_geral = mediaInputEl.value;

      let status = "-";
      if (media >= media_geral) {
        status = "Aprovado";
      } else {
        status = "Reprovado"
      }

      this.setState({ media_final: media, status });
    }

    if (inputs === 4) {
      if (calInputEl_1.value === "") return this.errorInput();
      if (calInputEl_2.value === "") return this.errorInput();
      if (calInputEl_3.value === "") return this.errorInput();
      if (calInputEl_4.value === "") return this.errorInput();

      const allNotas =  parseFloat(calInputEl_1.value) +
                        parseFloat(calInputEl_2.value) +
                        parseFloat(calInputEl_3.value) +
                        parseFloat(calInputEl_4.value);
      
      const media = allNotas / 4;
      const media_geral = mediaInputEl.value;

      let status = "-";
      if (media >= media_geral) {
        status = "Aprovado";
      } else {
        status = "Reprovado"
      }

      this.setState({ media_final: media, status });
    }
  };

  loadStatus = () => {
    const { media_restante } = this.state;
    const media = document.getElementById("input-media").value;
    
    let status = "-";
    
    if (media_restante <= media) {
      status = "Aprovado";
    } else {
      status = "Reprovado"
    }

    this.setState({ situacao: status});
  };

  loadPage = (newInput = 2) => {
    const { inputs } = this.state;

    if (inputs === 4) return;

    for (let i = 1; i <= inputs; i++) {
      this.addNewInput(i);
    }

    this.setState({ inputs: newInput });
  };

  addNewInput = (id) => {
    const newInputEl = document.querySelector(".inputs");
    
    const inputEl = document.createElement("input");
    inputEl.setAttribute('id', `nota-${id}`);
    inputEl.setAttribute('type', "text");
    inputEl.setAttribute('name', `nota-${id}`);

    newInputEl.appendChild(inputEl);
    
    return newInputEl;
  };

  removeNewInput = (id) => {
    const remInputEl = document.getElementById(`nota-${id}`);

    remInputEl.remove();
  };

  loadInputNext = () => {
    const { inputs } = this.state;

    if (inputs === 4) return;

    const newInput = inputs + 1;

    this.addNewInput(newInput);

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
    const { inputs, media_final, status } = this.state;

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
              <input id="input-media" className="inputs-media"/>
              <button onClick={this.calularNota} className="buttons" id="calcular" type="submit"> Calcular </button>
            </div>
            <label> Detalhes </label>
            <div className="details-config">
              <div className="result-colunm">
                <h6> Média Final </h6>
                <h3> {media_final} </h3>
              </div>
              <div className="line" />
              <div className="result-colunm">
                <h6> Situação </h6>
                <strong> {status} </strong>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
