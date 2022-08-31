import React, { Component } from 'react';
import './style.css'
import Billboard from '../../components/Billboard/Billboard';
import MorePopular from '../../components/MorePopular/MorePopular';
import Form from '../../components/Form/Form';


class Home extends Component {

    constructor(){
        super();
        this.state = {
            dataBillboard: [],
            dataPopular: [],
            valueSearch:''
        }
    };

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=1')
            .then( res => res.json())
            .then( data => this.setState({
                dataBillboard: data.results                              
            }))
            .catch()
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=1') 
        .then( res => res.json())
            .then( data => this.setState({
                dataPopular: data.results                              
            }))
            .catch()
    }   

    // BUSCADOR
    filterMovie() {
        let textToFilter = this.state.valueSearch.toLowerCase();
  
        let MovieName = this.state.dataBillboard;
        this.setState({
          dataBillboard: MovieName.filter((Movie) => Movie.title.toLowerCase().includes(textToFilter) )})
      }; 
    
    searchResult(buscado){
        this.setState({
            dataBillboard: buscado, 
        })
      }

    render () {
            return (

                <main className='main-home'>   

                              <Form buscar={(buscado) => this.searchResult(buscado)}/>

                        <h2>Billboard</h2>
                        <section className="billboard">
                            {
                                this.state.dataBillboard.map((oneMovie) => <Billboard key={oneMovie.id} data={oneMovie}/>)
                            }

                            <p className='view-all'>View all</p>
                        </section>

                        <h2>More popular</h2>
                        <section className="morePopular">
                            {
                                this.state.dataPopular.map((oneMoviePopular) => <MorePopular key={oneMoviePopular.id} data={oneMoviePopular}/>)
                            }
                            <p className='view-all'>View all</p>
                        </section>
                </main>                    

                );
                
    }

   
}

export default Home ;