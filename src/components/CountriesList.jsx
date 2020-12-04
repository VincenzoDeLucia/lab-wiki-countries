import React from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {this.props.countries.map((country) => {
            return (
              <Link to={'/' + country.cca3} key={country.name.official}>
                {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
