import React, { Component } from 'react';
import "./homeStyles.css"
import Billboard from '../../components/Billboard/Billboard';
import MorePopular from '../../components/MorePopular/MorePopular';
import Form from '../../components/Form/Form';
import SearchResults from '../../components/SearchResults/SearchResults';
import loadingGif from "../../loadingGif.gif";


class Home extends Component {

    constructor(){
        super();
        this.state = {
            dataBillboard: [],
            dataPopular: [],
            dataSearchResults: [],
            valueSearch:'',
            dataForFilter: []
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
                .catch()
            })
            .catch()


    }   

    // BUSCADOR
    filterMovie() {
        let textToFilter = this.state.valueSearch.toLowerCase();
  
        let movieName = this.state.dataSearchResults;
        this.setState({
          dataSearchResults: movieName.filter((Movie) => Movie.title.toLowerCase().includes(textToFilter) )})
      }; 
    
    searchResult(buscado){
        this.setState({
            dataSearchResults: buscado, 
            busqueda: true
        })
      }

    render () {
            return (

                <main className='main-home'>   

                     <Form buscar={(buscado) => this.searchResult(buscado)}/>

                     {this.state.dataSearchResults.length === 0 ? 
                        <p >Sorry, we couldn't find any results</p> :                                                                                      
                         <section className='SearchResults-container'> 
                                { this.state.dataSearchResults.map((oneMovie) => <SearchResults key={oneMovie.id} data={oneMovie}/>) }                    
                            
                        </section>
                    } 

                        <h2>Billboard</h2>
                        <section className="billboard">
                            {this.state.dataBillboard.length === 0 ? 
                                <img src={loadingGif} alt="wait until the page loads" /> :
                                <>
                                    {
                                        this.state.dataBillboard.map((oneMovie) => <Billboard key={oneMovie.id} data={oneMovie}/>)
                                    }
                                    <p className='view-all'>View all</p>
                                </>
                            }
                        </section>

                        <h2>Popular TV shows</h2>
                        <section className="morePopular">
                            {this.state.dataPopular.length === 0?
                            <img src={loadingGif} alt="wait until the page loads" /> :
                            <>
                                {
                                    this.state.dataPopular.map((oneTvShowPopular) => <MorePopular key={oneTvShowPopular.id} data={oneTvShowPopular}/>)
                                }
                                <p className='view-all'>View all</p>
                            </>
                            }
                        </section>
                </main>                    

                );
                
    }

   
}

export default Home ;