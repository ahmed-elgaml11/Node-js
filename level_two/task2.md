## What is the Model-View-Controller (MVC) architectural pattern, and what are its benefits?                         
 
its a compound design pattern used to divide my code to three essential components, to make the code more readable and maintainable                       
1- `model:` used to define the structure of the scheam of the database, it interacts with the database , process the data.                            
2- `views:` it handles the client side , contain the templates (ui layer) .                                          
3- `Controller` : execute what you want to do with the data, the implementation of the route handlers, it acts as intermediary between the models and views(it handles the user input , update the model , select view to render)



## Define a session and explain its usages:
sessions is a way to keeptrack user interaction with the server across multiple requests by storing authentication details and temporary data, because protocoles is state less , and the server should knows who sends the request 
session used in authentication systems , shopping carts, flash meessages 



## What is the difference between sessions and cookies, and why should sessions be stored in a database?
when a session is created it generates session id and this session id should be stored in the browser as a cookie to the allow the browser to send the cookie in the future requests to the server .
the session should be stored in the the database , because if you are using the default in-memory session store, the session wil be lost if the server restarts 




## Why is server-side validation important even when client-side validation is implemented?

because the client-side validation is not enough to handle complex checks in addition to it can be bypassed by manipulating the html form make them not required or turn off js code in their browser or by sending the data by http client like postman not by the browser so we need server-side validation to avoid run-time errors and to add more security, avoid malicious input like sql injection.



## In Express.js, where is server-side validation typically performed in the application flow?
it is performed in a middleware after sending the data in post requst and before start processing it in the main route handler



## Explain the validation process flow using Zod and how it works
zod provide run-time schema validation to ensure the incomming data satisifies the expected format               
the process flow:                                           
the user send a request contains the data                                                       
the data is passed through the schema to validate it                                                          
if it is valid , the request moves to the handler else , zod will produce an error  



## What is the method used in express-validator to define a custom error message? 
.withMessage()








## Which HTTP status code is most appropriate for validation errors?

 `400`
 401
 403
 405






## What are environment variables, and why are they important?                            

it is a global variables used to define the environment which our node app runs in,
it is important because sometimes our app needs configration for things that change depend on the environmnet  like database used, turning on/off logging or debugging so many packages depend on the variable NODE_ENV so we should set it manually, in addition it adds more secure by adding senestive data to the config file which cant be accessed



## When storing the PORT number in a .env file, why should it be explicitly cast to a number? 
because of the variables in the config.env file are stored as strings by default which may leet to unexpected behavior 






## How can you provide default values for environment variables when using dotenv? 

using or operator                                                   
process.env.VARIABLE  || variable



_______________
``` js
type binary = 0 | 1 
let BinaryToDecimal = (arr : binary[]) : number  =>  {
  let sum : number = 0;
  let condition = arr.every(ele => ele===0 || ele=== 1)
  if(condition && arr.length > 0) {
    for(let i = arr.length-1 ; i >= 0 ; i--){
      if(arr[i]===1){
        sum += Math.pow(2,  arr.length-1-i);
      }
    }
    return sum;
  }
  else{
    throw new Error('The input should be a binary number and not Empty');
  }
}                
console.log(BinaryToDecimal([0, 0, 0, 1]))
console.log(BinaryToDecimal([1, 0]));
console.log(BinaryToDecimal([1, 0, 1]))
console.log(BinaryToDecimal([1, 0, 0, 0]))
console.log(BinaryToDecimal([0, 0, 0, 2]))
```

