import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AllMoviesCards.css'

class AllMoviesCards extends Component{

    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
            favsText: 'Add to favourites',
            inFavs: false,
            id: this.props.data.id
        }
    };
    show(){
        this.setState( {viewMore: true} )
    }
    hide(){
        this.setState({viewMore: false} )
    }
    
    componentDidMount() {
        let favourites = []
        let recuperoStorage = localStorage.getItem('favourites')

        if(recuperoStorage !== null) {
                
            let storageToArray = JSON.parse(recuperoStorage)
            favourites = storageToArray
            
            console.log(favourites);
            console.log(this.props.data.id)
            if(favourites.includes(this.props.data.id)) {
                this.setState({
                    favsText: 'Delete from favourites'
                })
            }
        }
    }

    addAndDeleteFavourites(id) {
        let favourites = []
        let recuperoStorage = localStorage.getItem('favourites')

        if(recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage)

            favourites = storageToArray

        }

        if(favourites.includes(id)) {
            favourites = favourites.filter(eachID => eachID !== id)
            this.setState({
                favsText: 'Add to favourites',
                id: this.props.data.id
            })
        } else {
            favourites.push(id)
            this.setState({
                favsText: 'Delete from favourites',
                id: this.props.data.id
            })
        }



        let favsToString = JSON.stringify(favourites)

        localStorage.setItem('favourites', favsToString)

        console.log(localStorage);
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
                        <section className='favouritesAllMoviesCard'>
                            <p className='addFavouriteAllMoviesCard' onClick={()=> this.addAndDeleteFavourites(this.props.data.id)}>{this.state.favsText}</p> 
                        </section>      
                    </div>                                              
                    
                </article>

            </React.Fragment>
        )
    }
}

export default AllMoviesCards ;