import React from 'react'

class Formulario extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.funcaoBotao}>
                <input type='text' placeholder='Digite o nome' className='form-control' name='nome' onChange={this.props.funcaoCampo}/>
                <input type='number' placeholder='Digite a idade' className='form-control' name='idade' onChange={this.props.funcaoCampo}/>
                <input type='submit' value='Cadastrar' className='btn btn-primary'/>
            </form>
        )
    }
}

export default Formulario