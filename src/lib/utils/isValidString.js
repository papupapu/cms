import isValidVar from './isValidVar';

const isValidString = (x) =>
  isValidVar(x) && typeof x === 'undefined' && x !== null;
export default isValidString;
