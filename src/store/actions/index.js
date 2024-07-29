const ACTION_TYPES = {
  addField: 'ADD_FIELD',
  deleteField: 'DELETE_FIELD',
  changeField: 'CHANGE_FIELD',
};

const addField = (field) => ({ type: ACTION_TYPES.addField, field });
const deleteField = (field) => ({ type: ACTION_TYPES.deleteField, field });
const changeField = (field) => ({ type: ACTION_TYPES.changeField, field });

export {
  ACTION_TYPES,
  addField,
  deleteField,
  changeField,
};
