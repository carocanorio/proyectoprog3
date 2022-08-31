import React, {Component} from 'react';
import './formStyles.css'

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            movies:[],           
            textSearch: ''
        }
    }

    evitarSubmit(event) {
        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=${this.state.textSearch}&page=1&include_adult=false`)
            .then( res => res.json())
            .then( data => this.setState({
                movies: data.results                             
            },() => this.props.buscar(this.state.movies)))
            .catch()
    }   
    controlarCambios(event) {
        this.setState({
            textSearch: event.target.value}, () => console.log(this.state.textSearch));
    }                

    render(){
        return(
            <React.Fragment>               
                <form onSubmit={(event)=>this.evitarSubmit(event)}>               
                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.textSearch} placer holder= 'Search Movies'/>  
                <button type="">Search</button>
                </form> 
                
            </React.Fragment>
        )
    }

}


export default Form;