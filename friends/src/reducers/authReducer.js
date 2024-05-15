import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from "../actions/authActions";

const initialState = {
  loading: false,
  isAuthenticated: false,
  errors: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        errors: initialState.errors,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
