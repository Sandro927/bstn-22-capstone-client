import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <main className="login">
      <div className="login__content">
        <h1 className="login__title">Login</h1>
        <form className="login__form">

            <div className="login__field">
                <label htmlFor="username" className="login__field">
                  Username
                </label>
                <input type="text" id="username" name="username" className="login__input" />
            </div>

            <div className="login__field">
                <label htmlFor="password" className="login__field">
                  Password
                </label>
                <input type="password" id="password" name="password" className="login__input" />
            </div>

            {/* <div className="login__field">
                <label htmlFor="confirmPassword" className="login__field">
                  Confirm Password
                </label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="login__input" />
            </div> */}

            <button>Login</button>
        </form>
      </div>
    </main>
    )
  }
}

export default Login