import React, { Component } from 'react';
import AppLogo from '../../../images/logo.png';
import './login.styles.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loginuser } from '../../../redux/actions/userActions';
class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.ui.errors) {
      this.setState({ errors: nextProps.ui.errors });
    }
  }
  // static getDerivedStateFromProps(nextprops, prevState) {
  //   if (nextprops.ui.errors) {
  //     if (nextprops.ui.errors !== prevState.errors) {
  //       return { errors: nextprops.ui.errors };
  //     } else {
  //       return null;
  //     }
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginuser(userData, this.props.history);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors, loading } = this.state;
    return (
      <div className="container login-container">
        <div className="row login-row ">
          <div className="col-2"></div>
          <div className="col-6 ">
            <img src={AppLogo} alt="" />
          </div>
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <small id="emailHelp" class="form-text text-muted">
                  {errors.email}
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                />
                <small id="emailHelp" class="form-text text-muted">
                  {errors.password}
                </small>
              </div>
              <small id="emailHelp" class="form-text text-muted">
                {errors.general}
              </small>
              <button type="submit" class="btn btn-primary cent">
                Submit
                {loading && (
                  <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginuser: PropTypes.func.isRequired,
  ui: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  ui: state.ui
});
const mapActionToProps = {
  loginuser
};

export default connect(mapStateToProps, mapActionToProps)(Login);
