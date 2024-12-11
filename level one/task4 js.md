### Write examples illustrating the use of each of the following:
`Static properties:` are properties that belong to the class itself, not the object created
``` js
class user{
  static counter=0;

  constructor(name,email){
    this.name=name;
    this.email=email;
    user.counter++;
  }


  static countobjects=function(){
    return `${this.counter} objects`      // this>>class
  }
}

let user1=new user("ahmed","aa@gmail.com")
console.log(user1.countobjects())    // undrfined
console.log(user.countobjects())   // 1 objects

```

`Private properties:` accessible only within the scope of a class or object, and not accessible from the outsideworld
``` js
class Person {
  #name;  // private property
  #age;   // private property

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getDetails() {
    return `${this.#name} is ${this.#age} years old.`;
  }

  updateAge(newAge) {
    this.#age = newAge;
  }
}

const person = new Person('John', 30);

console.log(person.getDetails()); // "John is 30 years old."
console.log(person.name); // undefined

```
`Setters and getters:`used to retrieve and modify the value of a private attribute from outside the class
``` js
class user{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }

  sayhellow() {
    return `hellow ${this.name}`
  }
  writemsg(){
    return `msg from paent class`
  }

  get showemil(){
    return `this ur ${this.email}`
  }
  
  set updatename(v){
    if (v.length>=4){
    this.name=v;
    }
   else{
    alert("not valid")
   }
  }

}
let user0 = new user("ahmed","google")

console.log(user0);
console.log(user0.showemil)
user0.updatename="emad";
console.log(user0)
```
`Method chaining:` technique in which multiple methods are called on the same object sequentially, in a single statement,each method must return the object itself (this) so that another method can be invoked on that same object.
``` js
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;  // Return the current object to allow method chaining
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    if (num !== 0) {
      this.value /= num;
    }
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();

// Method chaining example:
const result = calc.add(10).subtract(5).multiply(4).divide(2).getResult();

console.log(result);  // 10
```
---
``` js
 const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce: () => {
          console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
      }
  }

  player.introduce();
  // Hey, I'm undefined undefined
  // this:  arrow functions in JavaScript  inherit this from the surrounding (lexical) scope. so it cant read first or last name in the global scope
  ```


``` js 
 const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce() {
          console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
      }
  }

  player.introduce();
// Hey, I'm Ahmed Hafez
// this : in a regular function this refers to the object excutes the function
```


``` js
function introduce() {
      console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
  }
  const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce
  }

  player.introduce();
 // Hey, I'm Ahmed Hafez
// this :  this refers to the object (player) excutes the function

```

``` js 
 function introduce() {
      console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
  }
  const player = {
      firstName: "Ahmed",
      lastName: "Hafez"
  }

  introduce();
  // unefinded error because this in a regular function refers to the windwo so window. firstname 
  // is undefned and trying access it causes error
  introduce.call(player);
  //  you're explicitly setting this to the player so the output will be  Hey, I'm Ahmed Hafez
```


## Create a Vehicle class which has 3 properties: color, number of wheels and horn. The color defaults to "blue", the default value of number of wheels is 4 and the horn defaults to "beep beep". Add a method honkHorn() which prints the value of the horn of the vehicle. Then create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should override Vehicle's constructor function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'. Make each class in a separate module and use them together in a different module (main.js)
``` js
//vehicle.js file
class vehicle{
    constructor(color="blue",wheels=4,horn="beep beep"){
      this.color=color
      this.wheels=wheels
      this.horn=horn
    }
    honkHorn(){
      console.log(this.horn)
    }
  }
  export default vehicle;


  // bycicle.js file
import  vehicle  from "./vehicle.js"

class Bicycle extends vehicle{
    constructor(color,wheels=2,horn="honk honk"){
      super(color,wheels,horn)
    }
  }

export { Bicycle }  

// main.js file

import {Bicycle}  from './bicycle.js';
import  v  from './vehicle.js';

let car = new v("green")
console.log(car.color)
car.honkHorn()

let tr=new Bicycle()
console.log(tr.color);
tr.honkHorn()
```


## Add the function addHours() to the prototype of the Date constructor. This function takes a number H as an argument and adds H hours to the date. Make sure that the function will be added to ALL Date instances not only a single object.
``` js
Date.prototype.addhours=function(h){
  let given = this
  given.setHours(given.getHours()+h)   
}
let d = new Date();
d.addhours(5); 
console.log(d.getHours())   // 21 instead of 16
console.log(d)   // Wed Sep 11 2024 21:51:10
```

## Implement a generator function that yields the numbers of Fibonacci's sequence starting from the beginning of the sequence
``` js
function* fib(){
  let a,b;
  yield a=0;
  yield b=1;
  let next = a+b;
  while(true){
    yield next;
    a=b;
    b=next;
    next = a+b;
  }
}
let f =fib()
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

```