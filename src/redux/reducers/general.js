const preloadedState = {
  isLoggedIn: null,
  status: {

  },
  errors: {
    buttons: {

    }
  }
};
export default function general(state = preloadedState, action) {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {...state};
    case "SET_CLIENT_VERSION":
      return {
        ...state,
        client_version: action.payload
      };
    case "LOGIN_LOADING": {
      return {
        ...state,
        status: {
          ...state.status,
          login: true
        }
      }
    }
    default:
      return state;
  }
}