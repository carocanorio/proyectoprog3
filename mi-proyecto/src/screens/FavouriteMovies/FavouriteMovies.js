import React, { Component } from 'react';
import MoviesFavs from "../../components/MoviesFavs/MoviesFavs"
import './favouriteMovies.css'


class FavouriteMovies extends Component{
        
        constructor(){
            super();
            this.state = {
                showMovies: [],
                favsExist: ''
            }
        };

        componentDidMount(){
            let recuperoMovieFavs = localStorage.getItem('favourites');
            let movieFavs = JSON.parse (recuperoMovieFavs);
            let movies = [];

            
                movieFavs.forEach((id) => {
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cbe0b85cca8ab920f1387b58d1b0ce3a`)
                    .then( response => response.json())
                    .then( data => { 
                         movies.push(data);
                         console.log(this.state.showMovies.length);
                         // aca hago el setState
                         this.setState({
                             showMovies: movies
                         });
                    }) // pusheo la data
                    return true; 
                });
        

            
        }

        eliminarDefavs(id) {
            const pelisFiltradas = this.state.showMovies.filter((movie) => movie.id !== id);

            this.setState({
                showMovies: pelisFiltradas
            })
        }
        

        render() {
            
            
                return (
                    <div>
                        <h2 className='h3Favourite'>Favourite movies</h2>
                        <section className='favouritesContainer'>
                            {this.state.showMovies.map((data, id) => <MoviesFavs key={data + '_' + id} data={data} eliminar={(id) => this.eliminarDefavs(id)} />)}
                        </section>
                    </div>
                )
            
        }
    }

export default FavouriteMovies

