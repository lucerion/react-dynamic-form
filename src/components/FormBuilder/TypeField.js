import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../store';
import { Select } from '../Inputs';

import { STRING_TYPE, TEXT_TYPE, DATE_TYPE, NUMBER_TYPE, DEFAULT_FIELD_TYPE } from '../../const';

const FIELD_TYPES_OPTIONS = {
  [STRING_TYPE]: 'String',
  [TEXT_TYPE]: 'Text',
  [DATE_TYPE]: 'Date',
  [NUMBER_TYPE]: 'Number',
};

const TypeField = ({ field, ...props }) => (
  <Consumer>
    {({ changeField }) => (
      <Select
        name="type"
        label="Type"
        value={field.type || DEFAULT_FIELD_TYPE}
        items={FIELD_TYPES_OPTIONS}
        onChange={({ target: { value }}) => changeField({...field, type: value })}
        {...props}
      />
    )}
  </Consumer>
);

TypeField.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default TypeField;
