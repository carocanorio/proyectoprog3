import React, { Component } from 'react';
import '../MovieDetail/MovieDetailStyle.css'
import loadingGif from "../../loadingGif.gif";

class ShowDetail extends Component{

    constructor(props){
        super();
        this.state = {
            id: Number(props.match.params.id),
            showInformation: {
                genres: []
            },
            favsText: 'Add to favourites',
            inFavs: false,
        }
    };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=cbe0b85cca8ab920f1387b58d1b0ce3a`)
        .then( response => response.json() )
        .then( data => this.setState({
            showInformation: data
            },
            () => console.log(data)
            ))
        .catch( error =>	console.log('El error fue: ' + error))

        let favouriteSeries = []
        let recuperoStorage = localStorage.getItem('favouriteSeries')

        if(recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage)
            favouriteSeries = storageToArray

            if(favouriteSeries.includes(this.state.showInformation.id)) {
                this.setState({
                    favsText: 'Delete from favourites'
                })
            }
        }

    }

    addAndDeleteFavourites(id) {
        let favouriteSeries = []
        let recuperoStorage = localStorage.getItem('favouriteSeries')

        if(recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage)

            favouriteSeries = storageToArray

        }

        if(favouriteSeries.includes(id)) {
            favouriteSeries = favouriteSeries.filter(eachID => eachID !== id)
            this.setState({
                favsText: 'Add to favourites'
            })
        } else {
            favouriteSeries.push(id)
            this.setState({
                favsText: 'Delete from favourites'
            })
        }



        let favsToString = JSON.stringify(favouriteSeries)

        localStorage.setItem('favouriteSeries', favsToString)

        console.log(localStorage);
    }



    render(){
        return(
            <>
                <h1 className="main-title">Series detail</h1>

                {
                    this.state.showInformation.length === 0 ? 
                        <div className='gif'>
                            <img src={loadingGif} alt="wait until the page loads" /> 
                        </div> :

                        <section className='movie-series-detail'>
                        <article className='photo-container'>
                            <img src={`https://image.tmdb.org/t/p/w1280/${this.state.showInformation.poster_path}`} alt={this.state.showInformation.name}/>
                        </article>
                        
                        <article className='data'>
                            <h2 className='detail-title'>{this.state.showInformation.name}</h2>

                            <p className='detail-info'>Rating: {this.state.showInformation.popularity}</p>

                            <p className='detail-info'>Aired from {this.state.showInformation.first_air_date} to {this.state.showInformation.last_air_date}</p>

                            <p className='detail-info'>{this.state.showInformation.overview}</p>
                            
                            <ul className='detail-info'>
                                Genres:
                                {
                                    this.state.showInformation.genres.map((oneGenre, i) => <li className='detail-info' key={oneGenre.id + i}>{oneGenre.name}</li>)
                                }
                            </ul>

                            <section className='favorite-container'>
                                <p className='favorite' onClick={()=> this.addAndDeleteFavourites(this.state.showInformation.id)}>{this.state.favsText}</p> 
                            </section>
                        </article>
                    </section>
                }

                
            </>
        )
    }
}

export default ShowDetail