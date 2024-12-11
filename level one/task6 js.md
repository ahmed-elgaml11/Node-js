### 1-According to your understanding; explain what's the difference between fs.readFile and fs.readFileSync methods.
``` js
let fs = require ('node:fs');
let filecontent=fs.readFileSync('./test.text','utf-8');
console.log(1);
console.log(filecontent);
console.log(2);
// output:1 filecontent 2
means fs.readFileSync synchronous operation blocks the code until reading the whole file
```
``` js
let fs = require ('node:fs');
console.log(1);
fs.readFile('./test.text','utf-8',(err,data)=>{
    if(err) throw(err);
    else console.log(data);
})
console.log(2);
console.log(2);
// output:1 2 2 filecontent 
means fs.readFile asynchronous operation non-blocks the code
```
 ### 2-Explain with examples the difference between installing a package as a normal dependency vs. as a development dependency with npm.

 Normal dependencies are needed for the application to run and it will be added in json file under dependenies category like `npm install express`

 , while development dependencies are only needed during development and it will be added in json file under devdependenies category like `npm install --save-dev nodemon
 

 ### 3-What is the purpose of the node_modules folder, and why should it typically be excluded from version control systems like Git?`
 folder created by npm that contains all the installed packages and their dependencies 
 it is excluded from version control systems like Git due to its large size ,and because you don’t need to commit the folder because others can recreate it easily.by running npm install, which reads from your package.json file

 ### 4- Break through this package.json file and explain its contents.

 it is a json file required to descripe the dependies a Node.js application named url-shortener-app and it is private meaning that can't be published to the npm registry. and with two scripts required to run, first tell the engine which file will be excuted and the last for automically restart when any changes in the file is detecting 









### 5- Create a Node.js CLI application that uses GitHub API to get the repositories of a single user.The application should take the username from the user input in the console, then call GitHub API to get the repositories of this user. Then store the repository names in a file <username>.txt.GitHub API Endpoint:https://api.github.com/users/<username>/repos Note: Don't forget to add node_modules directory to .gitignore file
``` js
import{Command} from 'commander'
import inquirer from 'inquirer'
import fs from 'node:fs';
import axios from 'axios'
import path from 'node:path';
// Axios simplifies the process of making API calls,http requests and working with the responses, enabling you to focus more on application logic instead of managing low-level HTTP request handling.
let program = new Command();

let question=[
    {
        "type":"input",
        "name":"username",
        "message":"enter the username"
    }
]
 function fetchrepos (username){
    let url = `https://api.github.com/users/${username}/repos`;
    let response = axios.get(url)
    response.then((value)=>{
    let reposnames=value.data.map((element)=>element.name);
    if(reposnames.length===0) console.log("no repos")
    else{
        let filepath=path.join(__dirname,`${username}.text`);
        fs.writeFile(filepath,reposnames,'utf8',(err)=>{
            if(err) throw err;
        })
    } 
})
}
program
.name("repositories")
.description("cli to get the repositories of any user")
.version('1.0.0');

program
.command("get")
.description("enter the username to get the repositories of you")
.action(()=>{
    inquirer
    .prompt(question)
    .then((answers)=>{
        fetchrepos(answers)
    })
})
program.parse(process.argv);

```




### 6- Implement a cloud calculator using the HTTP module.

The request url form will be: /[operation]?a=[num1]&b=[num2]

``` js
import http from 'http';
let server = http.createServer((req,res)=>{
    if (req.method!=='GET'){
        res.writeHead(405,{'content-type':'text/plain'});
        res.end("undefined method");
        return;
    }
    const regex = /^\/(add|subtract|multiply|divide)\?a=([-+]?\d*\.?\d+)&b=([-+]?\d*\.?\d+)$/
    let matched = (req.url.match(regex));
    let operation = matched[1];
    let num1 = parseFloat(matched[2]);
    let num2 = parseFloat(matched[3]);
    let result;
    switch(operation){
        case 'add':
            result=num1+num2;
            break;
        case 'subtract':
            result=num1-num2;
            break;
        case 'multiply':
            result=num1*num2;
            break;
        case 'divide':
            if(num2===0){
                res.writeHead(400,{'content-type':'text/plain'});
                res.end("devision by zero runtime error");
                return;        
            }
            result=num1/num2;
            break;
        default:
            res.writeHead(404,{'content-type':'text/plain'});
            res.end("undefined operation");
            return; 
    }
    res.end(`${result}`)
})
let port =4000;
server.listen(port,()=>{
    console.log("startoing at port 4000")
})
```
 ### 7-Create a CLI file search application using Node.js. The application takes the file name and a query string as parameters, and prints the line which contains this string. If the string can't be found, the application should print "THAT'S NOT FUNNY".
 ``` js
 import{Command} from 'commander'
import fs from 'fs';
import path from 'path';

let program = new Command

program
.name("file-searching")
.description("searching in a file")
.version("'1.0.0'")

program
.arguments('<filename>','enter the file name')
.argument('<string>','enter the word')
.action((filename,string)=>{
    const filePath = path.resolve(filename);
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            console.log("there is an error");
            return;
        }
        let lines = data.split('\n');
        let answers=lines.filter((line)=>{
            line.includes(string);  
        })
        if(answers){
            answers.forEach(line=>console.log(line));
        }
        else{
            console.log("THAT'S NOT FUNNY");
        }
    })

})
program.parse(process.argv);
 ```









### 8-Explain using code the difference between using CommonJS modules and the new EcmaScript modules, and show how to switch between them.
`CommonJS modules`
exporting:
``` js
(main.js)
module.exports.add = (a, b) => {
  return a + b;
};

module.exports.subtract = (a, b) => {
  return a - b;
};
```
importing :
``` js
let math = require('./main.js')
console.log(math.add(2, 3));     
console.log(math.subtract(5, 2)); 

```

`(ESM)`
exporting:
``` js
(main.js)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;

}
```

importing :

``` js
import { add, subtract } from './math.mjs';

console.log(add(2, 3));      
console.log(subtract(5, 2)); 
```
 Switching to ESM:
 set "type": "module" in package.json

  Switching to commonjs:
   "type": "commonjs"
