import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Inventory from '../Inventory/Inventory'
import Sold from '../Sold/Sold';
import Detailing from '../Detailing/Detailing';
import About from '../About/About';
import Contact from '../Contact/Contact';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/sold" component={Sold} />
        <Route path="/detailing" component={Detailing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}
