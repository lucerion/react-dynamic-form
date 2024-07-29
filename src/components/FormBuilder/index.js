import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { StringField } from '../Fields';
import { Select } from '../Inputs';
import { Consumer } from '../../store';
import { STRING_TYPE, TEXT_TYPE, DATE_TYPE, NUMBER_TYPE } from '../../const';

const FIELD_TYPES_OPTIONS = {
  [STRING_TYPE]: 'String',
  [TEXT_TYPE]: 'Text',
  [DATE_TYPE]: 'Date',
  [NUMBER_TYPE]: 'Number',
};

const DEFAULT_FIELD_TYPE = STRING_TYPE;

const DEFAULT_FIELD = {
  name: '',
  type: DEFAULT_FIELD_TYPE,
};

const FormBuilder = () => {
  const renderFields = (fields, deleteField, changeField) =>
    Object.values(fields).map((field) => renderField(field, deleteField, changeField));

  const renderField = (field, deleteField, changeField) => (
    <Grid container item alignItems="center" spacing={2} key={field.id}>
      <Grid item xs={2}>
        <StringField
          name="name"
          label="Name"
          onChange={({ target: { value }}) => changeField({...field, name: value })}
        />
      </Grid>
      <Grid item xs={2}>
        <Select
          name="type"
          label="Type"
          value={field.type || DEFAULT_FIELD_TYPE}
          items={FIELD_TYPES_OPTIONS}
          onChange={({ target: { value }}) => changeField({...field, type: value })}
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="outlined" color="secondary" size="large" onClick={() => deleteField(field)}>x</Button>
      </Grid>
    </Grid>
  );

  return (
    <Consumer>
      {({ fields, addField, deleteField, changeField }) => (
        <Grid container spacing={4}>
          {renderFields(fields, deleteField, changeField)}
          <Grid item xs={2}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => addField(DEFAULT_FIELD)}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      )}
    </Consumer>
  );
};

export default FormBuilder;
