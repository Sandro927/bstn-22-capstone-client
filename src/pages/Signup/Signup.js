import axios from 'axios';
import React from 'react';
import './Signup.scss'

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
          <h1 className="signup__title">Sign up!</h1>
          <form className="signup__form" onSubmit={this.handleSubmit}>
              <div className="signup__field">
                  <label htmlFor="name" className="signup__field">
                    Name
                  </label>
                  <input type="text" id="name" name="name" className="signup__input" value={this.state.name} onChange={this.handleChange}/>
              </div>

              <div className="signup__field">
                  <label htmlFor="username" className="signup__field">
                    Username
                  </label>
                  <input type="text" id="username" name="username" className="signup__input" value={this.state.username} onChange={this.handleChange}/>
              </div>

              <div className="signup__field">
                  <label htmlFor="password" className="signup__field">
                    Password
                  </label>
                  <input type="password" id="password" name="password" className="signup__input" value={this.state.password} onChange={this.handleChange}/>
              </div>

              <button>Sign Up</button>
          </form>
        </div>
      </main>
    )
  }
  
}
