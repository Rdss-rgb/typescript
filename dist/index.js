"use strict";
// Type Explicit
var age = 2;
// Type Implicit
var names = 'Doe';
// TypeScript Types
var num = 1;
var lastname = 'string';
var bool = true;
// TypeScript Special Types
var any = 3;
var unknown = 'string';
// var never: never = true
var null_ = null;
var undefined_ = undefined;
//Array
// let number: number[] = [1, 2, '1'] error occur
let number = [1, 2, 3];
// Readonly
const names_ = ["Dylan"];
// names.push("Jack");
//Tuple
// let ourTuple: [number, boolean, string] = [1, true, 1] error occur since the third item is not a string
let ourTuple = [1, true, 'sample'];
// enum Size { small = 's', medium = 'm', large = 'l' }
console.log(1 /* Size.medium */);
// Functions
function sentmsg(number, name) {
    console.log(number, name);
    // return name + ':' + number
}
sentmsg(9201313, 'Doe');
const car = {
    type: "Toyota"
};
car.mileage = 2000;
function render(document) {
    console.log(document);
}
