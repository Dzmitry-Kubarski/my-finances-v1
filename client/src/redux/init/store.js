// core 
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// reducer
import { rootReducer } from './rootReducer';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
    }
})

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
