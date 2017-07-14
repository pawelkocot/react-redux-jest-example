import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducers';
import thunk from 'redux-thunk';
import UsersComponent from './components/UsersComponent';
import Counter from './components/Counter';

const middlewares = [thunk];
const enhancers = []  ;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducer, compose(
  applyMiddleware(...middlewares),
  ...enhancers
));

render(
    <Provider store={store}>
        <UsersComponent />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
