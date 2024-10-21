# Theoritical
## Compare between the three types of quantifiers in regular expressions (?, +, *).
chars help you to determine the quantity

n+>>>>one or more char


n*>>>>zero or more char 


n?>>>>zero or one  char


``` js
let nums="0110 020 00 234"
let numsre=/0\d*0/g
console.log(nums.match(numsre))          //['0110', '020', '00']

```

``` js
let url = "http://google.com  https://www.website.net ahmed.com"
let validreg=/https?:\/\/(www.)?\w+.(net|com)/g
console.log(url.match(validreg));

```



## What are the characters that can be represented by \w and \b in a regular expression?

\b=>matches at the beginning or at the end of the word

``` js
let names=" ali spam22 33spam aspaml"
let reg=/(spam\b|\bspam)/g
console.log(names.match(reg))
```
\w=> matches any word character [a-z,A-Z,0-9,_]


## Compare between the Map and WeakMap according to the way they save keys and values.
`map: ` keys can be function,Object,Number, string,anything,does not have default keys. keys and their associated values are retained in memory as long as the Map exists, 

` WeakMap:`stores Objects only whic stored with the keys as weak referencesand (removes them once they inaccessible)(garbige collection),takes object as a key and you should add value.


## Write an example of a string which matches the following pattern:
const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;

26-11-2011



## and write another string that violates the following pattern:
const regex = /^(?!.*\bieee\b).+$/i;


hi IEEE organization

# Practical 
1-  Use object and array destructing to get the values: "Zamalek" and "4th". Your solution should be 2 lines of code maximum.

``` js
const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
        name: "Morroco",
        best: {
            africanCupOfNations: ["Champion", 2018],
            worldCup: ["4th", 2022],
        }
    }
}

let {teams:[,,a], nationalTeam:{best:{worldCup:[c,]}} }=user
console.log(a,c);
```



2-Use the spread operator to create a new object fantasyPlayer, which has the score set to 50 and has a position attribute set to "ST". Make sure the original object remains unchanged.

``` js
let player = new Object(
    {
        name: "Samir Kamona",
        club: "Al Ahly",
        score: 25
    }
);
let fantasyPlayer={
    ...player,
    position:"ST",
}
fantasyPlayer.score=50;
console.log(fantasyPlayer)
```


3-Write a function that takes an array of items, filters all elements starting with hand and ending with s or y or le (case insensitive). There may be other characters in between.

``` js
function last(items){
    let rex=/^hand.*(s|y|le)$/i
  items=items.filter(function(e){
    console.log(rex.test(e))
    return(rex.test(e))
    })
    return items;
}
let a=['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY']
let z=last(a);
console.log(z);  // ['hands', 'hanDLes', 'Handcuffs', 'HANDINGLY']
```

4-Applying the concept of closures, create a counter using JavaScript and HTML. The counter should be able to increment, decrement, and reset its value, demonstrating the practical use of closures to maintain state between function calls.


I couldn't do it😭😭