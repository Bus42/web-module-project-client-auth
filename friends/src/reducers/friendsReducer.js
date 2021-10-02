import {
  FRIENDS_LOADING,
  FRIENDS_SUCCESS,
  FRIENDS_ERROR,
} from "../actions/friendsActions";

const initialState = {
  loading: false,
  friends: [],
  error: null,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
      };
    case FRIENDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default friendsReducer;
