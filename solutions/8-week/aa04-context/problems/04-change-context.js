function changeContext(func, obj) {
  let boundFunc = func.bind(obj);

  return boundFunc();

  // // With Call or Apply
  // return func.call(obj);
  // return func.apply(obj);
};

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
