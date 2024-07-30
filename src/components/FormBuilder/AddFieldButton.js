import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Consumer } from '../../store';

const AddFieldButton = ({ field, ...props }) => (
  <Consumer>
    {({ addField }) => (
      <Button {...props} onClick={() => addField(field)}>
        Add
      </Button>
    )}
  </Consumer>
);

AddFieldButton.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default AddFieldButton;
