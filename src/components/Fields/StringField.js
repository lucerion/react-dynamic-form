import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const StringField = ({ name, value, label, onChange }) => (
  <TextField
    name={name}
    value={value}
    label={label}
    onChange={onChange}
    fullWidth
    variant="outlined"
  />
);

StringField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default StringField;
