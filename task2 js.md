# Theoritical
## 1.Explain the difference between primitive types and reference types in JavaScript.:
` primitive types:`
-  the lowest level of implementation of a programming language.
-  like: number , string , boolean ,undifined , null.
-  they cannot be altered once created. However, you can reassign a new value to a variable holding a primitive 
  value.
    -  ``` java script 
        let x=10;
        x=5;
        console.log(x);   // 5
         ```
- Stored by Value: When you assign a primitive value to a variable, the actual value is stored in the variable. When you assign this variable to another variable, the value is copied, so the two variables are completely independent.      
- stored in the stack   
  


`reference types:`
-  are dynamic in nature. That is, they do not have a fixed size.
-  like : arrays, functions, collections, and all other types of objects.
-  When you create a variable and assign it a value that is a reference data type(object): What you have assigned to that variable is a pointer that points to the location of that data type(object) in memory(heap) and the pointer stored in the stack
- if we create another variable object2, and assign it to object1,object2 and object1 will both point to the same object which in heap
-  ``` java script 
    let obj1 = { name: "Alice" };
    let obj2 = obj1;  //  the two refreced type (objects) are point to the same place in heap
    obj2.name = "Bob"; // changing obj2 also affects obj1
    console.log(obj1.name); // "Bob"
    console.log(obj2.name); // "Bob"
    ``` 

------------------------------------------------------------------------------------------------------
## 2.Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.

### Function Declaration :
defines a named function using the function keyword.

`Hoisting`: Function Declarations are hoisted to the top of their scope. This means you can call the function before the line where it's defined, and it will still work.
``` java script
console.log(info("ahmed",21));

function info (name , age){
  return `your name is ${name} , your age is ${age}`
}
```


### Function expression :
A Function Expression involves creating a function and assigning it to a variable. Function Expressions can be named or anonymous

`Hoisting`:Function Expressions are not hoisted. The variable that holds the function is hoisted with `'undefined'` if the variavle is `var`, but its value is not initialized until the code execution reaches that line. If you try to call the function before it's defined, you will get an error.

------------------------------------------------------------------------------------------------------
## 3.Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?

under 2 conditions function be classified as a pure function

`1.Deterministic Behavior:`
produces the same output given the same set of inputs. This means that the function's behavior ispredictable based on its inputs.

`2.No Side Effects:`
 This means it does not modify any external state, such as variables outside the function's scope, files, or databases, and it does not perform operations like logging to the console. The function only relies on its input parameters and returns a result based only on its inputs..

 ```  java script
 function plustwo (num){
    return num+2 
 }
 ```

------------------------------------------------------------------------------------------------------

## 3. Write down the array methods that you have studied and classify them to destructive and not destructive.
`destructive:` 
modify the original data structure directly

- push() - Adds one or more elements to the end of the array.
- pop() - Removes the last element from the array.
- shift() - Removes the first element from the array.
- unshift() - Adds one or more elements to the beginning of the array.
- splice() - Adds or removes elements from a specific index.
- sort() - Sorts the elements of the array in place.
- reverse() - Reverses the order of elements in the array.

`not destructive:`
do not alter the original data structure
- concat() - Combines multiple arrays into a new array.
- slice() - Returns a shallow copy of a portion of an array into a new array.
- map() - Creates a new array with the results of applying a function to each element.
- filter() - Creates a new array with all elements that pass the test implemented by the provided function.
- reduce() - Applies a function against an accumulator and each element to reduce it to a single value.
- forEach() - Executes a provided function once for each array element (doesn't create a new array).
- find() - Returns the first element that satisfies the provided testing function.
- findIndex() - Returns the index of the first element that satisfies the provided testing function.
- includes() - Checks if an array contains a certain element.
- indexOf() - Returns the first index at which a given element can be found.
- join() - Joins all elements of an array into a string.




# Practical:
``` java script

// Create Item Objects
function createitem(name,category,price,stock){
  return {
    name:name || "no nme" ,
    category:category || "no categoy",
    price:price || "no price",
    stock:stock || 0,
    updatestock: function(newStock){
      this.stock  =newStock;
    },
    applyDiscount: function (discount) {
      this.price*=(1-discount)
    }
  }

}

// Create an Inventory Object

let Inventory= new Object({
  items:[],

  additem : function(item){
    this.items.push(item);
  },

  removeItem : function(itemname){
    this.items=this.items.filter(function(e){
      return e.name!=itemname
    })
  },
  // another solution to removeitem 
  // removeItem : function(itemname){
  //   let index;
  //   for (let i =0 ; i <items.length;i++){
  //     if (items[i]===itemname){
  //       index=i;
  //       break;
  //     }
  //   }
  //   items.splice(index,1);
  // },

  getItem : function(itemname){
    return this.items.find(function(e){
      return e.name ===itemname
    }) ?? "not found";
  },

  filterItems: function(predicate){
    return this.items.filter(predicate)
  }
})



// Create several item instances and add them to the inventory.
let x= createitem("Laptop", "Electronics", 1000, 50);
let y=createitem("Phone", "Electronics", 500, 100);
let z=createitem("Headphones", "Electronics", 100, undefined);


Inventory.additem(x);
Inventory.additem(y);
Inventory.additem(z);


// Update stock and apply discounts to certain items.

z.updatestock(70);
x.applyDiscount(0.15)     // 15%
y.applyDiscount(0.20)       // 20 %


// Use the filterItems method to find items under a specific category or below a certain stock level.
let coco=Inventory.filterItems(function(e){
  return e.category==="Electronics"
})
console.log(coco);
let soso=Inventory.filterItems(function(e){
  return e.stock>=70;
})
console.log(soso);



// Remove an item from the inventory and verify it is no longer available.

Inventory.removeItem("Phone")
console.log(Inventory.items)

console.log(Inventory.getItem("phone"))              // not found



```