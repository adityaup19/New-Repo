const_ = require("lodash");

const items = [1, [2,[3, [4]]]]   //Arrays of arrays of arrays LOL
const newItems = _.flattenDeep(items)

console.log(newItems)