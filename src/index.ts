// Type Explicit
var age: any = 2

// Type Implicit
var names = 'Doe'

// TypeScript Types
var num: number = 1
var lastname: string = 'string'
var bool: boolean = true

// TypeScript Special Types
var any: any = 3
var unknown: unknown = 'string'
// var never: never = true
var null_: null = null
var undefined_: undefined = undefined


//Array
// let number: number[] = [1, 2, '1'] error occur
let number: number[] = [1, 2, 3]

// Readonly
const names_: readonly string[] = ["Dylan"];
// names.push("Jack");

//Tuple
// let ourTuple: [number, boolean, string] = [1, true, 1] error occur since the third item is not a string
let ourTuple: [number, boolean, string] = [1, true, 'sample']

//Enums

// const small
// const medium
// const large

const enum Size { small = 0, medium, large }
// enum Size { small = 's', medium = 'm', large = 'l' }
console.log(Size.medium)

// Functions
function sentmsg(number: number, name: string) {
    console.log(number, name)
    // return name + ':' + number
}
sentmsg(9201313, 'Doe')

const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car.mileage = 2000;

function render(document: any) {
    console.log(document)
}