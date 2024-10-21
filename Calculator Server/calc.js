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
