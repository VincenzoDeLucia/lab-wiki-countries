import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import CountriesList from '../src/components/CountriesList';
import CountryDetails from '../src/components/CountryDetails';

import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: undefined,
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    if (!this.state.countries) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="App">
          <Navbar />

          <CountriesList countries={this.state.countries} />

          <Switch>
            <Route
              exact
              path="/:cca3"
              render={(routeProps) => (
                <CountryDetails
                  {...routeProps}
                  countries={this.state.countries}
                />
              )}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
