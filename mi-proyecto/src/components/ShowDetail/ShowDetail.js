import React, { Component } from 'react';
import './ShowDetailStyle.css'
import {Link} from 'react-router-dom';
//import loadingGif from "../../loadingGif.gif";
// <img src={loadingGif} alt="wait until the page loads" /> 

class ShowDetail extends Component{

    constructor(props){
        super();
        this.state = {
            id: Number(props.match.params.id),
            showInformation: {}
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

    }



    render(){
        return(
            <>
                <h1 className="main-title">Series detail</h1>

                <section className='movie-series-detail'>
                    <article className='photo-container'>
                        <img src={`https://image.tmdb.org/t/p/w1280/${this.state.showInformation.poster_path}`} alt={this.state.showInformation.name}/>
                    </article>
                    
                    <article className='data'>
                        <h3 className='detail-title'>{this.state.showInformation.name}</h3>

                        <hr className="line"></hr>

                        <p className='detail-info'>Rating: {this.state.showInformation.popularity}</p>

                        <hr className="line"></hr>

                        <p className='detail-info'>Aired from {this.state.showInformation.first_air_date} to {this.state.showInformation.last_air_date}</p>

                        <hr className="line"></hr>

                        <p className='detail-info'>{this.state.showInformation.overview}</p>

                        <hr className="line"></hr> 

                        
                        {
                            this.state.showInformation.genres.map((oneGenre, i ) => <li key={oneGenre + i}>{oneGenre.name}</li>)
                        }

                        <hr className="line"></hr>

                        <p className='favorite'> <Link to=''>Add to favourites<span class="material-symbols-outlined">heart_plus </span></Link></p> 
                    </article>
                </section>
            </>
        )
    }
}

export default ShowDetail