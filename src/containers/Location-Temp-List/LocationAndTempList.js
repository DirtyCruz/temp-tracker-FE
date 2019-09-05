import React, { Component } from 'react';
import { connect } from 'react-redux';
import Locations from '../../components/locations-list/Locations';

class LocationAndTempList extends Component {

  componentDidMount() {
    //a fetch will live in here
  }

  render() {
    return (
      //we will need to give Locations the array
      <Locations />
    );
  }
}

// const mapStateToProps = state => ({
//   our array of locations with current temp will live here
// });

// const mapDispatchToProps = dispatch => ({
//   if we are making a fetch in an action this is where it lives
// });

export default connect(
  //mapStateToProps
  //mapDispatchToProps
)(LocationAndTempList);
