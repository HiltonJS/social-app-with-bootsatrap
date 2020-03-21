import {
  LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_USER,
  SET_USER
} from '../Types';
import axios from 'axios';

export const loginuser = (userdata, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/login', userdata)
    .then(res => {
      console.log('hey sup');
      setAuthorizationHeader(res.data.token);
      dispatch(getuserData());
      dispatch({
        type: CLEAR_ERRORS
      });
      history.push('/');
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const getuserData = () => dispatch => {
  dispatch({ type: LOADING_USER });
  axios.get('/user').then(res => {
    dispatch({
      type: SET_USER,
      payload: res.data
    });
  });
};
const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
