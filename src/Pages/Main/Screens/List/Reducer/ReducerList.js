const initialState = {

  //data list
  dataList:[],

  //status data list
  statusGetDataList:false,

};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {    
    //GET DATA LIST
    case 'GET_DATA_LIST_REJECTED':
      return {
        ...state, 
        statusGetDataList: false,
        dataList:[],
      }
    break;

    case 'GET_DATA_LIST_PENDING':
      return {
        ...state, 
        statusGetDataList: true,
        
      }
    break;

    case 'GET_DATA_LIST_FULFILLED':
      return {
        ...state, 
        statusGetDataList: false,
        dataList:action.payload.data.data
      }
    break;

      default:
        return state;
  }
};

export default ListReducer;