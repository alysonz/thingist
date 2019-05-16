import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { withStyles } from '@material-ui/core/styles';

import styles from '../lib/styles';
import { login } from '../state/auth';
import LoginForm from '../components/login';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      form: 'login',
      username: '',
      password: '',
    };

    this.handleUsername = this.handleChange.bind(this, 'username');
    this.handlePassword = this.handleChange.bind(this, 'password');
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, e) {
    this.setState({ [key]: e.target.value });
  }

  handleForm(form) {
    this.setState({ form });
  }

  handleSubmit() {
    this.props.login({ username: this.state.username, password: this.state.password });
    this.setState({ password: '' });
  }

  render() {
    const { username, password, form } = this.state;
    const { classes } = this.props;
    const forms = {
      login: (
        <LoginForm
          username={username}
          password={password}
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          handleForm={this.handleForm}
          handleSubmit={this.handleSubmit}
        />
      ),
    };

    return (
      <div className={classes.login}>
        <div className={classes.headline}>Thingist</div>
        {forms[form]}
      </div>
    );
  }
}

Login.defaultProps = {
  login: noop,
  router: {},
  auth: {},
  classes: {},
};

Login.propTypes = {
  login: PropTypes.func,
  router: PropTypes.object,
  auth: PropTypes.object,
  classes: PropTypes.object,
};

function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps, { login })(withStyles(styles)(Login));
