import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { withStyles } from '@material-ui/core/styles';

import styles from '../lib/styles';
import { login } from '../state/auth';
import TextField from '../components/text-field';
import Button from '../components/button';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.login({ username: this.state.username, password: this.state.password });
    this.setState({ password: '' });
  }

  handleChange(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const { username, password, form } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.login}>
        <div className={classes.headline}>Thingist</div>
        <TextField
          label="Username"
          InputProps={{
            style: { fontSize: '1.5rem' },
            disableUnderline: true,
            inputProps: { style: { textIndent: '.5rem' } },
          }}
          value={username}
          onChange={this.handleUsername}
        />
        <TextField
          label="Password"
          InputProps={{
            style: { fontSize: '1.5rem' },
            disableUnderline: true,
            inputProps: { style: { textIndent: '.5rem' } },
          }}
          type="password"
          value={password}
          onChange={this.handlePassword}
        />
        <Button onClick={this.handleSubmit}>Sign In</Button>
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
