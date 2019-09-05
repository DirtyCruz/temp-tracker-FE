import React from 'react';
import PropTypes from 'prop-types';

function LocationDetail({ temp }) {
  return (
    <h5>{temp}</h5>
  );
}

LocationDetail.propTypes = {
  temp: PropTypes.number.isRequired
};

export default LocationDetail;
