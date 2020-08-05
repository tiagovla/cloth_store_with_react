import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/' component={HomePage}></Route>
      </Switch> 
    </div>
  );
}

export default App;
