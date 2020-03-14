import React, {Component} from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import ViewProducts from './views/viewProducts/ViewProducts';
import './App.css';

export default class App extends Component {

  /**
   * We can implement authenticate logic here. For then demo am not creating any auth pages.
   */
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/itemslist" name="Items List" component={ViewProducts} />
          {/* <Route path="/" name="Items List" component={NotFound} /> */}
          <Redirect from="/" to="/itemslist" />
        </Switch>
      </HashRouter>
    )
  }
}

