import React from 'react';

const CountryDetails = (props) => {
  console.log(props);
  const nation = props.countries.filter((country) => {
    return props.match.params.cca3 === country.cca3;
  });
  return (
    <div>
      <h1>{nation}</h1>
    </div>
  );
};

export default CountryDetails;
