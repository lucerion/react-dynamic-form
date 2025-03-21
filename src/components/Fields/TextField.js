import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiTextField } from '@mui/material/TextField';

const TextField = ({ name, value, label, onChange, ...props}) => (
  <MuiTextField
    multiline
    name={name}
    value={value}
    label={label}
    onChange={onChange}
    {...props}
  />
);

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
