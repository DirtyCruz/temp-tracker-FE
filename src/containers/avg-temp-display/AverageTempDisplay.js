import React, { Component } from 'react';
import { connect } from 'react-redux';
import AverageTemp from '../../components/avg-temp/AverageTemp';

class AverageTempDisplay extends Component {
  
  componentDidMount() {
    //a fetch might go here depending on how we handle the data
  }

  componentDidUpdate() {
    //we might need this lifecycle depending on how we are using the data
  }

  render() {
    return (
      //we will need to give this component the avgTemp prop it requires
      <AverageTemp />
    );
  }
}

// const mapStateToProps = state => ({
//   our average temp might live here if it is in state
// });

// const mapDispatchToProps = dispatch => ({
//   if we are making a fetch in an action payload it will be dispatched here
// });

export default connect(

)(AverageTempDisplay);
