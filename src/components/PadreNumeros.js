import HijoNumero from "./HijoNumero";

const { Component } = require("react");

class PadreNumeros extends Component {

    state = {
        suma: 0,
        comps: [],
    }

    sumarNum = (num) =>{
        this.setState({
            suma: parseInt(this.state.suma) + parseInt(num)
        })
    }

    crearComponent = () => {
        let numero = parseInt(Math.random() * 10) + 1
        this.state.comps.push(<HijoNumero key={this.state.comps.length} sumarPadre={this.sumarNum} num={numero}></HijoNumero>)
        this.setState({
            comps: this.state.comps
        })
    }


    render() {
        return(
            <div>
                <h1>CREAR COMPONENTES NUMEROS</h1>
                <h2>Suma: <b style={{color: 'red'}}>{this.state.suma}</b></h2>
                <button onClick={this.crearComponent}>NUEVO NÚMERO</button>
                <hr />
                {
                    this.state.comps.map((comp, index) => {
                        return comp
                    })
                }
            </div>
        )
    }
}
export default PadreNumeros;