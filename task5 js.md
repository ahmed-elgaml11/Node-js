### Explain the difference between synchronous and asynchronous code.
 synchronous :
 operations run in sequence that each operation must wait for the previous one to complete like alert

 Asynchronous :
 operations run in parallel that an operation can occur while another operation is still being processed like settimeout,fetch,promisw
 


 ### Compare between fetch function and XMLHttpRequest class using Numbers API to call the API and print the response out to the console.
`XMLHttpRequest:`
``` js
let req= new  XMLHttpRequest;
req.open("GET","http://numbersapi.com/42/math?callback=showNumber");
req.send();
req.onload=function(){
  if(this.readyState==4&&this.status==200){
    console.log(this.responseText)
  }
  else{
    console.log("no data");
  }
}
```
`fetcj`
``` js
fetch("http://numbersapi.com/1337/trivia?notfound=floor&fragment")
.then((v)=>{
  return v.text();
}).then((v)=>console.log(v));

```

### Waleed has the Imparnumerophobia, which means he fears the odd numbers. Waleed asked you to design a program for him that modifies the strings by replacing any odd number with the word "BEEP". Help him implement this program using your knowledge in regular expressions.
``` js
function replace(text){
  let reg=/\b\d*[13579]\b/g
  return text.replace(reg,"BEEP")
}
console.log(replace("I have 12 cars, 11 of which are 89 years old"));
```


### Using Star Wars API Documentation, write a program that gets the planet name of the character with ID 4
``` js
async function planet(){
  let url= await fetch ("GET","https://swapi.dev/api/people/:4/").then((v)=>{
    let data = v.json();
    return data;
  })
  let p_url=url.homeworld;
  let planet = await fetch(p_url);
  let p_name = await planet.json()
  console.log(p_name.name);
}
```






### Seif is bad at math, can you help him calculate the total price of the products?

``` js
fetch("https://fakestoreapi.com/products").then(
  (v)=>{
    let data = v.json();
    return data;
  }
).then(
  (v)=>{
    console.log(v);
    let sum=0 ; 
    for (let i=0 ; i<v.length ; i++){
      if(v[i].id==1||v[i].id==3||v[i].id==4)
      sum+=v[i].price
    }
    console.log(sum);
  }
)
```
### The following code suffers from callback hell. The callbacks are nested in a confusing way. Solve the callback hell problem using each of:
``` js
setTimeout(() => {
    console.log("Hey there!");

    setTimeout(() => {
        console.log("This code will help you understand");

        setTimeout(() => {
            console.log("Asynchronous Programming");

            setTimeout(() => {
                console.log("What The Callback Hell!!!");

                setTimeout(() => {
                    console.log("I AM STUCK");
                }, 1000);
            }, 3000);
        }, 2000);
    }, 3000);
}, 5000);
```
`Promise Chaining:`
``` js
let time = new Promise((resolved)=>{
  setTimeout(()=>{
    resolved("Hey there!");
  },5000)
});
time.then((v)=>{
  console.log(v);
  return new Promise((solve)=>{
    setTimeout(()=>{
      solve("This code will help you understand");
    },3000)
  })
})
.then((v)=>{
  console.log(v);
  return new Promise((solve)=>{
    setTimeout(()=>{
      solve("Asynchronous Programming");
    },2000)
  })
})
.then((v)=>{
  console.log(v);
  return new Promise((solve)=>{
    setTimeout(()=>{
      solve("What The Callback Hell!!!");
    },3000)
  })
})
.then((v)=>{
  console.log(v);
  return new Promise((solve)=>{
    setTimeout(()=>{
      solve("I AM STUCK")
    },1000)
  })
}).then((v)=>{
  console.log(v);
})
```
















### Describe factory design pattern using an example of your own.

it is providing object creational mechanisms that provides flexibility , reusability , used when you want to create many different types of many different objects, factories allow you to handle all of your object creation in a cerntralized location 

exaple:
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
function empolyeefactor(){
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
let employee=new empolyeefactor();
let database=[];
database.push(employee.create("ahmed",1))
database.push(employee.create("ali",2))
console.log(employee.create("fady",2))
console.log(...database)
database.forEach((e)=>{
  say.call(e);
})
```
