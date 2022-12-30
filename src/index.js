// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// //Sem JSX
// const elemento = React.createElement('h1', {}, 'Sem JSX');
// ReactDOM.render(
//     elemento,
//     document.getElementById('root')
// );

// //Com JSX
// ReactDOM.render(
//     <h1>Com JSX</h1>,
//     document.getElementById('root')
// );








// // Componente
// class MeuComponente extends React.Component{
//     render(){
//         return <h1>Meu primeiro componente</h1>
//     }
// }

// ReactDOM.render(<MeuComponente/>,
// document.getElementById('root'))







// import Componente01 from './Componente01';
// import Componente02 from './Componente02';

// class Principal extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Componente01/>
//                 <Componente02/>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Principal/>,
// document.getElementById('root'))




// class Componente extends React.Component{
//     render(){
//         return(
//             <div>
//             <h1>Olá {this.props.nome}</h1>
//             <h1>Olá {this.props.informacoes.nome}, você tem {this.props.informacoes.idade} anos, certo?</h1>
//             </div>
//         );
//     }
// }

// //valor dinâmico
// var dados = {nome: "Léo", idade: 33};

// ReactDOM.render(
//     <Componente nome="Ralf" informacoes={dados}/>,
//     document.getElementById('root')
// )



// class Componente extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { nome: 'Léo' };
//     }

//     render() {
//         return <h1>{this.state.nome}</h1>
//     }
// }

// ReactDOM.render(
//     <Componente/>,
//     document.getElementById('root')
// );








// class Componente extends React.Component {

//     mensagem(nome){
//         alert('Hello ' + nome);
//     }

//     minhaArrowFunction = (curso) =>{
//         alert('funfou: ' + curso)
//     }

//     teclado = (event) => {
//         alert(event.target.value)
//     }

//     render() {
//         return <div>
//             <button onClick={this.mensagem.bind(this, 'Léo')}>Olá!</button>
//             <br/>
//             <button onClick={() => this.minhaArrowFunction('ReactJs')}>Funfa?!</button>
//             <br/>
//             <br/>
//             <input type='text' onChange={this.teclado} />
//             <br/>
//             <br/>
//         </div>
//     }
// }

// ReactDOM.render(
//     <Componente/>,
//     document.getElementById('root')
// );








// class MeuComponente extends React.Component{

//     constructor(props){
//         super(props)

//         this.state = {texto: this.props.textoInicial}

//     }

//     minhaFuncao = (event) => {
//         this.setState({texto : event.target.value})
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.texto}</h1>
//                 <input type='text' onChange={this.minhaFuncao} value={this.state.texto}/>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<MeuComponente textoInicial='Digite algo...'/>, document.getElementById('root'));






// class MeuComponente extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = { exibir: false }
//     }

//     alterarState = () => {
//         let converter = !this.state.exibir

//         this.setState({ exibir: converter })

//     }

//     render() {

//         let meuTexto = ''

//         if (this.state.exibir)
//             meuTexto = <h1>Oi!</h1>
//         else
//             meuTexto = ''

//         return (
//             <div>
//                 {meuTexto}
//                 <button onClick={this.alterarState}>Clique aqui</button>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));












// class MeuComponente extends React.Component {

//     render() {
//         let cores = ['Azul', 'Amarelo', 'Vermelho']

//         let listar = cores.map((cor, index) => {
//             return <li key={index}>{index} - {cor}</li>
//         })

//         return (
//             <div>
//                 <h1>Listas e Chaves</h1>
//                 <ul>
//                     {listar}
//                 </ul>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));






// import './estilos.css'

// class MeuComponente extends React.Component {

//     render() {
//         const estilo = {
//             color : 'blue',
//             borderBottom : 'solid 5px green'
//         }

//         return (
//             <div>
//                 <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>CSS Interno (inline)</h1>
//                 <h1 style={estilo}>CSS através de variáveis e constantes</h1>
//                 <h1 className='minhaClasse'>CSS através de classes</h1>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));






// import './estilos.css'

// class MeuComponente extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = { cor: 'vermelha' }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ cor: 'azul' })
//         }, 2000)
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Minha cor preferida é {this.state.cor}</h1>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));









// class MeuComponente extends React.Component {

//     minhaFuncao = (elemento) => {
//         elemento.preventDefault()
//         alert('Testando evento onSubmit')
//     }

//     render() {
//         return (
//             <form onSubmit={this.minhaFuncao} action='www.google.com.br'>
//                 <input type='submit'/>
//             </form>
//         )
//     }

// }

// ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));





class MeuComponente extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            idade: null
        }
    }

    updateState = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }

    render() {
        return (
            <form>
                <input type='text' placeholder='Nome' name='nome' onChange={this.updateState} />
                <input type='number' placeholder='Idade' name='idade' onChange={this.updateState} />

                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>
            </form>
        )
    }

}

ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));