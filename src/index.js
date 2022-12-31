import React from "react";
import ReactDom from "react-dom";

import "./estilos.css";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      idade: "",
      vetor: [],
    };
  }

  aoDigitar = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  };

  aoClicar = (botao) => {
    botao.preventDefault();

    var vetorAux = [...this.state.vetor];

    vetorAux.push({
      nome: this.state.nome,
      idade: this.state.idade,
    });

    this.setState({ vetor: vetorAux, nome: "", idade: "" });
  };

  render() {
    return (
      <div>
        <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
        <Tabela dados={this.state.vetor} />
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
