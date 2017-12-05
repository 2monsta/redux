import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import the store from redux so we can use it, the store is redux
import {createStore} from 'redux';

// import the provider component from react-redux so that react and redux can talk. they talk though connect but the provider component makes that happen
import { Provider} from 'react-redux';

// import main reducer(root reducer) so that we can hand it to the store
import reducers from './reducers/index';

//make a store for redux to use. use createStore brough in above, pass it reducers, which is the export of the rootReducer
//is all the little reducers together.
const theStore = createStore(reducers);

// Provider is the compoent that makes connect work(inside the container)
// it takes a prop of store, which is the redux store,
// the redux store was made by createStore() and give it the rootReducer



ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
