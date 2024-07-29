import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const StringField = ({ label, name, value, onChange }) => (
  <TextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
  />
);

StringField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default StringField;
