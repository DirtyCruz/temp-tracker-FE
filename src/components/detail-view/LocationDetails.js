import React from 'react';
import PropTypes from 'prop-types';
import LocationDetail from './LocationDetail';

function LocationDetails({ location, temps }) {
  const tempsList = temps.map((temp, i) => (
    <li key={i}>
      <LocationDetail temp={temp} />
    </li>
  ));
  return (
    <>
    <h3>{location}</h3>
    <ul>
      {tempsList}
    </ul>
    </>
  );
}

LocationDetails.propTypes = {
  location: PropTypes.string.isRequired,
  temps: PropTypes.array.isRequired
};

export default LocationDetails;
