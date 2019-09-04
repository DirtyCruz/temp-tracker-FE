import React from 'react';
import PropTypes from 'prop-types';

function Location({ location, temperature }) {
  return (
    <span>
      <h4>{location}</h4>
      <h5>{temperature}</h5>
    </span>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
};

export default Location;
