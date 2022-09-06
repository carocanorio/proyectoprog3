import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './seriesFavs.css'

class SeriesFavs extends Component{
    constructor(props){
        super();
        this.state = {
            viewMore: false
        }
    }
    show(){
        this.setState( {viewMore: true} )
    }
    hide(){
        this.setState({viewMore: false} )
    }

    render() { //cambiar fetch
        return(
            <article className='favouriteSeriesContainer'>                            
                                          
                    <Link to={`/movies/id/${this.props.data.id}`}> 
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel serie"/>
                    </Link>                    
                    <h3>{ this.props.data.name}</h3> 
                    <p>First air date: {this.props.data.first_air_date}</p>                    
                    {this.state.viewMore ? 
                        <section className='extra'>                            
                            <p>Overview: {this.props.data.overview}</p> 
                            <p className='more' onClick={() => this.hide()}>View less</p>
                        </section>
                        :                                                 
                        <p className='more' onClick={() => this.show()}>View more</p>                         
                        
                    } 
                    <div>
                        <Link className='go-to-detail' to={`/movies/id/${this.props.data.id}`}>Go to detail</Link>                    
                        <p className='favourites'><span className="material-symbols-outlined">heart_plus </span></p>  
                    </div>
                                                                 
                    
            </article>
        )
    }
}

export default SeriesFavs