import Login from '../component/screen/Login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from '../redux/actions/LoginAction';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
