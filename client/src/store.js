import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import codeState from './code/state/reducer';

export default createStore(combineReducers({
    codeState
}), applyMiddleware(thunk));
