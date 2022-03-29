import React from 'react';
import './Signup.scss'

function Signup() {
  return (
    <main className="signup">
      <div className="signup__content">
        <h1 className="signup__title">Sign up!</h1>
        <form className="signup__form">
            <div className="signup__field">
                <label htmlFor="name" className="signup__field">
                  Name
                </label>
                <input type="text" id="name" name="name" className="signup__input" />
            </div>

            <div className="signup__field">
                <label htmlFor="username" className="signup__field">
                  Username
                </label>
                <input type="text" id="username" name="username" className="signup__input" />
            </div>

            <div className="signup__field">
                <label htmlFor="password" className="signup__field">
                  Password
                </label>
                <input type="password" id="password" name="password" className="signup__input" />
            </div>

            {/* <div className="signup__field">
                <label htmlFor="confirmPassword" className="signup__field">
                  Confirm Password
                </label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="signup__input" />
            </div> */}
            <button>Sign Up</button>
        </form>
      </div>
    </main>
  )
}

export default Signup