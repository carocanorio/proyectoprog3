import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AllSeriesCards.css'

class AllSeriesCards extends Component{

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
                <article className='card-containerAllSeries'>                            
                                          
                    <Link to={`/shows/id/${this.props.data.id}`}> 
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel serie"/>
                    </Link>                    
                    <h3>{ this.props.data.name}</h3> 
                    <p>First air date: {this.props.data.first_air_date}</p>                    
                    {this.state.viewMore ? 
                        <section className='extraAllSeries'>                            
                            <p>Overview: {this.props.data.overview}</p> 
                            <p className='moreAllSeries' onClick={() => this.hide()}>View less</p>
                        </section>
                        :                                                 
                        <p className='moreAllSeries' onClick={() => this.show()}>View more</p>                         
                        
                    } 
                    <div>
                        <Link className='go-to-detailAllSeries' to={`/shows/id/${this.props.data.id}`}>Go to detail</Link>                    
                        <p className='favouritesAllSeries'><span className="material-symbols-outlined">heart_plus </span></p>  
                    </div>
                                                                 
                    
                </article>

            </React.Fragment>
        )
    }
}

export default AllSeriesCards ;