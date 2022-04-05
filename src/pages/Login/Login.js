import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  state = {
    username: "",
    password: "",
    userSubmitted: false
  }

  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      userSubmitted: true
    })

    axios.post('http://localhost:3030/users/login', {
        username: this.state.username,
        password: this.state.password,
    })
    .then(res => {
       
        let token = res.data.token;
        sessionStorage.setItem('authToken', token)
        this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
  }
  

  render() {
    return (
      <main className="login">
        <div className="login__content">
          <h1 className="login__title">GG</h1>
          <form className="login__form" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="login__input" 
              placeholder="Enter username"
              value={this.state.username} 
              onChange={this.handleChange}
            />
        
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="login__input"
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.handleChange}
            />
              <button className="login__button">LOGIN</button>
          </form>
          <div className="login__footer">
            <h6 className="login__spacer"><span className="login__footer-span">OR</span></h6>
            <Link to='/signup' className="login__link">SIGN UP</Link>
          </div>
          
        </div>
      </main>
    )
  }
}

