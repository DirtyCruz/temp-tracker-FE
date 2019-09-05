import { connect } from 'react-redux';
import LocationDetails from '../../components/detail-view/LocationDetails';

//for this one I am not sure we need to make a fetch?
//if we aren't than we can just use the connect container

// const mapStateToProps = state => ({
//   where we will use any selectors
// });

export default connect(
  // mapStateToProps,
)(LocationDetails);
