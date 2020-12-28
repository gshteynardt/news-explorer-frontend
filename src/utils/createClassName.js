const createClassName = (inputMainClass, inputClassName) => {
  return [
    inputMainClass,
    inputClassName,
  ].join(' ');
}

export default createClassName;
