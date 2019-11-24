import React, { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          ></FormInput>

          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          ></FormInput>

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
