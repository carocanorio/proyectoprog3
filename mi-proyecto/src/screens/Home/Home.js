import React, { Component } from 'react';
import './style.css'
import Billboard from '../../components/Billboard/Billboard';
import MorePopular from '../../components/MorePopular/MorePopular';


class Home extends Component {

    constructor(){
        super();
        this.state = {
            dataBillboard: [],
            dataPopular: []
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
    

    render () {
            return (

                <main className='main-home'>

                    <h1>Home </h1>

                        <h2>Billboard</h2>
                        <section className="billboard">
                            {
                                this.state.dataBillboard.map((oneMovie) => <Billboard key={oneMovie.id} data={oneMovie}/>)
                            }
                        </section>

                        <h2>More popular</h2>
                        <section className="morePopular">
                            {
                                this.state.dataPopular.map((oneMoviePopular) => <MorePopular key={oneMoviePopular.id} data={oneMoviePopular}/>)
                            }
                        </section>
                </main>                    

                );
                
    }

   
}

export default Home ;