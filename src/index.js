module.exports = function check(str, bracketsConfig) {
  const bracketList = bracketsConfig.reduce((acc, curr) => {
    acc.push(curr.join(''));
    return acc;
  }, []);
  let originalStr = '\0';
  while (str !== originalStr) {
    originalStr = str;

    bracketList.forEach(pair => {
      str = str.replace(pair, '');
    })
  }

  return str.length === 0;
}
