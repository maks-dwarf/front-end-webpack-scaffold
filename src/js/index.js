// include scss main file so webpack can catch it..
import style from "./../scss/main.scss";
// test if require function works - require custom-module.js file
var message = require('./custom-module');

// test if JS is included in html and works
console.log('Maximum power!');

// test require function
console.log("message from custom-module.js");
console.log(message);

// test if ES6 functionality works
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
iAmJavascriptES6();