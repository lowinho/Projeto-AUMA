import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  // isAdmin: false,
  token: false,
  user: {},
  isLoading: false,
};

// const userAdmin = localStorage.getItem("userAdmin");
// const truth = () => {
//   if (userAdmin === 'true') {
//     return true
//     } else {
//       return false
//   }
// }

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      // newState.isAdmin = truth();

      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      return newState;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    case types.UPDATE_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
}
