import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Transactions from '@components/Transactions';
import store from './store';

class App extends Component {
  render(){
    return(
      <Fragment>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Transactions} />
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    )
  }
}

export default App;
