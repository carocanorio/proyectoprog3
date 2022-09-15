import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './billboardstyle.css'


class Billboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
            favsText: 'Add to favourites',
            inFavs: false,
            id: ' '
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
                id: id
            })
        } else {
            favourites.push(id)
            this.setState({
                favsText: 'Delete from favourites',
                id: id
            })
        }



        let favsToString = JSON.stringify(favourites)

        localStorage.setItem('favourites', favsToString)

        console.log(localStorage);
    }

    render(){
        return(
            <React.Fragment>
                <article className='card-container'>                            
                                            
                    <Link to={`/movies/id/${this.props.data.id}`}> 
                    <img src= {`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt="Cartel película"/>
                    </Link>
                  
                    <h3>{ this.props.data.title}</h3> 
                    <p>Release date: {this.props.data.release_date}</p>
                    {this.state.viewMore ? 
                        <section className='extra'>                            
                            <p>Overview: {this.props.data.overview}</p> 
                            <p className='more' onClick={() => this.hide()}>View less</p>
                        </section>
                        :                                                 
                        <p className='more' onClick={() => this.show()}>View more</p>                         
                        
                    } 
                    <div className='go-to-detail-container'>
                        <Link className='go-to-detail' to={`/movies/id/${this.props.data.id}`}>Go to detail</Link>    
                        <section className='favorite-container'>
                            <p className='favorite' onClick={()=> this.addAndDeleteFavourites(this.props.data.id)}>{this.state.favsText}</p> 
                        </section>
                    </div>  
                                                                     
                    
                </article>

            </React.Fragment>
        )
    }
}

export default Billboard ;