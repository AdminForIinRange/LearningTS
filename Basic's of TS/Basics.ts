// TypeScript (TS) is actually quite simple. It doesn't change much; it's essentially an advanced auto-corrector. I used to think it was a complex thing I needed to learn, but in reality, it's just a type checker. It's super basic, but I can kind of see the value of TS in team projects. However, on a solo project, I don't fully see the usefulness of TS.
// Type safety becomes important when your code deals with managing and accessing a large number of data types and variables. However, most small-scale applications don't use a lot of variables or types.

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

let Any; //Type: let Any: any //hover over Any

Any = "hi";
Any = 12;
Any = true;
Any = [];
Any = {};
Any = ["hi", 12, true];

//FUNCTION

let sayHi = () => {
  //The function has no Type, its void
  console.log("Hi");
};

// sayHi = ""

let functionReturnString = (): string => {
  // with : string
  console.log("hi");
  return "hi";
};

let multiple1 = (num: number) => {
  // without : string, they are the exact same
  return num * 2;
};

multiple1(3);

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  //Type 'number' is not assignable to type 'void'
  // return num * 2;
  //Basically it dose the function but dose not return any thing
};

console.log(multiple1(3));
console.log(multiple2(3));

let sum = (num1: number, num2: number, another?: number) => {
  //allows 3 prams, the last one can hold serval prams
  return num1 + num2; // your don't have to or need to add Another or pas sit has a pram, Advice: hover over red underline in text when error occurs, it will displays the error
};
console.log(sum(1, 2));

let userConcat = (userProfile: {
  userName: string;
  age: number;
  phone?: string;
}) => {
  console.log(userProfile.userName);
};
let userProfile = { userName: "John", age: 30 }; // this how you access and pass things to a double prams situation, you may possible come across this situation a lot
userConcat(userProfile);

//TYPE ALIASES

type UserType = {
  userName: string;
  age: number;
  phone?: string;
};

let BetterUserConcat = (userProfile2: UserType) => {
  //Using Type Aliases makes the code cleaner, basically just Type object, basically just another abstraction, the key goal of TS is Type Safety
  console.log(userProfile2.userName);
};
let userProfile2 = { userName: "John", age: 30 };
BetterUserConcat(userProfile2);

//Turned a Function into an Aliases, beacus eit has a "type" in front
type myfucn = (a: number, b: string) => void;

const write: myfucn = (num, str) => {
  //this is just num: number, str: string but using undead abstraction, basically  this line is saying a: number, b:string = num,string wihc is just num: number, str:String
  console.log(num + " times " + str);
};

write(5, "hello"); // this is how you call the func

// let i : number = 0 //sumthing random

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "john",
  age: 12,
  theme: "dark", //the type must be "dark" or "light"
};

//INTERFACES

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  // employeeId?: number
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  age: 13,
  email: "kjgjdqdw",
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "KBGINTHEPLACETOBE",
  age: 2,
};

//GENERICS

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  Author: IAuthor[];
  Category: ICategory;
}

interface IAuthor {
  // this make more sense
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

// Interface defining a post object with a flexible 'extra' property
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[]; // seems like T is a type of param, just like how you would pass data to a function, but in this case you're passing it to extra: ____ GTP says I'm correct :)
  // and in this case T is allowed to be an array because it has [] next to it
}

const testme: IPostBetter<string> = {
  //testme is Parent Const and by doing ":" we change the type of the function to IPostBetter and that <T> we allow the type to be <string>
  //then we pass in the obj values, that follows testme which is type is being managed and checked by IPostBetter because of ":"
  id: 1,
  title: "222",
  desc: "sss",
  extra: ["str", "str2"], // we can see that Extra is being filled, and it's an array as it's allowed to be, because the interface allows T to be an array because it has [] next to it. When I remove it, it shows this on hover: Type 'string[]' is missing the following properties from type
};

console.log(testme);

interface IPostEvenBetter<T extends object> {
  //Rember think of t and a prams in a fuction, now we extend that, and allow that T to be a Object
  id: number;
  title: string;
  desc: string;
  extra: T[]; //dont forget T is an array to, so thsi means what ever is passed into T will be an Array object
}

const testme2: IPostEvenBetter<{ id: number; username: string }> = {
  //ok so here IPostEvenBetter is type cheaking testme2, "testme : <Interface type>, we can see that T from the "T extend object" is applying types

  id: 1,
  title: "222",
  desc: "sss",
  extra: [{ id: 1, username: "jhon" }],
};

interface IPostTest2<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
interface IAuthor2 {
  id: number;
  username: string;
}

const testme3: IPostTest2<IAuthor2> = {
  //so i am able to use Authors interface as generics to cheak my <T> object types

  id: 1,
  title: "222",
  desc: "sss",
  extra: [{ id: 1, username: "jhon" }],
};

const testme4: IPostTest2<ICategory> = {
  //so i am able to use Authors interface as generics to cheak my <T> object types

  id: 1,
  title: "222",
  desc: "sss",
  extra: [{ id: 1, title: "cat" }],
};

interface ProgramingRank<T> {
  JS: { rank: number; desc: string };
  TS: { rank: number; desc: string };
  C: { rank: number; desc: string };
  extra: T[];
}

const Programing: ProgramingRank<string> = {
  JS: { rank: 1, desc: "string" },
  TS: { rank: 1, desc: "string" },
  C: { rank: 1, desc: "string" },
  extra: ["w"],
};

interface TopEmployes<T extends object> {
  emp: { name: string; rank: number };
  emp2: { name: string; rank: number };
  emp3: { name: string; rank: number };
  extra: T;
}

const RankEmp: TopEmployes<{
  emp3: { name: string; rank: number; id?: number };
}> = {
  emp: { name: "string", rank: 1 },
  emp2: { name: "string", rank: 1 },
  emp3: { name: "string", rank: 1 },
  extra: { emp3: { name: "string", rank: 1, id: 1 } },
};

interface TopEmployes2<T extends object> {
  emp: T[];
}

const RankEmp2: TopEmployes2<
{ // oh so we allow T to hold objects inside
  name: string;
  rank: number;
  id?: number;
  
}
> = {
  emp: [ // remember T was already assigned to be a array and it is called emp, but how we pass an object type and a few data stes, this forced the T wich is alredy in an Array format to hold object and object data
  
    { name: "string", rank: 1 },
    { name: "string", rank: 1 },
    { name: "string", rank: 1 },
  ],
};

console.log(RankEmp2);
