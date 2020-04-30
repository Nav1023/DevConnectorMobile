import Login from '../component/screen/Login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      //   userSignIn,
      //   getCountryCodeList,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
