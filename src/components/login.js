import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from './text-field';
import Button from './button';

const Login = (props) => {
  return (
    <Fragment>
      <TextField
        label="Username"
        InputProps={{
          style: { fontSize: '1.5rem' },
          disableUnderline: true,
          inputProps: { style: { textIndent: '.5rem' } },
        }}
        value={props.username}
        onChange={props.handleUsername}
      />
      <TextField
        label="Password"
        InputProps={{
          style: { fontSize: '1.5rem' },
          disableUnderline: true,
          inputProps: { style: { textIndent: '.5rem' } },
        }}
        type="password"
        value={props.password}
        onChange={props.handlePassword}
      />
      <Button onClick={props.handleSubmit}>Sign In</Button>
    </Fragment>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
};

export default Login;
