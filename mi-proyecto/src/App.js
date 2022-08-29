import React from "react";

//Own components//
import MovieDetail from '../src/components/MovieDetail/MovieDetail';
import ShowDetail from '../src/components/ShowDetail/ShowDetail';
import Menu from './components/Menu/Menu.js'

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    
      <>
        <Menu />
        <Switch>
            <Route path='/movies/id/:id' component={MovieDetail}/>
            <Route path='/shows/id/:id' component={ShowDetail}/>
        </Switch>
      </>
  );
}

export default App;
