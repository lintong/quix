module.exports = function (wallaby) {
  return Object.assign({}, require('yoshi/config/wallaby-mocha')(wallaby), {
    // set to undefined to let Wallaby decide the number of processes based on the system's capacity
    workers: undefined
  });
};
