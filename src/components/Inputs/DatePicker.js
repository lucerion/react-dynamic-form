import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiDatePicker } from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { DATE_FORMAT } from '../../const';

const DatePicker = ({ label, name, value, onChange, format = DATE_FORMAT }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MuiDatePicker
      label={label}
      variant="outlined"
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      inputFormat={format}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

DatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  format: PropTypes.string,
};

export default DatePicker;
