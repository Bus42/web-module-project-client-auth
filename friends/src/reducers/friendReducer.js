import {
  FRIEND_LOADING,
  FRIEND_SUCCESS,
  FRIEND_ERROR,
} from "../actions/friendActions";

const initialState = {
  loading: false,
  friends: [],
  isAuthenticated: false,
  errors: null
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIEND_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FRIEND_SUCCESS: 
    return {
        ...state,
        friends: action.payload,
        loading: false
    }
    case FRIEND_ERROR:
        return {
            ...state,
            errors: action.payload
        }

    default:
      break;
  }
};

export default friendReducer;
