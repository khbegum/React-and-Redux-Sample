import {createStore, applyMiddleware} from 'redux';
import asyncreducers from './reducers';
import thunk from 'redux-thunk';

const store=createStore(asyncreducers,applyMiddleware(thunk));

export default store;
