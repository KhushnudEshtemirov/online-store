import React from 'react';

import './sign-up.styles.scss';

const SignUp = () => (
  <div className="sign-up">
    <h2>I do not have an account</h2>
    <span>Sign up with your email and password</span>
    <form className="group">
      <input className="form-input" type="text" value="Display Name" />
      <input className="form-input" type="text" value="Email" />
      <input className="form-input" type="text" value="Password" />
      <input type="submit" value="Sign up" />
    </form>
  </div>
);

export default SignUp;