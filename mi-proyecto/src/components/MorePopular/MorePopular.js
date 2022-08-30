import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


class MorePopular extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    };

    render(){
        return(
            <React.Fragment>
            <article className='card-container'>                            
                    <div class="photo-container">                         
                        <Link to={`/movies/id/${this.props.data.id}`}> 
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel película"/>
                        </Link>
                    </div>
                    <h3>{ this.props.data.title}</h3> 
                    <p>Release date: {this.props.data.release_date}</p>
                    <p className='more'>View more</p> 
                    <section className='extra'>
                        <p>Description: {this.props.data.overview}</p> 
                    </section>
                    <Link to={`/movies/id/:id`}>Go to detail </Link>
                    <p className='favorite'>{/*INCONO FAV */}</p>                                               
                    
                </article>

        </React.Fragment>
        )
    }
}

export default MorePopular;