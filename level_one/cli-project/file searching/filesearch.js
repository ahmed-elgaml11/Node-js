// Create a CLI file search application using Node.js. The application takes the file name and a query string
//  as parameters, and prints the line which contains this string. If the string can't be found, 
//the application should print "THAT'S NOT FUNNY".

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