import React, { Component } from 'react';
import './MovieDetailStyle.css';
import {Link} from 'react-router-dom';

class MovieDetail extends Component{

    constructor(props){
        super();
        this.state = {
            id: Number(props.match.params.id),
            movieInformation: {}
        }
    };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=cbe0b85cca8ab920f1387b58d1b0ce3a`)
        .then( response => response.json() )
        .then( data => this.setState({
            movieInformation: data
            },
            () => console.log(data)
            ))
        .catch( error =>	console.log('El error fue: ' + error))

    }

    /*
Género al que pertenece la película.
link o botón agregar a “favoritos”.*/

    render(){
        return(
            <article className='card-container'>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.movieInformation.poster_path}`} alt=''/>
                <h2>{this.state.movieInformation.title}</h2>
                <p>Rating: {this.state.movieInformation.popularity}</p>
                <p>Release date: {this.state.movieInformation.release_date}</p>
                <p>{this.state.movieInformation.overview}</p>
                <ul>
                    {
                        this.state.movieInformation.genres.map((oneGenre, i ) => <li key={oneGenre + i}>{oneGenre.name}</li>)
                    }
                </ul>
                <p className='favorite'> <Link to=''>Add to favourites<span class="material-symbols-outlined">heart_plus </span></Link></p> 

            </article>
        )
    }
}

export default MovieDetail