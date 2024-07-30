import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Consumer } from '../../store';

const DeleteFieldButton = ({ field, ...props }) => (
  <Consumer>
    {({ deleteField }) => <Button {...props} onClick={() => deleteField(field)}>x</Button>}
  </Consumer>
);

DeleteFieldButton.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default DeleteFieldButton;
