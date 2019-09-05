import React from 'react';
import PropTypes from 'prop-types';

function AverageTemp({ avgTemp }) {
  return (
    <>
      <h3>Average Temperatures</h3>
      <h4>{avgTemp}</h4> 
    </>
  );
}

AverageTemp.propTypes = {
  avgTemp: PropTypes.number.isRequired
};

export default AverageTemp;


