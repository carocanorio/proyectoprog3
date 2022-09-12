import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './morePopularStyle.css'


class MorePopular extends Component{

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
            <React.Fragment>
            <article className='card-container'>                            
                                          
                    <Link to={`/shows/id/${this.props.data.id}`}> 
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
                        <Link className='go-to-detail' to={`/shows/id/${this.props.data.id}`}>Go to detail</Link>                    
                        <section className='favorite-container'>
                            <p className='favorite' onClick={()=> this.addAndDeleteFavourites(this.props.data.id)}>{this.state.favsText}</p> 
                        </section>    
                    </div>
                                                                 
                    
                </article>

        </React.Fragment>
        )
    }
}

export default MorePopular;