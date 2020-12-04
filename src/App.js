import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import CountriesList from '../src/components/CountriesList';
import CountryDetails from '../src/components/CountryDetails';

import countries from './countries.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <CountriesList countries={countries} />

        <Switch>
          {/* <Route exact path="/:cca3" /> */}

          <Route
            exact
            path="/:cca3"
            render={(routeProps) => (
              <CountryDetails {...routeProps} countries={countries} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
