import React from 'react';
import Grid from '@mui/material/Grid';
import { Consumer } from '../../store';
import NameField from './NameField';
import TypeField from './TypeField';
import AddFieldButton from './AddFieldButton';
import DeleteFieldButton from './DeleteFieldButton';
import { DEFAULT_FIELD_TYPE } from '../../const';

const DEFAULT_FIELD = {
  name: '',
  type: DEFAULT_FIELD_TYPE,
};

const FormBuilder = () => {
  const renderFields = (fields) => Object.values(fields).map(renderField);

  const renderField = (field) => (
    <Grid container item alignItems="center" spacing={2} key={field.id}>
      <Grid item xs={2}>
        <NameField field={field} fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={2}>
        <TypeField field={field} fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <DeleteFieldButton field={field} variant="outlined" color="secondary" size="large" />
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      <Consumer>
        {({ fields }) => renderFields(fields)}
      </Consumer>
      <Grid item xs={2}>
        <AddFieldButton field={DEFAULT_FIELD} fullWidth variant="outlined" color="primary" size="large" />
      </Grid>
    </Grid>

  );
};

export default FormBuilder;
