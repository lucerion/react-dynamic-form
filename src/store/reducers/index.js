import { ACTION_TYPES } from '../actions';

const reducers = (state, action) => {
  const { addField, deleteField, changeField } = ACTION_TYPES;
  const { fields } = state;
  const { field, type } = action;

  switch (type) {
  case addField: {
    const lastID = Object.keys(fields).at(-1);
    const id = lastID ? parseInt(lastID) + 1 : 0;

    return { ...state, fields: { ...fields, [id]: { ...field, id } } };
  }
  case deleteField: {
    return { ...state, fields: Reflect.deleteProperty({ ...fields }, field.id) };
  }
  case changeField: {
    return { ...state, fields: { ...fields, [field.id]: field } };
  }
  default:
    throw new Error(`'${type}' not found!`);
  }
};

export default reducers;
