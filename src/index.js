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
      idade: null,
    };
  }

  aoDigitar = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  };

  aoClicar = (botao) => {
    botao.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Formulario funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
        <Tabela />
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
