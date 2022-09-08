import React, {Component} from 'react';
import './formStyles.css'

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
     
        }
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.props.buscar();
    }                 

    render(){
        return(
            <React.Fragment>               
                <form onSubmit={(event)=>this.evitarSubmit(event)}>                 
                <input  onChange={(event)=>this.props.controlarCambios(event)} value={this.props.textSearch} placeholder='Search Movies' />
                <label>Peliculas</label>
                <input onChange={(e)=>this.props.media(e)} type="radio" name="media" value="movie"/>
                <label>Series</label>
                <input onChange={(e)=>this.props.media(e)} type="radio" name="media" value="tv"/>
            
                </form> 
            </React.Fragment>
        )
    }

}


export default Form;