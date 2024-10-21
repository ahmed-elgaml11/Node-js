 ##  Task1

``Theoritical:`` 

1.Explain the difference between == and === in JavaScript.?

``` javascript
console.log(10=="10")   // 1  compare value
console.log(10==="10")   // 0  compare value and type   (identical operator)
```


2.Hamed is simply trying to sort an array of numbers but unfortunately this sort method isn't working as expected. Can you tell Hamed the reason for this behavior and how to implement it in a right way?
``` javascript
const arr = [10, 5, 11];
arr.sort();
```

the reason: 

sort fuction sorts Alphabetically ,not depends on the value.                       
the right way by compare function:
``` javascript
const arr = [10, 5, 11];
arr.sort(function(a,b){return a-b});
console.log(arr); 
```


``Practical
``


3-Write a JavaScript program that takes an array and updates it in place. 
Each Element in the array is a string or a number. If it's a number, 
you should multiply it by 3. If it's a string, 
you should make the first letter uppercase and the rest lowercase.

``` javascript
let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==="string")
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1,arr[i].length-1).toLowerCase();
    else{
        arr[i]*=3;
    }
}
console.log(arr);
```



4-Write a JavaScript program that converts temperature from Celsius to Fahrenheit.

``` javascript
let selsius=20;
console.log((selsius*9/5)+32)

```



5-Adel wrote a secret message that he didn't want anyone to read easily
. To make it difficult to understand, he reversed it.
 He then thought that it wasn't enough, 
 so he wanted to perform another minor change that would make it unrecognizable.
  Write a JavaScript program that takes a string 
 and prints it again after reversing it and making all vowel letters uppercase.


``` javascript
let s = "Hey There, I'm glad to have you";
let vowel = ["a" , "e" , "i" , "o" , "u"];

let snew=s.split('').reverse().join("");
let ans="";
for(let i=0;i<snew.length;i++){
    if(vowel.includes(snew[i])){
        ans+=snew[i].toUpperCase();
    }
    else
    ans+=snew[i]
}
console.log(ans);

```



6-Write a JavaScript program that takes a string and an array of forbidden letters.
 Your program should print the string after removing
 the forbidden letters from it and make all letters separated by hiphens -.
 ```java script
let text ="Please";
let forbiddenLetters = ['r', 'x', 'p', 'a'];
let res="";
for(let i=0;i<text.length;i++){
    if( !(forbiddenLetters.includes(text[i].toLowerCase()))&&!(forbiddenLetters.includes(text[i].toUpperCase())) ){
        res+=text[i]+'-';
    }
}

console.log(res.substring(0,res.length-1));
```