import React, {Component} from 'react';
import './../assets/Canciones.css';

class Canciones extends Component{
    
    constructor(){
        super();
        this.state = {
            songs: [],
            ultimaCancion: []
        };
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/canciones")
        .then(response => (response.json()))
        .then(data =>{
            this.setState({songs: data.data})
            this.setState({ultimaCancion:data.data[data.total - 1]})
            })
        .catch(e=>console.log(e))
          
    }
    
   

    render(){
    
      

        return(
            <div className= "contenedorCanciones">
             <h1 className='tituloCanciones'>Todas las canciones</h1>   
              {this.state.songs.map((song, i) => {
                return (
                    <div key={song + i} className="cancion">
                        <h4>Titulo: {song.titulo}</h4>
                        <p>Duración: {Math.trunc(song.duracion/60)} Minutos {song.duracion%60} Segundos</p>
                        <p>Genero: {song.generos.name}</p>
                        <p>Artista: {song.artistas.nombre} {song.artistas.apellido}</p>
                    </div>
                );})}
                <h2 className='ultimaCancion'>Ultima canción: {this.state.ultimaCancion.titulo}</h2>
                              
            </div>
        )
        }
    
}

export default Canciones