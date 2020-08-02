import isArray from './isArray';

const makeClassName = (clsArray) => {
  if (!isArray(clsArray)) {
    return null;
  }
  return clsArray.filter(Boolean).join(' ').trim() || null;
};

export default makeClassName;
