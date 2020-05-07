import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAIL} from './ActionTypes';
import AppConfig from '../../../app.json';

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({email, password});
  try {
    const res = await axios.post(
      `${AppConfig.BASE_URL}/api/auth`,
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
