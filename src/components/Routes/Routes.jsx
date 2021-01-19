import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Inventory from '../Inventory/Inventory'
import Detailing from '../Detailing/Detailing';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Financing from '../Financing/Financing';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/detailing" component={Detailing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/financing" component={Financing} />
      </Switch>
    );
  }
}
