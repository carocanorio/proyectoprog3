import React, { Component } from "react";

class FormAll extends Component {
    constructor(){
        super()
        this.state = {
            valor: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarCambios(event){
        this.setState(
            {
                valor: event.target.value
            },
            () => this.props.filtro(this.state.valor)
        )

    }

    render(){
        return(
            <form onSubmit={(e) => this.evitarSubmit(e)}>
                <input type="text" onChange={(e) => this.guardarCambios(e)} value={this.state.valor} placeholder= 'Search'/>
            </form>
        )
    }
}

export default FormAll