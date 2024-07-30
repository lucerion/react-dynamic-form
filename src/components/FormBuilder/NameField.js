import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../store';
import { StringField } from '../Fields';

const NameField = ({ field, ...props }) => (
  <Consumer>
    {({ changeField }) => (
      <StringField
        name="name"
        label="Name"
        onChange={({ target: { value }}) => changeField({...field, name: value })}
        {...props}
      />
    )}
  </Consumer>
);

NameField.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default NameField;
