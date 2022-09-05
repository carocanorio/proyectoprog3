import React, { Component } from 'react';
import SeriesFavs from "../../components/SeriesFavs/SeriesFavs"
import './favouriteSeries.css'

class FavouriteSeries extends Component{
        
        constructor(){
            super();
            this.state = {
                showSeries: []
            }
        };

        componentDidMount(){
            let recuperoSeriesFavs = localStorage.getItem('favouriteSeries');
            let serieFavs = JSON.parse (recuperoSeriesFavs);
            let series = [];

            serieFavs.forEach((id) => {
                fetch(`https://api.themoviedb.org/3/tv/${this.props.data.id}?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US`) // cambiar URL
                .then( response => response.json())
                .then( data => { 
                     series.push(data);
                     console.log(this.state.showSeries.length);
                     // aca hago el setState
                     this.setState({
                         showSeries: series
                     });
                }) // pusheo la data
                return true; 
            });


        }
        

        render() {
            
            return(
                <div>
                    <h2 className='h3FavouriteSeries'>Favourite Series</h2>
                    <section className='favouritesContaineSeriesr'>
                        {this.state.showSeries.map((data, id) => <SeriesFavs key={data + '_' + id} data={data} />)}
                    </section>
                </div>
            )
        }
    }

export default FavouriteSeries

