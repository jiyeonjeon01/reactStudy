// console.log("Hello Node.js2");

// 외부에 있는 모듈을 가져온다.(import)
// const moduleData = require('./math');
// let value = moduleData.add(10, 20);
// console.log(value);
// console.log(moduleData.sub(10, 20));
// const moduleData = require('./math');

// const {add, sub} = require("./math");
// console.log(add(20, 20));
// console.log(sub(20, 20));

// import {add, sub} from "./math.js";
// console.log(add(30, 20));
// console.log(sub(30, 20));

// import multiply from "./math.js";
// console.log(multiply(30, 20));

import randomColor from "randomcolor";
const colorString = randomColor();
console.log(colorString);