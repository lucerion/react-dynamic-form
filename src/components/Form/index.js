import React, { createElement } from 'react';
import Grid from '@mui/material/Grid';
import { Consumer } from '../../store';
import { StringField, TextField, DateField, NumberField } from '../Fields';
import { STRING_TYPE, TEXT_TYPE, DATE_TYPE, NUMBER_TYPE } from '../../const';
import _ from 'lodash';

const FIELDS = {
  [STRING_TYPE]: StringField,
  [TEXT_TYPE]: TextField,
  [DATE_TYPE]: DateField,
  [NUMBER_TYPE]: NumberField,
};

const Form = () => {
  const renderFields = (fields) => Object.values(fields).map(renderField);
  const renderField = ({id, name, type }) => (
    <Grid container item spacing={2} key={id}>
      <Grid item xs={2}>
        {createElement(FIELDS[type], { name: _.camelCase(name), label: name })}
      </Grid>
    </Grid>
  );

  return (
    <Consumer>
      {({fields}) => (
        <Grid container spacing={2}>
          {renderFields(fields)}
        </Grid>
      )}
    </Consumer>
  );
};

export default Form;
