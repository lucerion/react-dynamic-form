import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const StringField = ({ name, value, label, onChange, ...props }) => (
  <TextField
    name={name}
    value={value}
    label={label}
    onChange={onChange}
    {...props}
  />
);

StringField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default StringField;
