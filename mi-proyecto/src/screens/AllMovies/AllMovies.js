import React, { Component } from "react";
import AllMoviesCards from "../../components/AllMoviesCards/AllMoviesCards";
import './AllMovies.css';
import '../../loadingGif.gif'

class AllMovies extends Component {


    constructor(props) {
        super(props)
        this.state = {
            fetching: true,
            data: [],
            nextPage: ''
        }
    }


    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=1'
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            data: data.results,
            nextPage: data.page + 1,
            fetching: false
        }))
        .catch(error => console.log(error));
    }


    showMoreCharacters () {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=${this.state.nextPage}`) //fetch de la url con la siguiente pagina
        .then(response => response.json())
        .then(data => this.setState({
            data: this.state.data.concat(data.results) ,
            nextPage: data.page + 1,
            fetching: false,
        }))
        .catch(error => console.log(error));
    }

    render() {
        return(


            this.state.fetching === true ?
                
            <img src={loadingGif} alt="wait until the page loads" />
            
            : 

            <React.Fragment>

            <div>
            
            <div className="allMoviesH1"> <h1>All Movies</h1> </div>

            <section className='allMoviesContainer'>
            
            {this.state.data.map((data, id) => <AllMoviesCards data={data} key={data + '_' + id}/>)}

            
            </section> 

            <div className="buttonVerMasAllMovies-container"> <button onClick={() => this.showMoreCharacters()} className="buttonVerMasAllMovies"  > View more </button> </div>

            </div>
            </React.Fragment>

            

        )
    }
}


export default AllMovies
