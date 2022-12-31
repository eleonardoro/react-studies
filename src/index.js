import React from 'react'
import ReactDom from 'react-dom'

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Iniciando o projeto final</h1>
            </div>
        )
    }
}

ReactDom.render(<Main />, document.getElementById('root'))