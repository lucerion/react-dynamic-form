import React, { createElement } from 'react';
import { Consumer } from '../../store';
import { Input, Textarea, Date } from '../Fields';
import { STRING_TYPE, TEXT_TYPE, DATE_TYPE } from '../../const';
import _ from 'lodash';

const FIELDS = {
  [STRING_TYPE]: Input,
  [TEXT_TYPE]: Textarea,
  [DATE_TYPE]: Date,
};

const Form = () => {
  const renderFields = (fields) => Object.values(fields).map(renderField);
  const renderField = ({ _id, name, type }) => createElement(FIELDS[type], { name: _.camelCase(name), label: name });

  return (
    <Consumer>
      {({fields}) => renderFields(fields)}
    </Consumer>
  );
};

export default Form;
