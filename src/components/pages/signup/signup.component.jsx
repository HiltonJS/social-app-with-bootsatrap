import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../../images/img-01.png';
import './signup.styles.scss';
import axios from 'axios';

class Signup extends Component {
  state = {
    email: '',
    handle: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };

  handleSubmit = e => {
    const newUserData = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    e.preventDefault();

    axios
      .post('/signup', newUserData)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data
        });
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container login-container">
          <div className="row login-row ">
            <div className="col-2"></div>
            <div className="col-6 ">
              <img src={AppLogo} alt="" />
            </div>
            <div className="col-4">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label htmlfor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    {errors.email}
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Handle</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                {errors.general}
                <button type="submit" class="btn btn-primary cent">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
