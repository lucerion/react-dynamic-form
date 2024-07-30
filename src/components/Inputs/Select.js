import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Select = ({ name, value, label, onChange, items, ...props }) => {
  const renderItems = (items) => (
    Object.entries(items).map(([key, value]) => <MenuItem value={key} key={key}>{value}</MenuItem>)
  );

  return (
    <TextField
      select
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      {...props}
    >
      {renderItems(items)}
    </TextField>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.object,
};

export default Select;
