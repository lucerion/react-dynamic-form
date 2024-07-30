import { ACTION_TYPES } from '../actions';

const { addField, deleteField, changeField } = ACTION_TYPES;

const newFields = ({ fields }, { field, type }) => {
  switch (type) {
  case addField: {
    const lastID = Object.keys(fields).at(-1);
    const id = lastID ? parseInt(lastID) + 1 : 0;

    return { ...fields, [id]: { id, ...field } };
  }
  case deleteField: {
    const newFields = { ...fields };
    delete newFields[field.id];

    return newFields;
  }
  case changeField: {
    return { ...fields, [field.id]: field };
  }
  default:
    throw new Error(`'${type}' not found!`);
  }
};

const reducers = (state, action) => ({ ...state, fields: newFields(state, action) });

export default reducers;
