import React, { Component } from 'react';
import { connect } from 'react-redux';
import HighestLowest from '../../components/highest-lowest/HighestLowest';

class HighestLowestDisplay extends Component {
  componentDidMount() {
    //a fetch might go here depending on how we handle the data
  }

  componentDidUpdate() {
    //we might need this lifecycle depending on how we are using the data
  }

  render() {
    return (
      //we will need to give this component the avgTemp prop it requires
      <HighestLowest />
    );
  }
}

// const mapStateToProps = state => ({
//   for the highest and lowest location
// });

// const mapDispatchToProps = dispatch => ({
//   if we are making a fetch it will live here
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(HighestLowestDisplay);
