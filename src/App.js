import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {

  constructor (){
    super();
    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  


  render (){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInAndSignUp}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch> 
      </div>
    );
  } 
}

export default App;
