import React, { Component } from 'react';
import "./homeStyles.css"
import Billboard from '../../components/Billboard/Billboard';
import MorePopular from '../../components/MorePopular/MorePopular';
import Form from '../../components/Form/Form';
import SearchResultsMovies from "../../components/SearchResultsMovies/SearchResultsMovies";
import SearchResultsTVShows from '../../components/SearchResultsTVShows/SearchResultsTVShows';
import loadingGif from "../../loadingGif.gif";
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor(){
        super();
        this.state = {
            dataBillboard: [],
            dataPopular: [],
            dataSearchResults: [],
            valueSearch:'',
            dataForFilter: [],
            busqueda: false,
            textSearch: '',
            media: 'movie',
        }
    };

    componentDidMount(){

        let resultBillboard = [];
        let resultPopular = [];
         
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=1')
            .then( res => res.json())
            .then( data => resultBillboard = data.results)
            .then(() => {
                fetch('https://api.themoviedb.org/3/tv/popular?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=1') 
                .then( res => res.json())
                .then( data => resultPopular = data.results)
                .then( () => this.setState({
                    dataBillboard : resultBillboard,
                    dataPopular: resultPopular
                }))
                .catch(e=>console.log(e))
            })
            .catch(e=>console.log(e))
    }   

    // BUSCADOR
    filterMovie() {
        let textToFilter = this.state.valueSearch.toLowerCase();
  
        let movieName = this.state.dataSearchResults;
        this.setState({
          dataSearchResults: movieName.filter((Movie) => Movie.title.toLowerCase().includes(textToFilter) )})
      }; 
    
    searchResults(){
         fetch(`https://api.themoviedb.org/3/search/${this.state.media}?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&query=${this.state.textSearch}&page=1&include_adult=false`)
            .then( res => res.json())
            .then( data => this.setState({
                dataSearchResults: data.results, busqueda: true
            },
            () => console.log(this.state.dataSearchResults)
            ))
            .catch(e=>console.log(e))
    };

    clear() {
        this.setState({
            dataSearchResults: [],
            busqueda: false,
            textSearch: '',
        })
    };

    controlarCambios(event) {
        this.setState({
            textSearch: event.target.value}, 
            () => console.log(this.state.textSearch));
    };

    getMedia(event){
        this.setState({
            media: event.target.value
        }, ()=>console.log(this.state.media))
    }

    render () {
            return (

                <main className='main-home'>   

                    <Form buscar={(buscado) => this.searchResults(buscado)} 
                    textSearch={this.state.textSearch} controlarCambios={(event) => this.controlarCambios(event)} media={(e)=>this.getMedia(e)}
                    />

                    {
                        this.state.busqueda ?
                            this.state.dataSearchResults.length === 0 ?
                                <>
                                    <h1>Seach results</h1>
                                    <button type='button' onClick={() => this.clear()}>Clear search</button>
                                    <p class='sorry-par'>Sorry, we couldn't find any results</p> 
                                </>
                                : 
                                <>
                                    <button type='button' onClick={() => this.clear()}>Clear search</button>                                                                              
                                    <section className='SearchResults-container'> 
                                        { 
                                        this.state.media === 'movie' ?
                                         this.state.dataSearchResults.map((oneMovie) => <SearchResultsMovies key={oneMovie.id} data={oneMovie}/>) 
                                         :
                                         this.state.dataSearchResults.map((oneSerie) => <SearchResultsTVShows key={oneSerie.id} data={oneSerie}/>) 
                                        }                    
                                    </section>
                                </>
                        :
                        <>
                            <h2>Billboard</h2>
                            <section className="billboard">
                                {this.state.dataBillboard.length === 0 ? 
                                    <img src={loadingGif} alt="wait until the page loads" /> :
                                    <>
                                        {
                                            this.state.dataBillboard.map((oneMovie) => <Billboard key={oneMovie.id} data={oneMovie}/>)
                                        }
                                    </>
                                }
                            </section>

                            <div className='viewAllContainer'>
                                    <Link to="/AllMovies"> 
                                            <button className='viewAllButton'>View all Movies </button>
                                    </Link>
                            </div>



                            <h2>Popular TV shows</h2>
                            <section className="morePopular">
                                {this.state.dataPopular.length === 0?
                                <img src={loadingGif} alt="wait until the page loads" /> :
                                <>
                                    {
                                        this.state.dataPopular.map((oneTvShowPopular) => <MorePopular key={oneTvShowPopular.id} data={oneTvShowPopular}/>)
                                    }
                                </>
                                }
                            </section>

                            <div>
                                <Link to="/AllSeries"> 
                                            <button className='viewAllButton'>View all Series</button>
                                </Link>
                            </div>
                        </>
                    } 

                        
                </main>                    

                );
                
    }

   
}

export default Home ;