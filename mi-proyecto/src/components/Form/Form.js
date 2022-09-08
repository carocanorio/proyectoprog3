import React, {Component} from 'react';
import './formStyles.css'

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            movies:[],
            series: []
        }
    }


    evitarSubmit(event) {

        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&query=${this.props.textSearch}&page=1&include_adult=false`)
            .then( res => res.json())
            .then( data => this.setState({
                movies: data.results
            },
            () => console.log(this.state.movies)
            ))
            .catch()
    }                 

    render(){
        return(
            <React.Fragment>               
                <form onSubmit={(event)=>this.evitarSubmit(event)}>                 
                <input  onChange={(event)=>this.props.controlarCambios(event)} value={this.props.textSearch} placeholder='Search Movies' />
                <label>Peliculas</label>
                <input type="radio" name="media" value="movie" checked/>
                <label>Series</label>
                <input type="radio" name="media" value="serie"/>
            
                </form> 
            </React.Fragment>
        )
    }

}


export default Form;