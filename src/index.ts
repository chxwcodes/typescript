//Typescript fundamentals: built-in types

  let sales = 400_000_000;
  //📝 large numbers can be seperated w _ to maintain readability
  let course: string = 'typescript';
  let is_published: boolean = true;

  //📝 usually, you can annotate the type of variable. but since we've set the variable of sales to a number, you don't really have to write :number. typescript should automatically know that the variable sales is a number type. hover over it to see


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

//Typescript types: arrays
  let numArr: number[] = [1, 2, 3];
  //the above number[] lets numArr be a numbers array. but if the contents are all numbers, it can be omitted. 
  //the number[] indicator is good for future error handling, say if you wrote [1, 2, '3'], then the indicator can spot the error right away