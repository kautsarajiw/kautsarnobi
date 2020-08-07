const initialState = {
    //status login    
    appIsLogin: false,

    //token
    token:null,

};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {    
        case 'SET_IS_LOGIN':
          return {
            ...state, 
            //status login
            appIsLogin:true,

            //token
            token:action.meta.token,

          }
        break;

        //Redcuer logout
        case 'SET_IS_LOGOUT':
          return {
            ...state,
            //status login
            appIsLogin: false,

            //token
            token:null,
          };
        break;

        default:
          return state;
    }
};

export default AppReducer;