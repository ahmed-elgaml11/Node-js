//  Create a Node.js CLI application that uses GitHub API to get the repositories of a single user.
// The application should take the username from the user input in the console, then call GitHub API to get the repositories of this user. Then store the repository names in a file <username>.txt.

// GitHub API Endpoint:
// https://api.github.com/users/<username>/repos
// Note: Don't forget to add node_modules directory to .gitignore file
/////////////////////////////////////////////////////////////////////////////////////////////////
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
























