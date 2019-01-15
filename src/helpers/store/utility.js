/**
 * @description - update an object
 * @param {*} oldObject
 * @param {*} updatedValues
 * @returns {object} - updated object
 */
const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});

export default updateObject;
