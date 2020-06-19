import reducers from './reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    app: reducers
});

export default rootReducer;
