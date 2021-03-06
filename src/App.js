import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';
import Profile from './pages/Profile/Profile';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  setLoginState = (loginState) => {
    console.log('yes!');
    this.setState({
      isLoggedIn: loginState
    })
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route path="/" exact render={(routerProps) => <Feed setLoginState={this.setLoginState} {...routerProps}/>}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/users/current/Dashboard" render={(routerProps)=><Dashboard {...routerProps}/>} />
            <Route path="/users/:userId/Profile" render={(routerProps)=><Profile {...routerProps}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
