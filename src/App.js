
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/users/current/Dashboard" render={(routerProps)=><Dashboard {...routerProps}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
