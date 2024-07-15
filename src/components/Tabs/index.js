import React from 'react';
import Paper from '@mui/material/Paper';
import { default as MuiTabs } from '@mui/material/Tabs';
import { default as MuiTab } from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Tab from './Tab';
import FormBuilder from '../FormBuilder';
import Form from '../Form';

const Tabs = () => {
  const [currentTab, selectTab] = React.useState(0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper square>
          <MuiTabs value={currentTab} onChange={(_event, value) => selectTab(value)}>
            <MuiTab label="Fields" />
            <MuiTab label="Form" />
          </MuiTabs>
        </Paper>
      </Grid>
      <Tab xs={12} value={currentTab} index={0} >
        <FormBuilder />
      </Tab>
      <Tab xs={12} value={currentTab} index={1} >
        <Form />
      </Tab>
    </Grid>
  );
};

export default Tabs;
