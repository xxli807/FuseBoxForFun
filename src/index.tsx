import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

import { browserHistory, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import routes from './settings/routes';
import configureStore from './settings/configureStore';
import { ApplicationState }  from './settings/store';
import Layout  from './share/Layout';

// ReactDOM.render(
//   <App />, document.getElementById('root'));

const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout} ></Route>
      </Router>
    </Provider>
), document.getElementById('root'));

