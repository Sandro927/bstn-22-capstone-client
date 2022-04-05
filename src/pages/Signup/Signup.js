import axios from 'axios';
import React from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {

  state = {
    name: "",
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/users/register', {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    })
    .then(res => {
      console.log(res)
      this.props.history.push('/login')
    })
    .catch(err => {
      console.log(err);
  
      
    })
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <main className="signup">
        <div className="signup__content">
          <h1 className="signup__title">Sign up Today!</h1>
          <form className="signup__form" onSubmit={this.handleSubmit}>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="signup__input" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    placeholder="Enter your name"
                  />
            
                  <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    className="signup__input" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                    placeholder="Enter your username"
                  />

                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="signup__input" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    placeholder="Enter your password"
                  />
              

              <button className="signup__button">Sign Up</button>

              <div className="signup__footer">
                <h6 className="signup__spacer"><span className="signup__footer-span">Already have an account?</span></h6>
                <Link to="/login" className="signup__link">LOG IN</Link>
              </div>
          </form>
        </div>
      </main>
    )
  }
  
}
