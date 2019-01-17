/**
* Store for Redux.
*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux-reducer/ReduxReducers';

//Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

//Logging Middleware
const logger = (store) => (next) => (action) => {
    if (typeof action !== "function") {
        console.log('dispatching-->:', action);
    }
    return next(action);
}

/*********************************************************************
 * Calling createStore to setup store for Redux with the reducers.
 * Thunk middleware is applied.
 ********************************************************************/
const magnaStore = createStore(
    reducers,
    // To enable Redux DevTools
    // createCookieMiddleware(Cookies) is to enable cookie access in Redux
    composeWithDevTools(
        applyMiddleware(logger, thunk),
    )
);
export default magnaStore;