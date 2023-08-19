import {createStore} from 'redux';
import userReducer from './reducers/userReducers';

const store = createStore(userReducer);

export default store; 