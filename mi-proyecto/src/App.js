import React from "react";

//Own components//
import MovieDetail from './screens/MovieDetail/MovieDetail';
import ShowDetail from './components/ShowDetail/ShowDetail';
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import NotFound from "./screens/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import FavouriteMovies from "./screens/FavouriteMovies/FavouriteMovies"
import FavouriteSeries from "./screens/FavouriteSeries/FavouriteSeries"
import { Route, Switch } from 'react-router-dom';
import AllMovies from "./screens/AllMovies/AllMovies";
import AllSeries from "./screens/AllSeries/AllSeries"

function App() {
  return (
    
      <React.Fragment>
        <Header />

        <main>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/movies/id/:id' component={MovieDetail}/>
            <Route path='/shows/id/:id' component={ShowDetail}/>
            <Route path='/favourite/movies' component={FavouriteMovies}/>
            <Route path='/favourite/series' component={FavouriteSeries}/>
            <Route path='/AllMovies' component={AllMovies}/>
            <Route path='/AllSeries' component={AllSeries}/>
            <Route path='' component={NotFound} />
          </Switch>
        </main>

        <Footer/>
        
      </React.Fragment>
  );
}

export default App;
