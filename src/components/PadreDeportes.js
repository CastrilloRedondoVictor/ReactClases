import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {

    state = {
        deportes: ['Futbol', 'Baloncesto', 'Volley', 'Boxeo'],
        msg: '',
    }

    seleccionarFav = (dep) => {
        this.setState({
            msg: 'Deporte favorito: ' + dep
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                {
                    this.state.deportes.map((dep, index) => {
                        return(<HijoDeporte key={index} depFav={this.seleccionarFav} deporte={dep}></HijoDeporte>)
                    })
                }
            </div>
        )
    }

}

export default PadreDeportes;