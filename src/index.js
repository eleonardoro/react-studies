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







import Componente01 from './Componente01';
import Componente02 from './Componente02';

class Principal extends React.Component{
    render(){
        return(
            <div>
                <Componente01/>
                <Componente02/>
            </div>
        )
    }
}

ReactDOM.render(<Principal/>,
document.getElementById('root'))