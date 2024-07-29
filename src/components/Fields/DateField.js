import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '../Inputs';
import { DATE_FORMAT } from '../../const';

const DateField = ({ label, name, format = DATE_FORMAT}) => {
  const [value, setValue] = useState('');

  return (
    <DatePicker
      label={label}
      name={name}
      value={value}
      onChange={setValue}
      format={format}
    />
  );
};

DateField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  format: PropTypes.string,
};

export default DateField;
