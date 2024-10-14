import { render } from "@testing-library/react";

const { Component } = require("react");

function metodoExterno() {
    console.log('Metodo externo')
}

class Contador extends Component {

    numero = 1

    incrementarNumero(){
        this.numero += 1
        console.log('VAL: ' + this.numero)
    }

    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValorState = () => {
        this.setState({
            valor: this.state.valor + 1
        })
    }

    render() {
        return(
            <div>
                <h1>Class Component Contador</h1>
                <h2>Inicio: {this.props.inicio}</h2>
                <h2>State: {this.state.valor}</h2>
                <button onClick={this.incrementarValorState}>INCREMENTAR STATE</button>
                <button onClick={() => {
                    this.incrementarNumero()
                    metodoExterno()
                }}>INCREMENTAR NÚMERO</button>
            </div>
        )
    }
    
}
export default Contador;