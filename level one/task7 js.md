### REVISION 


`1- `                                      
 implicit binding:                                
  when a function is called as a property of an object , this referes to the object itself 
```  js
 const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce() {
          console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
      }
  }

  player.introduce();
// Hey, I'm Ahmed Hafez
```

Explicit binding:                      
 allows you to define the context for this explicitly 
 ``` js 
  function introduce() {
      console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
  }
  const player = {
      firstName: "Ahmed",
      lastName: "Hafez"
  }
  introduce.call(player);
  //  you're explicitly setting this to the player so the output will be  Hey, I'm Ahmed Hafez
 ```

  New binding:                                                        
    when a function is called as a constructor using the new keyword.  a new object is created, and this is bound to that new object.

``` js
    function Person(name) {
        this.name = name;
    }
const alice = new Person('Alice');
```

default binding:                                
    is the behavior of this in the global context. If a function is called without any context object, this refers to the global object 


``` js 
    function greet() {
    console.log(`Hello, my name is ${this.name}`);
    }
    greet();  

```



`2-`                              
string 


`3- `                               
modules is a piece of code that can be imported and exported across different files                           
CommonJS:                                         
to import and export use  require() and module.exports  syntax                                                
Mainly used in Node.js applications.                                                    
Synchronous loading: Modules are loaded at runtime.                            

(ESM):                   
 to import and export use  import and export syntax                 
 Can be loaded asynchronously with import() for dynamic imports.




` 4- `                        
  used to define custom commands or scripts that can be executed through the npm command line

___

### EXPESS 


`1- `                            
Middleware : is a function that works during the lifecycle of the application , after the request is got and before the response is sent, it has access on the request and the response object and the next.                                
it can be used for check validation or sending 404 error response or logging message or parese a json files


`2- `                                  
1- when you dont tell express where to go afer the middleware (write next() )                                
2- when you write a handler without sending response (res.end(),res.json(),..)                           

3-  if any function blocks the event loop(requsts) like (CPU-intensive tasks) it will prevent the server from handling any other requests, leading to a "hang"

4- when you forget to handle a promise (.then or awiat )                          
5- Not handling errors in asynchronous code can cause Express to hang without returning any response.                 
6- when multiple applications try to listen on the same port                                     



`3-`                           
app.use(express.urlencoded({ extended: true}));





`4-`  
undefined                            
{ tab: 'friends', history: 'off' } 



`5-`
 c. res.redirect('/')

___

### MONGODB

`1-` ObjectId.

`2-`
constructor allows you to ctrate a new document based on a schema with structure format and provide interface to communicate with the collection .                                        
to create a model : first install mongoose ant this code show how to make one:

``` js  
const mongoose = require('mongoose');
const Schema= mongoose.Schema              // constructor function


const blogSchema = new Schema({
    title:{
        type: String,
        require:true
    } ,
    snippet: {
        type: String,
        require:true
    },
    body:{
        type: String,
        require:true
    }
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)

// model name should be the same name of the collection but with first character upper case and without 's'
module.exports=Blog;

```




`3-` 
- const x = User.findOne({username:"elgokar"})
- const y = User.find({})
- const z = await User.findById(66eb21a982f34874a0323f7a)

### console.log(typeof x)                         
it will return object because asynchronous code return promise if tou dont handle it with .then or await and the promise is considered object



### console.log(typeof y) 
same as the previous one , it will return object 

### console.log(typeof z)
if this id is found , it will return the document of this id which is object and if it not fount , it will return a null


`4- `                             
In the following code 3b3aziz trying to update a user age in the database but it doosn't work as expected, what the problem in his code and how to solve it?
``` js
const updateAge = () => {
    const user = User.findOne({username:"sherbiny"},callback)
    console.log(user.age) //output ===> 20
    user.age=25;
    user.save();
    console.log(user.age) //output ===> 20
}
```

1- the problem that the asynchronous code User.findOne returns a promise and you should wait until it has finished and you 
try to access it before finishing 

2- user.save();  also is a promise based and you need to wait until it has finished, this code prints the original age before modifing it.
the correct code is: 

```  js
const updateAge = async () => {
    try{
    const user = await User.findOne({username:"sherbiny"},callback)
    console.log(user.age) //output ===> 20
    user.age=25;
    await user.save();
    console.log(user.age) //output ===> 25
    }
    catch (err){
        console.log(err);
    }
}

```
or
``` js
const updateAge =  () => {
     User.findOne({username:"sherbiny"},callback)
     .then((user) => {
        if (!user){
            console.log("not found")
            return;
        }
        console.log(user.age)
        user.age=25;
        return user.save();
     })
     .then((user) => {
         if (!user){
            console.log("not found")
            return;
        }
        console.log(user.age)

     })
     .catch (err => console.log(err));
}
```


`5- `

by addind this property in username property while initialising the schema 
minlength : [3, 'the user name must consists of more than 3 characters'] 