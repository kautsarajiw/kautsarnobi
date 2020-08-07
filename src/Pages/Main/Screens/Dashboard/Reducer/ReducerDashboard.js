const initialState = {

  //data dashboard
  
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {    
    //GET DATA LIST KUPON
      case 'GET_DATA_DASHBOARD':
        return {
          ...state, 

        }
      break;

      default:
        return state;
  }
};

export default DashboardReducer;