import React, { Component } from 'react';
import './ShowDetailStyle.css'
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

            if(favouriteSeries.includes(this.state.id)) {
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
                <h1 className="main-title-series">Series detail</h1>

                {
                    this.state.showInformation.genres.length === 0 ? 
                        <div className='gif-series'>
                            <img src={loadingGif} alt="wait until the page loads" /> 
                        </div> 
                        :

                        <section className='series-detail'>
                        <article className='photo-container-series'>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.state.showInformation.poster_path}`} alt={this.state.showInformation.name}/>
                        </article>
                        
                        <article className='data-series'>
                            <h2 className='detail-title-series'>{this.state.showInformation.name}</h2>

                            <p className='detail-info-series'>Rating: {Number(this.state.showInformation.popularity).toFixed(0)}</p>

                            <p className='detail-info-series'>Aired from {this.state.showInformation.first_air_date} to {this.state.showInformation.last_air_date}</p>

                            <p className='detail-info-series'>{this.state.showInformation.overview}</p>
                            
                            <ul className='detail-info-series'>
                                Genres:
                                {
                                    this.state.showInformation.genres.map((oneGenre, i) => <li className='detail-info-series' key={oneGenre.id + i}>{oneGenre.name}</li>)
                                }
                            </ul>

                            <section className='favorite-container-series'>
                                <p className='favorite-series' onClick={()=> this.addAndDeleteFavourites(this.state.showInformation.id)}>{this.state.favsText}</p> 
                            </section>
                        </article>
                    </section>
                }

                
            </>
        )
    }
}

export default ShowDetail