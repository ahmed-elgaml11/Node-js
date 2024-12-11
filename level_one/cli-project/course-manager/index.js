#!/user/bin/env node 


// console.log("hellow");
// if (process.argv[2]==="add"){
//     console.log(`you will add ${process.argv[3]}`)
// }

// let {Command} = require('commander');

import{Command} from 'commander'
import inquirer from 'inquirer'
import fs from 'fs';



let question=[
    {
    "type":"input",
    "name":"course title",
    "message":"what is your course title"
    },
    {
    "type":"number",
    "name": "price",
    "message":"entert the course price",
    }      

]
let filepath='./course.json'

let program = new Command();

program
  .name('courses-manager')
  .description('CLI to make courses')
  .version('1.0.0');


program
  .command('add')
  .alias("a")
  .description("add a course")
//   .argument("<title>","add the course title")
//   .option("--price <price>")
  .action(()=>{
      // to make the the interface interactive: not by commander , by inquier
    inquirer
    .prompt(question)
    .then((answers) => {
      console.log(answers);          // prints js object with the answers
      if(fs.existsSync(filepath)){
        fs.readFile(filepath,'utf8',(err,content)=>{
            if (err){ 
                 console.log("ohhhh error");
                 process.exit;
            }
            console.log(content);
            let filecontentasjs=JSON.parse(content)
            filecontentasjs.push(answers);
            fs.writeFile(filepath,JSON.stringify(filecontentasjs),'utf8',(err)=>{
                if (err) console.log("ohhhhhhhh erorr")
                else console.log("course added");
            })
        
        })
      }
      else{
        fs.writeFile(filepath,JSON.stringify([answers]),'utf8',(err)=>{
            if (err) console.log("ohhhhhhhh erorr")
            else console.log("course added");
        })
      }
    })
  })

program
.command('list')
.description('show the courses')
.action(()=>{
    fs.readFile(filepath,'utf8',(err,content)=>{
        if(err){ 
            console.log(err);
            process.exit()
        }
        console.table(JSON.parse(content));
    })
})




  program.parse(process.argv);

