import Comic from "./Comic";
const { Component } = require("react");


class Comics extends Component {

    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://i.blogs.es/cebdf3/screenshot_1859/original.webp",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
        ],
        favorito: null,
    }

    setFavorito = (comic) => {
        this.setState({
            favorito: comic
        })
    }

    deleteComic = (index, comic) => {
        this.state.comics.splice(index, 1)
        this.setState({
            comics: this.state.comics
        });
        if(comic == this.state.favorito){
            this.setFavorito(null)
        }
    }

    render() {
        return(
            <div>
                <h1>COMICS</h1>
                {
                    this.state.favorito == null ?
                    (<h3>No hay favorito</h3>):
                    (
                        <div style={{backgroundColor: 'grey'}}>
                            <h2>{this.state.favorito.titulo}</h2>
                            <p>{this.state.favorito.descripcion}</p>
                            <img src={this.state.favorito.imagen} style={{width: '200px', height: 'auto'}} />
                        </div>
                    )
                }
                <hr />
                {
                    this.state.comics.map((comic, index)  => {
                        return(<Comic key={index} index={index} comic={comic} favoritoPadre={this.setFavorito} deleteComic={this.deleteComic}></Comic>)
                    })
                }
            </div>
        )
    }

}
export default Comics;