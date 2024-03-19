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

let randomArray: boolean[];

randomArray = [true];
// randomArray = [true, 1, "true"] //Type 'number' and  'string' is not assignable to type 'boolean'

console.log(randomArray);

//OBJECTS

let user = {
  username: "John",
  age: 22,
  isAdmin: false,
};

user.username = "jane"; //   Valid as they are both Types
// user.age = "22" // Invalid as they are not the same types

console.log(user);

let UserObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

// UserObj ={
//     username: "John",
//     age:22,

// }
//'isAdmin' is missing in type '{ username: string; age: number; }' but required in type '{ username: string; age: number; isAdmin: boolean; }

let UserObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string; // "?" means not required
};

UserObj = {
  username: "John",
  age: 22,
  isAdmin: false,
};
//ANY

let Any; //Type: let Any: any

Any = "hi";
Any = 12;
Any = true;
Any = [];
Any = {};
Any = ["hi", 12, true];

//FUNCTION

let sayHi = () => { //The function has no Type, its void
  console.log("Hi");
};

// sayHi = ""




let functionReturnString = (): string => { // with : string
  console.log("hi");
  return "hi";
};

let multiple1 = (num: number) => {// without : string, they are the exact same
  return num * 2;
};

multiple1(3);

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void =>{ //Type 'number' is not assignable to type 'void'
    // return num * 2;
    //Basically it dose the function but dose not return any thing
}

console.log(multiple1(3));
console.log(multiple2(3));

let sum = (num1:number, num2:number, another?:number)=>{ //allows 3 prams, the last one can hold serval prams
    return num1 + num2 // your don't have to or need to add Another or pas sit has a pram, Advice: hover over red underline in text when error occurs, it will displays the error 

}
console.log(sum(1,2))



let userConcat = (userProfile: {userName: string, age: number, phone?: string})=> {
console.log(userProfile.userName)

}
let userProfile = { userName: "John", age: 30 } // this how you access and pass things to a double prams situation, you may possible come across this situation a lot
userConcat(userProfile)


//TYPE ALIASES


type UserType = {
    userName: string,
    age: number,
    phone?: string

}

let BetterUserConcat = (userProfile2: UserType)=> { //Using Type Aliases makes the code cleaner, basically just Type object, basically just another abstraction, the key goal of TS is Type Safety
    console.log(userProfile2.userName)
    
    }
    let userProfile2 = { userName: "John", age: 30 }
    BetterUserConcat(userProfile2)
    
//Turned a Function into an Aliases, beacus eit has a "type" in front
type myfucn = (a: number, b:string) => void

const write : myfucn = (num,str) =>{ //this is just num: number, str: string but using undead abstraction, basically  this line is saying a: number, b:string = num,string wihc is just num: number, str:String
    console.log(num + " times " + str)


}

write(5, "hello");