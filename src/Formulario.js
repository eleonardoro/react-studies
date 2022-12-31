import React from "react";

class Formulario extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.funcaoBotao}>
        <input
          type="text"
          value={this.props.campoNome}
          placeholder="Digite o nome"
          className="form-control"
          name="nome"
          onChange={this.props.funcaoCampo}
        />
        <input
          type="number"
          value={this.props.campoIdade}
          placeholder="Digite a idade"
          className="form-control"
          name="idade"
          onChange={this.props.funcaoCampo}
        />
        <input type="submit" value="Cadastrar" className="btn btn-primary" />
      </form>
    );
  }
}

export default Formulario;
