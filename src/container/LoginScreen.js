import Login from '../component/screen/Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
   state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    userSignIn,
    getCountryCodeList
    },dispatch);
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Login);




/**
* Africa_CDC
* LoginScreen.js
* @author Akhileshwar maurya
* @description Created on 04/06/2019
* Copyright © 2019 Africa_CDC. All rights reserved.
*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
userSignIn,
getCountryCodeList
} from '../../redux/actions/UserActions';
import Login from '../../components/screens/common/Login';

const mapStateToProps = (state) => {
const { isInternetConnectivityAvailable } = state.appState;
return {
isNetworkConnected : isInternetConnectivityAvailable,
countryList: state.userState.countryList,
countryCodeWithCountryList: state.userState.countryCodeWithCountryList
};
};


const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
userSignIn,
getCountryCodeList
},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);