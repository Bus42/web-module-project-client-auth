import axios from 'axios'
import { BASE_URL } from '../data';

export const FRIEND_LOADING = "FRIEND_LOADING";
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS';
export const FRIEND_ERROR = 'FRIEND_ERROR';

export const friendLoading = () => {
    return {
        type: FRIEND_LOADING,
    };
};

export const friendSuccess = (friend) => {
    
    return ({
        type: FRIEND_SUCCESS,
        payload: friend
    })
}

export const friendError = (message) => {
    
    return ({
        type: FRIEND_ERROR,
        payload: message
    })
}

export const fetchFriendData = ({method, endpoint, body}) => dispatch => {
    axios.defaults.url = BASE_URL;
    console.log('fetchFriendData called')
    console.log(`${endpoint}`)
    dispatch(friendLoading());
    axios[method](`${BASE_URL}${endpoint}`, body)
    .then(({data}) => {
        dispatch(friendSuccess(data))
    })
    .catch(({message}) => {
        dispatch(friendError(message))
    })
}
