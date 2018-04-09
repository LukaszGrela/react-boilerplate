import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataReducer from '../reducers/dataReducer';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
    const store = createStore(
        combineReducers({
            data: dataReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};