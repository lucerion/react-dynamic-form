import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducers from '../reducers';
import { addField, deleteField, changeField } from '../actions';
import Context from '../contexts';

const INITIAL_STATE = {
  fields: {},
};

const Provider = ({ children }) => {
  const [{ fields }, dispatch] = useReducer(reducers, INITIAL_STATE);

  const value = {
    fields,
    addField: (field) => dispatch(addField(field)),
    deleteField: (field) => dispatch(deleteField(field)),
    changeField: (field) => dispatch(changeField(field)),
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
