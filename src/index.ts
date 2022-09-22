//Typescript fundamentals: built-in types

let sales = 400_000_000;
//📝 large numbers can be seperated w _ to maintain readability
let course: string = 'typescript';
let is_published: boolean = true;

//📝 usually, you can annotate the type of variable. but since we've set the variable of sales to a number, you don't really have to write :number. typescript should automatically know that the variable sales is a number type. hover over it to see

/////////////////////////////////////////////////////////////////

//Typescript types: Any 

let level;
//if you dont declare the type, ts will determine that the variable is type any, which means any type of values. This allows you to reset the variable value type to w.e you want. Honestly defeating the purpose of using ts
//❗❗ best practice to AVOID using any variable as much as possible. Don't do the following:
level = 1;
level = 'a';

//ex. Any type w a function
function render(document: any) {
  console.log(document);
}

//document has an error because paramater's type (document) is not defined. The program will guess that it's any type, which is no-no.
//if you really want to bypass the implicit error, annotate it as document: any
//however, if you need to do this for multiple function params: have "noImplicitAny": false in tsconfig.json enabled. USE WITH CAUTION, SHOULD NOT TURN IT ON >:(

/////////////////////////////////////////////////////////////////

//Typescript types: arrays

let numArr: number[] = [1, 2, 3];
//the above number[] lets numArr be a numbers array. but if the contents are all numbers, it can be omitted.
//the number[] indicator is good for future error handling, say if you wrote [1, 2, '3'], then the indicator can spot the error right away

/////////////////////////////////////////////////////////////////

//Typescript types: tuples

//fixed length array where each element is a different type [1, 'string']
//to define a tuples array put the data type in [] -> :[number, string]
//only useful for 2 values like key value pairs
//the array length needs to equal the declaration length and match the declared types
let tupleArr: [number, string] = [1, 'chow'];
//📝tuples are presented using plain js arrays. if you compile the code, itll be a regular js array, which would allow you to push() a new value into the array
//❗❗ best practice to have tuples only be TWO values. Anything more makes your code hard to understand

/////////////////////////////////////////////////////////////////

//Typescript types: enums

//list of related constants
//say we have a catalogue of tshirts and we want to track the sizing, typically we would write it like:
// const small = 1;
// const medium = 2;
// const large = 3;

//translating it with enums:
//when you define an enum, use PascalCase. aka capitalize 1st letter
//📝add const before enums to make the complied js code more clean & optimized code
const enum Size { Small = 1, Medium, Large }
//by default, the typescript complier assigns the first member(small) the value of 0, and increases by 1 each time
//aka enum Size { Small = 0, Medium = 1, Large = 2 }
//if you dont want the first value to be zero, do small = 1, and then the values will increment by 1 onwards. So med will be 2, and large 3

//you can also do string values, but then you need to declare it for all the values
//aka { Small = 's', Medium = 'm', Large = 'l' }

//now that we have a new type aka line 58, we can declare a variable like..
let mySize: Size = Size.Small;
console.log(mySize);

/////////////////////////////////////////////////////////////////

//Functions

//❗❗ best practice to properly annotate your functions. Annotate it after your parameters

//optional paramaters can be created by declaring the default value in the param

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

//because we set a default value for taxyear, when we call calculateTax we can just put 1 param if we want (usually TS will scream at you if there's no default)
calculateTax(50_000);
//but if you want to override the tax year then you can just put a 2nd argument
calculateTax(100_000, 2023);

//settings like "noUnusedParameters" and "noImplicitReturns" will help us debug our code to ensure that no params are not used inside the function, and the function will always return a value that is the same type as the function states (sometimes we forget as forgotten conditional statements returns undefined)
//settings like "noUnusedLocals" ensures that no local variables inside functions are not being used