import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

function Locations({ locationsAndTemps }) {
  const locationsList = locationsAndTemps.map(({ location, temperature }) => (
    <li key={location}>
      <Location 
        temperature={temperature}
        location={location}
      />
    </li>
  ));
  return (
    <ul>
      {locationsList}
    </ul>
  );
}

Locations.propTypes = {
  locationsAndTemps: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
  })).isRequired
};

export default Locations;
