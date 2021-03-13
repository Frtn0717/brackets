module.exports = function check(str, bracketsConfig) {
  const bracesObj = {};

  for(pair of bracketsConfig) {
      bracesObj[pair[1]] = pair[0];
  };

  const bracesClose = Object.keys(bracesObj);

  return str.split('').reduce((stack, brace) => {
    bracesClose.includes(brace) && stack[stack.length - 1] === bracesObj[brace] ? stack.pop() : stack.push(brace);
    return stack;
  }, []).length === 0;

};
