import { Component } from "react";

class HijoNumero extends Component {

    render() {
        return(
            <div>
                <h3>Componente Número {this.props.num}</h3>
                <button onClick={() => {this.props.sumarPadre(this.props.num)}}>SUMAR</button>
            </div>
        )
    }

}
export default HijoNumero;