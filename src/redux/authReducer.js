
const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case 'USER_AUTHENTICATED':
        
        newState = {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          isAuthenticated: true,
          error: null,
        };
        break;
      case 'USER_AUTHENTICATION_FAILED':
        newState = {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          error: action.payload.error,
        };
        break;
      default:
        newState = state;
    }
    console.log("Incoming action:", action);
    console.log("New State:", newState);
    return newState;
  };
  
  
  export default authReducer;
  