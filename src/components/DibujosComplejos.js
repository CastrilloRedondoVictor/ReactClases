import { Component } from "react";

class DibujosComplejos extends Component {


    dibujarNums = () => {
        var list = []
        for (let i = 0; i < 7; i++) {
            let num = parseInt(Math.random() * 100) + 1
            list.push(<li key={i}>{num}</li>)
        }
        return list
    }

    render() {
        return(
            <div>
                <h1>Dibujos Complejos HTML</h1>
                <ul>
                    {this.dibujarNums()}
                </ul>
            </div>
        )
    }
    
}

export default DibujosComplejos;