const { Component } = require("react");

class Comic extends Component {

    render() {
        return(
            <div>
                <h2>{this.props.comic.titulo}</h2>
                <p>{this.props.comic.descripcion}</p>
                <img src={this.props.comic.imagen} style={{width: '200px', height: 'auto'}} />
                <button onClick={() => {this.props.favoritoPadre(this.props.comic)}}>FAVORITO</button>
                <button onClick={() => {this.props.deleteComic(this.props.index, this.props.comic)}}>ELIMINAR</button>
            </div>
        )
    }

}
export default Comic