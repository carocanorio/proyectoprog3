import React, { Component } from "react";
import AllSeriesCards from "../../components/AllSeriesCards/AllSeriesCards";
import './AllSeries.css';
import '../../loadingGif.gif'

class AllSeries extends Component {


    constructor(props) {
        super(props)
        this.state = {
            fetching: true,
            data: [],
            nextPage: ''
        }
    }


    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/tv/popular?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=1'
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            data: data.results,
            nextPage: data.page + 1,
            fetching: false
        }))
        .catch(error => console.log(error));
    }


    showMoreSeries () {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=088e2f24d66adc86c55d5e994558d967&language=en-US&page=${this.state.nextPage}`) //fetch de la url con la siguiente pagina
        .then(response => response.json())
        .then(data => this.setState({
            data: this.state.data.concat(data.results) ,
            nextPage: data.page + 1,
            fetching: false,
        }))
        .catch(error => console.log(error));
    }

    render() {
        return(


            this.state.fetching === true ?
                
            <img src={loadingGif} alt="wait until the page loads" />
            
            : 

            <React.Fragment>

            <div>
            
            <div className="allSeriesH1"> <h1>All Series</h1> </div>

            <section className='allSeriesContainer'>
            
            {this.state.data.map((data, id) => <AllSeriesCards data={data} key={data + '_' + id}/>)}

            
            </section> 

            <div className="buttonVerMasAllSeries-container"> <button onClick={() => this.showMoreSeries()} className="buttonVerMasAllSeries"> View more </button> </div>

            </div>
            </React.Fragment>

            

        )
    }
}


export default AllSeries
