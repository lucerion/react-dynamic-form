import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const NumberField = ({ label, name, value, onChange }) => (
  <TextField
    type="number"
    label={label}
    variant="outlined"
    name={name}
    value={value}
    onChange={onChange}
    fullWidth
  />
);

NumberField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default NumberField;
