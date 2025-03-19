### 1. What is the primary purpose of using `bcrypt` in password protection?
- a) To encrypt database connections
- b) To compress password strings
- c) `To securely hash and salt passwords`
- d) To validate email formats
### 2. In session-based authentication, what does the server typically store?
- a) The user's entire profile
- b) `A unique session identifier`
- c) The user's password
- d) All user login attempts
### 3. Which method is most secure for handling user passwords?
- a) Storing passwords in plain text
- b) Using MD5 hashing
- c) Using symmetric encryption
- d) `Using bcrypt with salt`
### 4. When uploading files to cloud storage like Cloudinary, what is typically transmitted?
- a) The entire file path
- b) A file reference or unique identifier
- c) `The complete file content`
- d) User authentication tokens only
### 5. What is a key advantage of session-based authentication?
- a) Reduced server load
- b) Stateless authentication
- c) `Ability to track user state`
- d) Immediate token expiration
___

### 1. Explain the concept of password salting and why it's crucial in password protection. Describe how it enhances security against rainbow table attacks. 
the process of prepend a unique random string to a password and hash them depending on a work factor , it's crucial in password protection to make the dictionary attack became harder because if 2 users have the same password their hashed will be different, this will make them cant compare the passwords with their tables, which  makes the rainbow tables useless so they will have to bruetforce for each salt.


### 2. Compare and contrast session-based authentication with token-based authentication. Discuss the pros and cons of each approach in web application design.
#### session-based authentication:                                    
  if your login is successfil, the server retrieve or create a session and store in it user data or roles and generate a sessison id and send it back with the reponse as a cookie to be stored in a browser,  for any future requests the server checks the session id against its storage instead of authentication again.                    

#### pros:                           
simple and built-in in express.                                                              
more secured thanks to store the sid in the cookie which is protected against any attack.                                                                                  
stateful control because sessions are stored in the server and each session data is mapped to its corresponding user request.                                  
immediately invalidation by deleting the sever session                                   

#### cons:                                
every request hits the database to validate the id which makes overhead.                                 
restoring sessions in the server requires large shared storage   


#### token-based authentication:    
token: digital key used to prove who are you and detemine what you can access                            

if the login is successsful , the server generates a token contains the userid or role or any essential data and send it back to  the client by http response not a cookie , the token is stored in the local storage or in the cookie in the client side to send it back in the header of future requests, the server validate the token using its signature and extract the data from the token without storing sessions or any thing in the server                                 

#### pros:                       
performane: no database hits each request         
no server side storage so its perfect on distributed system  and better to scaleability.         

#### cons:               
hard to invalidate the token before expiration                   
stateless: server dosnt store sessions              
security risks : storing tokens in the local storage not in a cookie exposes them to attacks.            



### 3. Describe the process of file upload in a Node.js application. What are the key considerations for handling file uploads securely? 
the browser send any uploaded files as multipart encoding type, node js cant handle bianry data like files natively, so we should have a middleware to handle multypart form data and it will be multer, then we can store the files in cloudainary (a cloud based service to host images and videos with built-in optimiztion and  security) to offload server workload and automatic optimization to host files in it.

### 4. How does Cloudinary help in managing and optimizing image storage for web applications? Discuss its key features and benefits.
cloudinary is a cloud service used to host images and videos and files                                                            
its key features:                             
automatic optimization: copress and convert images to better format to reduce file size for better performance.                       
scalabilty: images distribued through cdn caching for fast global acess so it handles high trafic loads without affecting website performance                   
uses ai for auto categorize images                                    



### 5. Explain the role of middleware in implementing session-based authentication in Express.js. Provide a brief code snippet demonstrating its implementation.
middleware in implementing session-based authentication 
manages authentication checks to identify the user is logged in or not to protocet routes
``` ts
const authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized: Please log in' });
  }
  next();
};
```

``` ts

const bcrypt = require('bcrypt');

async function hashPassword(password: string): Promise<string> {
    if(typeof password !== 'string' ){       // type safety
        throw new Error('password must be string')
    }
    if(password.length < 8){                       // input validation
        throw new Error('password must be at leat 8 chars')
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
    }catch(err){  // error handling
        throw new Error(`cant hash the password ${err}`)
    }
}

async function validatePassword(inputPassword: string, hashedPassword: string) : Promise<boolean> {
    if (typeof inputPassword !== 'string' || typeof hashedPassword !== 'string') {
        throw new Error(' Both passwords must be strings.');
    }

    try{
        const same = await bcrypt.compare(inputPassword, hashedPassword)
        return same;

    }catch(err){
        throw new Error(`cand validate the password : ${err}`);
    }

}

```