import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import { createLogger } from 'redux-logger';
// import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';
import promise from 'redux-promise-middleware';

//Import All Reducer
import AppReducer from './Reducer/AppReducer';

//reducer dashboard 
import DashboardReducer from '../Pages/Main/Screens/Dashboard/Reducer/ReducerDashboard';



const AppReducerPersist = persistReducer({
  key: 'primary',
  // storage,
  storage: AsyncStorage
}, AppReducer);

const RootReducer = combineReducers({
  AppReducerPersist,

  //reducer dashboard
  DashboardReducer,

});

const Middleware = applyMiddleware(
  promise,
  createLogger({ collapsed: true })
);

export const store = createStore(RootReducer, {}, Middleware);

export const persistor = persistStore(store);
