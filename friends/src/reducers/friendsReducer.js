import {
  FRIENDS_LOADING,
  FRIENDS_SUCCESS,
  FRIENDS_ERROR,
  ADD_FRIEND_SUCCESS,
  FRIEND_DETAIL_SUCCESS,
} from "../actions/friendsActions";

const initialState = {
  loading: false,
  friends: [],
  error: null,
  activeFriend: {name: '', age: '', id: '', email: ''}
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
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: [...state.friends, action.payload],
      };
    case FRIEND_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        activeFriend: action.payload,
      };
    default:
      return state;
  }
};

export default friendsReducer;
