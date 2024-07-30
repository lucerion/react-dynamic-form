import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const NumberField = ({ name, value, label, onChange }) => (
  <TextField
    type="number"
    name={name}
    value={value}
    label={label}
    onChange={onChange}
    fullWidth
    variant="outlined"
  />
);

NumberField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default NumberField;
