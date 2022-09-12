import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tvshows.css'


class SearchResultsTVShows extends Component{

    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
            favsText: 'Add to favourites',
            inFavs: false,
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
            if(favourites.includes(this.props.data.id)) {
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
                favsText: 'Add to favourites',
                id: id
            })
        } else {
            favouriteSeries.push(id)
            this.setState({
                favsText: 'Delete from favourites',
                id: id
            })
        }



        let favsToString = JSON.stringify(favourites)

        localStorage.setItem('favouriteSeries', favsToString)

        console.log(localStorage);
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
                        <section className='favorite-container'>
                            <p className='favorite' onClick={()=> this.addAndDeleteFavourites(this.props.data.id)}>{this.state.favsText}</p> 
                        </section>  
                    </div>
                                                                 
                    
                </article>

        </React.Fragment>
        )
    }
}

export default SearchResultsTVShows;