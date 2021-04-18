// https://bigfrontend.dev/problem/implement-Immutability-helper

const isObject = data => typeof data === 'object' && data !== null;

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  // your code here
  
  // when the command is not nested
  if ('$push' in command) {
    if (Array.isArray(data)) {
      return [...data, ...command['$push']];
    } else {
      throw new Error('not an array');
    }
  }

  if ('$apply' in command) {
    return command['$apply'](data);
  }

  if ('$set' in command) {
    return command['$set'];
  }

  if ('$merge' in command) {
    if (!isObject(data)) {
      throw new Error('not object');
    }
    return {...data, ...command['$merge']};
  }

  if (!isObject(data)) {
    throw new Error('not complex object');
  }

  const newData = Array.isArray(data) ? [...data] : {...data};

  for(let key of Object.keys(command)) {
    newData[key] = update(newData[key], command[key]);
  }

  return newData;
}