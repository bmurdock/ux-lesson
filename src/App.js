import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Accordian from './components/Accordian';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/example" component={Example} />
          <Route exact path='/page1'>
            <div>Whatever content you want here.</div>
          </Route>
          <Route path="/accordian">
            <Accordian title='Test Accordian'>
              <p>Just testing this. The image is broken...</p>
              <img src="" />
            </Accordian>
          </Route>
        </Switch>
      </Router>
    )
  }
}

function Example() {
  return (
    <div>Some example thing</div>
  )
}
