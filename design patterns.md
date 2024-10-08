## `design patterns : `  the design of the web app.

**solution** to a **problem** in a **context**.

context: web app.الحاله اللي انا فيها عايز اعمل .

problem:  عشان اقلل تعقيد الكود  component الخاصه بكل  functionalities  سهل والتواصل فيه جيد ومرن وابسطه عن طريق فصل ال web app عايز ال  

solution:  classes معين وتركيبه معينه من ال  design  اعمله .

meaning it is a formal written way (best practice) to do something inside a software design that is tens of people have come together and said this the best way we have to solve this problem `why?`
to make your code cleaner to use , more readable less buggy and errors , easy to maintain 

you should learn when should you use dessign patterns to avoide overkill(using it every where) 

---
### there are three types of design patterns:                           
 creational patterns , structural patterns , behavioral patterns

 ![3](../js/pics/Screenshot_24-9-2024_143829_www.youtube.com.jpeg)





### `creational patterns`
 ## 1-  factory pattern:

factory pattern falls under the creational category which providing object with creational mechanisms that provides flexibility , reusability , used when you want to create many different types of many different objects 

so factory is just an object that builds or create many different objects 

the question here why not creating each object just with new key word?                                   
factories allow you to handle all of your object creation in a cerntralized location 

#### example:
the employees in my comapany are developers and testers. i want to store my employees in a database
``` js
function developer (name){
  this.name=name;
  this.type="developer"
}
function tester (name){
  this.name=name;
  this.type="tester"
}
function empolyeeFactor(){
  this.create=(name,type)=>{
      switch(type){
          case 1: 
              return new developer(name)
              break;
          case 2:
              return new tester(name)
              break;
      }
  }
}
function say(){
  console.log(`hi i am ${this.name} the new ${this.type}`)
}
let employee=new empolyeeFactor();
let database=[];
database.push(employee.create("ahmed",1))
database.push(employee.create("ali",2))
console.log(employee.create("fady",2))
console.log(...database)
database.forEach((e)=>{
  say.call(e);
})
```
 ## 2-  builder pattern:
 used when required to create complex objects that have many optioanl and required fields (many working parts) you want to link them 

 حاجات معينة عايز تضيفها في ال instance مش كل اللي موجود في ال constructor



 ``` js
 class Address{
  constructor(zip,street){
    this.zip=zip;
    this.street=street;
  }
}
class User {
  constructor(name,age,phone,address){
    this.name=name
    this.age=age
    this.phone=phone
    this.name=address
  }
}

let user = new User("ali",undefined,undefined,new Address(1,"main"));

 ```
 we will not do this because the new statement will be long and confusing

what will we do?
 ``` js
class Address{
  constructor(zip,street){
    this.zip=zip;
    this.street=street;
  }
}
class User {
  constructor(name){
    this.name=name
  }
}

class Userbuild{ 
    constructor (name){
        this.user=new User(name);      // creating object
    }
    setage(age){
        this.user.age=age
        return this            // the userbuild 
    }
    setphone(phone){
        this.user.phone=phone
        return this            // the userbuild 
    }
    setaddress(address){
        this.user.address=address
        return this            // the userbuild 
    }
    build(){
        return this.user
    }           
}
// we reteurns this to allow makming chain
let user1 = new Userbuild("ali").setage(21).build();
console.log(user1)


 ```
### another way supported by js
``` js
 class User {
  constructor(name,{age,phone,address="mansoura",hight}={}){
    this.name=name
    this.age=age
    this.phone=phone
    this.address=address
    this.hight=hight

  }
 }
let user = new User("ahmed",{phone:"01006607154",age:22})
console.log(user)
```

 ## 1-  singelton pattern:
 creating object with only one instance and provides a global point to access to it

 why singelton pattern?

-   useful when a class is should not be duplicated like database connections
-   It provides a global access point to the instance, meaning any part of the code can access the single instance, ensuring consistency across the application. 
-    the object is only created when it's actually needed and created once . This can optimize memory usage and improve performance
-    used to maintain a shared state across multiple components, ensure that all parts of the app share the same settings
-    be careful , it can cause overwritten on the data.


lets implement singelton pattern using:


1- class
``` js
class Singelton{
  pmng=null;
  constructor(n){
    if(!Singelton.pmng){
      this.name=n;
      Singelton.pmng=this;
    }
    return Singelton.pmng;
  }   
}
let a =new Singelton(10)
console.log(a.name);   // 10
let b =new Singelton(6)
console.log(b.name);    // 10
let c =new Singelton(6)
console.log(c.name);  // 10

console.log(a==b);  // true

```
2- closers
``` js
function Singelton(){
  function cons(){
    this.name="ahmed";
  }
  let check;
  return{
   getProcess : function(){
    if(!check){
      check = new cons();
    }
    return check;
  }
}
}
let single = Singelton()
let a = single.getProcess();
let b = single.getProcess();
console.log(single.getProcess())
console.log(a==b)
```

lets go on example covers the situation when you have information and needed to be shared through oll of the application that each state depends on other state:

``` js
class Logo{
  instance;
  constructor(){
    if(Logo.instance==null){
      this.logs=[];
      Logo.instance=this;
    }
    return Logo.instance;
  }
  log(msg){
    console.log(msg);
    this.logs.push(msg);
  }
  countlog(){
    console.log(this.logs.length)
  }
}
let a = new Logo();
function first(){
  a.countlog();
  a.log("first");
  a.countlog();
}
let b = new Logo();
function second(){
  b.countlog();
  b.log("second");
  b.countlog();
}
first();
second();
// 0 first 1 1 second 2
```

### example:
 There's an application made for a study group where there's a Student class. Each student can have an instructor, but due to financial setbacks the study group can only hire 1 instructor who can work for multiple students. If all students don't need an instructor, then there's no need to hire one.
You notice that this example fulfills the description of the singleton design pattern. Implement the classes Student and Instructor to apply the case as described.

``` js
class Instructor{
  static instance=null;
  constructor(){
    if (Instructor.instance==null){
      Instructor.instance=this;
    }
    return Instructor.instance;
  }
}
class Student{
  constructor(name,need){
    this.name=name;
    this.need=need;
    if(this.need){
      this.request();
    }
  }
  request(){
      this.teacher=new Instructor();
  }
  printing(){
    if(this.teacher){
      console.log(`${this.name} needs instructor`)
    }else{
      console.log(`no instructors for ${this.name} `)
    }
  }

}
let student1=new Student("ahmed",true)
let student2=new Student("mohamed",false)
let student3=new Student("ali",true)

student1.printing();  // ahmed needs instructor
student2.printing();  // no instructors for mohamed 
student3.printing();  // ali needs instructor
```