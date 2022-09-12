import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tvshows.css'


class SearchResultsTVShows extends Component{

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
            <article className='card-container-series'>                            
                                          
                    <Link to={`/shows/id/${this.props.data.id}`}> 
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt={this.props.data.name}/>
                    </Link>                    
                    <h3>{ this.props.data.name}</h3> 
                    <p>First air date: {this.props.data.first_air_date}</p>                    
                    {this.state.viewMore ? 
                        <section className='extra-series'>                            
                            <p>Description: {this.props.data.overview}</p> 
                            <p className='more-series' onClick={() => this.hide()}>View less</p>
                        </section>
                        :                                                 
                        <p className='more-series' onClick={() => this.show()}>View more</p>                         
                        
                    } 
                    <div>
                        <Link className='go-to-detail-series' to={`/shows/id/${this.props.data.id}`}>Go to detail</Link>                    
                        <p className='favourites-series'><span className="material-symbols-outlined">heart_plus </span></p>  
                    </div>
                                                                 
                    
                </article>

        </React.Fragment>
        )
    }
}

export default SearchResultsTVShows;