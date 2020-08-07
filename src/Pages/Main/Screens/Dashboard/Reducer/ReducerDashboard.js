const initialState = {

  //data Dashboard
  total_asset : 0,
  hour24change : 0,

  //status get 
  statusGetData: false,
};

const ReducerDashboard = (state = initialState, action) => {
  switch (action.type) {  
    //Reducer Dashboard
      case 'GET_DATA_DASHBOARD_REJECTED':
        return {
          ...state, 
          statusGetData: false,
          total_asset : 0,
          hour24change : 0,
        }
      break;

      case 'GET_DATA_DASHBOARD_PENDING':
        return {
          ...state, 
          statusGetData: true,
          
        }
      break;

      case 'GET_DATA_DASHBOARD_FULFILLED':
        return {
          ...state, 
          statusGetData: false,
          total_asset : action.payload.data.total_asset,
          hour24change : action.payload.data["24hourchange"],
        }
      break;

      default:
        return state;
  }
};

export default ReducerDashboard;