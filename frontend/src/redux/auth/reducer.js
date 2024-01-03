import {
  CREATEUSER_LOADING,
  CREATEUSER_ERROR,
  LOGINUSER_ERROR,
  LOGINUSER_LOADING,
  LOGINUSER_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case CREATEUSER_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CREATEUSER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGINUSER_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGINUSER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGINUSER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};
