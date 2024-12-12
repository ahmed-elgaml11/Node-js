# Part I: Express Fundamentals :

### 1- Route Response Prediction:
the first middleware will write: 'HI'                                      
the second middleware will not be executed because it is applied only to '/' route                                        
the third middleware  will write 'Hellow' then terminate the request repose cycle                                                                     
so the response body will be : HiHello



### 2- Form Body Parsing:
bodyParser.urlencoded():                                            
 is used to parse the data sent in the body of the request into js object (req.body)


### 3- Body Parsing Process: Explain the process of converting HTML body to a JSON object , Describe the initial body submission type
when a user fills a form with data and submit it the browser collect it and encode the data in form-urlencoded (the default) like username=johndoe&email=john%40example.com
 or multy-part format for files init The form data is split into multiple parts. Each part contains data for one field, and each part can include text or binary data and send the data to the server in the body of the post request ,
the server recieves the request and paresed the encoded data into js object in req.body to be used in our application using middleware like 
express.urlencoded or multer for files then we can convert the data into json using Json.stringify(req.body)



### 4- Multipart Parsing: Explore the bodyParser.multipart() method
to submit a form with a files the browser uses multypart/form-data encoding type this type sends the data as parts each part can be a field or a file , we need a library like multer to handle multypart/form-data because bodyParser library doesnt support multypart/form-data because It is not designed for the complexity of multipart data, which includes both text and binary data.

the functionality of multer: 
it is designed to handle data that includes files and makes it available in req.file                              
you can determine how and where to store the files                                                 
it provides a built in error handling like type chechking and limit size                                                 



### 5-  Node.js follows a single-threaded model that utilizes an event loop for handling I/O operations asynchronously.
___
# 2- TypeScript Knowledge

### 1- union type: 
union type in typescript allows variavles to be multible types  

let x: (string | number)[] =[];                               
x.push(123);

### 2-  Type Compatibility:
let x: (string | number)[];                                                
x.push(123);

it will lead to compile error because x not initialised as [] empty array 

### 3- Generic Types :
a way allows us to create reuasble, type-safe blocks of code which can be used with diffrent data types

``` ts
interface resources<T>{
    uid: number,
    name: string,
    data: T
}

const productone : resources<{}> = {
    uid: 4,
    name: 'product one',
    data: {price: 100, quantity: 5}
}
```

### 4 -  Interface Type Flexibility 
// Option 2
interface User<UserIdType> {
    id: UserIdType;
    name: string;
    email: string;
}


### 5- TypeScript Execution Comparison:  Explain the difference between ts-node and tsx  
ts-node : library used to compile and run tsfile by tsc compiler on the run time in one step without generating js file,                       
 it is used in the development when you need to execute the ts file quickly without building files,                                        
  it is not support esm and we need node --loader to execute it which may removed in the future and also it doesnt perform full type checking so we need to tsc first so here tsx comes.

tsx : library used to compile and run tsfile on the run ime in one step without generating js file,
 using esbuild compiler wich is faster and supportes esm and common js but also it doesn't perform full type checking during runtime

 so tsx is better


### 6- TypeScript Compilation Commands Explain the difference between tsx file.ts and tsc file.ts
 tsx file.ts: it used to compile and run tsfile on the runtime without generating js file by esbuild, supportes esm and common js.
 it is used during the development process when you need to execute tsfiles quickly without building files

 tsc file.ts: it is used to just compile tsfile and generate js file using tsc compiler, follows tsconfig.json , it doesnt execute the js generated file, it is used during the production when we need the js file.



### 7-  i didnt find this error and the app runs perfect.


### 8- Object-Oriented TypeScript Challenge: 
``` ts 
interface WakesUpEarly {
    wakeUpEarly(): string;

}
class student implements WakesUpEarly {
    constructor(
        public firstName: string,
        public lastName: string,
        public grade: number
    ){}
    wakeUpEarly() {
        return `Good morning, my name is ${this.firstName} ${this.lastName}!  in grade ${this.grade} , I wake up every day AT 8AM.`;
    }

}

const student1 = new student('Ahmed', 'emad', 6);

console.log(student1.wakeUpEarly());

```
___
`Bonus Questions`:
### Why do we need additional validators when using TypeScript, even though it has its own type system?

because without validators , the code will lead to errors if the incomming data doesnt match with type system in ts 
so the validators can ensure that the incoming data satisfy the expected format, becaust type script works at the compilation not at the run time as well as typescript validators can provide specific  error messages to the user, making it easier for them to correct mistakes + ts system not  enough for complex validation rules.


### Search for JavaScript Type Comments (JSDoc), then explain the difference between using Type Comments in JavaScript and using TypeScript.

jsDoc : is a documentaion for JavaScript it uses comments add type inforamtion and meta data for the code to make the code more readable and more understanable , requires a separate tools like jsdoc3 to generate the documentation

typescript : it also adds a type information but as the part of the language syntax and is checked at the compile time