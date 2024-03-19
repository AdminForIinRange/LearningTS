let Name = "Josh";

console.log(Name);

let Age = 18;

// Age = "eighteen"

console.log(Age); // Type 'string' is not assignable to type 'number'.

let dogsAge = 3;

// dogsAge = "3"

console.log(dogsAge); // Type 'string' is not assignable to type 'number'. // because its surrounded by string quotes

let string: string;
let boolean: boolean;
let stringOrNumber: string | number;

string = "hello";
boolean = true;
// stringOrNumber = "Hi"
stringOrNumber = 123;

console.log(string, boolean, stringOrNumber);



let nameArray = ["josh", "mike", "kevin"];
// nameArray.push(2) not valid, as array is string type
// nameArray.push("2") Valid as it has string Quotes
// nameArray.push(true) not valid, as array is string type
nameArray.push("john");
console.log(nameArray);

//Array Types

let NewNameArray: number[];
NewNameArray = [1, 2, 3, 4, 5];
NewNameArray.push(6);
console.log(NewNameArray);

//Array Types

let randomArray : boolean[] 


randomArray = [true, 1, "true"] //Type 'number' and  'string' is not assignable to type 'boolean'

console.log(randomArray)

