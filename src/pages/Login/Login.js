import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(res)
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
        <h1 className="login__title">Login</h1>
        <form className="login__form" onSubmit={this.handleSubmit}>

            <div className="login__field">
                <label htmlFor="username" className="login__field">
                  Username
                </label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  className="login__input" 
                  value={this.state.username} 
                  onChange={this.handleChange}
                />
            </div>

            <div className="login__field">
                <label htmlFor="password" className="login__field">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="login__input" 
                  value={this.state.password} 
                  onChange={this.handleChange}
                />
            </div>

            <button>Login</button>
        </form>
      </div>
    </main>
    )
  }
}

