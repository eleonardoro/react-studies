import React from 'react'
import ReactDom from 'react-dom'

import './estilos.css'
import Formulario from './Formulario'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Formulario/>
            </div>
        )
    }
}

ReactDom.render(<Main />, document.getElementById('root'))