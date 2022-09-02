import React, { Component } from 'react';

class Favourites extends Component{
        
        constructor(){
            super();
            this.state = {
                
            }
        };
        componentDidMount(){
            let recuperoStorage = localStorage.getItem('favourites')
            let favourites = JSON.parse(recuperoStorage);


        }

        render() {
            return(

            )
        }
    }

export default Favourites

