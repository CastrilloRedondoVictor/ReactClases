import { Component } from "react";

class HijoDeporte extends Component {

    render() {

        return(
            <div>
                <h3>{this.props.deporte}</h3>
                <button onClick={() => {this.props.depFav(this.props.deporte)}}>Favorito</button>
            </div>
        )
    }

}

export default HijoDeporte;