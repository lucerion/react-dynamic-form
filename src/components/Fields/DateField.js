import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '../Inputs';
import { DATE_FORMAT } from '../../const';

const DateField = ({ name, label, format = DATE_FORMAT}) => {
  const [value, setValue] = useState('');

  return (
    <DatePicker
      name={name}
      value={value}
      label={label}
      onChange={setValue}
      format={format}
    />
  );
};

DateField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  format: PropTypes.string,
};

export default DateField;
