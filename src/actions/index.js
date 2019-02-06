// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getData = () => dispatch => {
  dispatch({type: FETCH})
  axios
    .get('https://swapi.co/api/people/')
    .then(response => {console.log(response); 
      dispatch({ type: FETCH, payload: response.data.results});}
      )
    .catch(err => {dispatch({ type: FETCH, payload: err});
  });
}
