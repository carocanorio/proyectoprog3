import React from "react";

//Own components//
import MovieDetail from './components/MovieDetail/MovieDetail';
import ShowDetail from './components/ShowDetail/ShowDetail';
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import NotFound from "./screens/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Favourites from "./screens/Favourites/Favourites"
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    
      <React.Fragment>
        <Header />

        <main>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/movies/id/:id' component={MovieDetail}/>
            <Route path='/shows/id/:id' component={ShowDetail}/>
            <Route path='/favourites' component={Favourites}/>

            <Route path='' component={NotFound}  />
          </Switch>
        </main>

        <Footer/>
        
      </React.Fragment>
  );
}

export default App;
