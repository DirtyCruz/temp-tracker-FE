import React from 'react';
import PropTypes from 'prop-types';

function HighestLowest({ highestLocation, lowestLocation }) {
  return (
    <>
      <span>
        <h4>Location with highest temp:</h4>
        <h4>{highestLocation}</h4>
      </span>
      <span>
        <h4>Location with lowest temp:</h4>
        <h4>{lowestLocation}</h4>
      </span>
    </>
  );  
}

HighestLowest.propTypes = {
  highestLocation: PropTypes.string.isRequired,
  lowestLocation: PropTypes.string.isRequired
};

export default HighestLowest;

