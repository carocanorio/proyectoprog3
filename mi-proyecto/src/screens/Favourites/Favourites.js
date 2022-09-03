import React, { Component } from 'react';
import Favs from "../../components/Favs/Favs"

class Favourites extends Component{
        
        constructor(){
            super();
            let recuperoFavs = localStorage.getItem('favourites');
            let favourites = JSON.parse (recuperoFavs);
            this.state = {
                favourites: favourites
            }
        };
        

        render() {
            return(
                <section className=''>
                {this.state.favourites.map((fav, id) => <Favs key={fav + '' + id} />)}
                </section>
            )
        }
    }

export default Favourites


