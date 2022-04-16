const userData = require('./constants')
const _ = require('lodash');

console.log("Hello Node JS");
console.log(`hello ${userData.name}, I will call you on ${userData.mobile}`);


const items = [1,[2,[3,[4]]],5];
const newItems = _.flattenDeep(items);
console.log(newItems);