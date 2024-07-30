import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiDatePicker } from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { DATE_FORMAT } from '../../const';

const DatePicker = ({ name, value, label, onChange, format = DATE_FORMAT }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MuiDatePicker
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      inputFormat={format}
      renderInput={(params) => <TextField fullWidth {...params} />}
      variant="outlined"
    />
  </LocalizationProvider>
);

DatePicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  format: PropTypes.string,
};

export default DatePicker;
