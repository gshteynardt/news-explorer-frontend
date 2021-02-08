export const createMap = inputArr => inputArr.reduce((acc, item) => {
  const id = `${item.source} + ${item.title}`;
  acc[id] = item;
  return acc;
}, {})
