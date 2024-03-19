

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

randomArray = [true]
// randomArray = [true, 1, "true"] //Type 'number' and  'string' is not assignable to type 'boolean'

console.log(randomArray)

//OBJECTS


let user ={
    username: "John",
    age:22,
    isAdmin:false
}

user.username = "jane" //   Valid as they are both Types
// user.age = "22" // Invalid as they are not the same types


console.log(user)

let UserObj: {
    username: string,
    age: number,
    isAdmin: boolean
}

// UserObj ={
//     username: "John",
//     age:22,

// }
//'isAdmin' is missing in type '{ username: string; age: number; }' but required in type '{ username: string; age: number; isAdmin: boolean; }


let UserObj2: {
    username: string,
    age: number,
    isAdmin: boolean
    phone?: string // "?" means not required
}

UserObj ={
    username: "John",
    age:22,
    isAdmin: false,
    

}
//ANY

let Any; //Type: let Any: any

Any = "hi"
Any = 12
Any = true
Any = []
Any = {}