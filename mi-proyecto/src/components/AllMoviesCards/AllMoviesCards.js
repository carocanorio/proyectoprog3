import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AllMoviesCards.css'

class AllMoviesCards extends Component{

    constructor(props){
        super(props);
        this.state = {
            viewMore: false
        }
    };
    show(){
        this.setState( {viewMore: true} )
    }
    hide(){
        this.setState({viewMore: false} )
    }

    render(){
        return(
            <React.Fragment>
                <article className='eachMovieContainer'>                            
                                            
                    <Link to={`/movies/id/${this.props.data.id}`}> 
                    <img src= {`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel película"/>
                    </Link>
                  
                    <h3>{ this.props.data.title}</h3> 
                    <p>Release date: {this.props.data.release_date}</p>
                    {this.state.viewMore ? 
                        <section className='extraAllMoviesCard'>                            
                            <p>Overview: {this.props.data.overview}</p> 
                            <p className='moreAllMoviesCard' onClick={() => this.hide()}>View less</p>
                        </section>
                        :                                                 
                        <p className='moreAllMoviesCard' onClick={() => this.show()}>View more</p>                         
                        
                    } 
                    <div className='go-to-detail-containerAllMoviesCard'>
                        <Link className='go-to-detailAllMoviesCard' to={`/movies/id/${this.props.data.id}`}>Go to detail</Link>                    
                        <p className='favouritesAllMoviesCard'><span className="material-symbols-outlined">heart_plus </span></p>  
                    </div>                                              
                    
                </article>

            </React.Fragment>
        )
    }
}

export default AllMoviesCards ;