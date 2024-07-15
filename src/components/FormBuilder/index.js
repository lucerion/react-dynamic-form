import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Input, Select } from '../Fields';

const FormBuilder = () => {
  const items = [
    'String',
    'Text',
    'Number',
    'Date',
  ];

  return (
    <Grid container spacing={4}>
      <Grid container item alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Input name="name" label="Name" />
        </Grid>
        <Grid item xs={2}>
          <Select name="type" label="Type" items={items} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" color="secondary" size="large">
            x
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button fullWidth variant="outlined" color="primary" size="large">Add</Button>
      </Grid>
    </Grid>
  );
};

export default FormBuilder;
