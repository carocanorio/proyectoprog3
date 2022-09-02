import React, { Component } from 'react';
import './MovieDetailStyle.css';
import {Link} from 'react-router-dom';
//import loadingGif from "../../loadingGif.gif";
// <img src={loadingGif} alt="wait until the page loads" /> 
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



    render(){
        return(
            <>
                <h1 className="main-title">Movie detail</h1>

                <section className='movie-series-detail'>
                    <article className='photo-container'>
                        <img src={`https://image.tmdb.org/t/p/w1280/${this.state.movieInformation.poster_path}`} alt={this.state.movieInformation.title}/>
                    </article>
                    
                    <article className='data'>
                        <h3 className='detail-title'>{this.state.movieInformation.title}</h3>

                        <hr className="line"></hr>

                        <p className='detail-info'>Rating: {this.state.movieInformation.popularity}</p>

                        <hr className="line"></hr>

                        <p className='detail-info'>Release date: {this.state.movieInformation.release_date}</p>

                        <hr className="line"></hr>

                        <p className='detail-info'>{this.state.movieInformation.overview}</p>

                        <hr className="line"></hr> 

                        {
                            this.state.movieInformation.genres.map((oneGenre, i ) => <li key={oneGenre + i}>{oneGenre.name}</li>)
                        }
                        <hr className="line"></hr>

                        <p className='favorite'> <Link to=''>Add to favourites<span class="material-symbols-outlined">heart_plus </span></Link></p> 
                    </article>
                </section>
            </>
        )
    }
}

export default MovieDetail