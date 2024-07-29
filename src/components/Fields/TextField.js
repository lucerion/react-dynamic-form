import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiTextField } from '@mui/material/TextField';

const TextField = ({ label, name, value, onChange }) => (
  <MuiTextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    multiline
    fullWidth
    variant="outlined"
  />
);

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
