import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './morePopularStyle.css'


class MorePopular extends Component{

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
            <article className='card-container'>                            
                                          
                    <Link to={`/movies/id/${this.props.data.id}`}> 
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel película"/>
                    </Link>                    
                    <h3>{ this.props.data.title}</h3> 
                    <p>Release date: {this.props.data.release_date}</p>                    
                    {this.state.viewMore ? 
                        <section className='extra'>                            
                            <p>Description: {this.props.data.overview}</p> 
                            <p className='more' onClick={() => this.hide()}>View less</p>
                        </section>
                        :                                                 
                        <p className='more' onClick={() => this.show()}>View more</p>                         
                        
                    } 
                    <div>
                        <Link className='go-to-detail' to={`/movies/id/${this.props.data.id}`}>Go to detail</Link>                    
                        <p className='favorite'><span class="material-symbols-outlined">heart_plus </span></p>  
                    </div>
                                                                 
                    
                </article>

        </React.Fragment>
        )
    }
}

export default MorePopular;