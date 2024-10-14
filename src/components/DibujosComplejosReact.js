import { Component } from "react";

class DibujosComplejosReact extends Component {

    state = {
        nombres: ['Victor', 'Jimena', 'Paco']
    }

    generarNombre = () => {
        this.state.nombres.push('NUEVO NOMBRE')
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return(
            <div>
                <h1>DIBUJOS COMPLEJOS NOMBRES</h1>
                <button onClick={this.generarNombre}>NUEVO NOMBRE</button>
                <ul>
                    {
                        this.state.nombres.map((nom, index) => {
                            return(<li key={index}>{nom}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default DibujosComplejosReact;