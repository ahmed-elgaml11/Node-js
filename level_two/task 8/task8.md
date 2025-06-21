## Explain the difference between each of these types of pagination with examples: 

### Offset-based or page pagination
used to skip number of rows or documents and takse a specific number of the result 
``` js
Model.find()
  .skip((page - 1) * pageSize)
  .limit(pageSize);

``` 
### Cursor-based pagination
using a cursor or a pointer to tell me the last fetched data to take what after it to avoid reading scanned rows
``` js
const lastId = items[items.length - 1]._id;
const nextItems = await Model
  .find({ _id: { $gt: lastId } })
  .sort({ _id: 1 })
  .limit(limit)
  .toArray();``` 
```
### Keyset-based pagination  

general version of cursor pagination using additional fields to ensure stability

``` js
const lastDate = lastPage[lastPage.length - 1].createdAt;
const lastId = lastPage[lastPage.length - 1]._id;

const nextItems = await Model
  .find({
    $or: [
      { createdAt: { $lt: lastDate } },
      { createdAt: lastDate, _id: { $lt: lastId } }
    ]
  })
  .sort({ createdAt: -1, _id: -1 })
  .limit(limit)
  ```

### Time-based pagination

timestamps as cursor keys, ideal for time order data

 ``` js
Model.find({ createdAt: { $lt: lastTimestamp } })
  .sort({ createdAt: -1 })
  .limit(pageSize);

``` 


## You want to prevent duplicate users registering with the same email using case differences (e.g., John@Email.com vs john@email.com). Use mongoose middlewares/hooks to implement this. (5 pts.)

### Write a middleware function that normalizes the email to lowercase before saving it to the database.
### Check if the email already exists in the database, ignoring case differences.
```js
userSchema.pre('save', async function (next) {
  if (!this.isModified('email')) return next();
  this.email = this.email.toLowerCase();
  const existing = await this.constructor.findOne({ email: this.email });

  if (existing && existing._id.toString() !== this._id.toString()) {
    return next(new Error('Email already in use'));
  }
  next();
});

```

### Mention the name of the security vunerability in each of the following scenarios: (8 pts.)

#### A user is able to enter a script tag in the username field of a form, and when the form is submitted, the script executes in the browser of other users who view the page.

`xss` 

#### A web application allows users to upload files, but it does not validate the file type or size. An attacker uploads a malicious executable file, which is then executed on the server.

`Unrestricted File Upload`

#### A user is able to access a resource owned by another user by manipulating the URL or request parameters, even though they are not authorized to do so.

`Insecure Direct Object Reference`

#### A web application does not properly validate user input, allowing an attacker to inject SQL queries into the database, potentially exposing sensitive data or allowing unauthorized access.

`SQL Injection`

#### A token can be reused by an attacker to gain unauthorized access to a user's account, even after the user has logged out or the token has expired.

`Broken Authentication`

#### A web application sends a JSON Web Token (JWT) that contains sensitive information, such as user passwords or API keys, in the payload.
`Sensitive Data Exposure`

#### A user is able to send additional parameters in a request that are not expected by the server, potentially causing unexpected behavior or security vulnerabilities. (like sending a role parameter to a user creation endpoint to assign admin privileges)
`Mass Assignment`

#### A web application does not properly validate the origin of requests, allowing an attacker to send requests from a different domain and potentially perform unauthorized actions on behalf of the user.
`Cross-Site Request Forgery`


___
 ### Answer the following example using code snippets. You're building a Node.js API for a library application. The API allows users to manage books (title, author, genre) and their borrowings. Mongoose is used for interacting with the database

#### 1- The API endpoint for retrieving a specific book requires its ID. How can you define the route for this endpoint?
 ``` js
export const getOne = (model: ModelName) =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params
        const service = serviceMap[model]
        const doc = await service.getOneById(id);
        if (!doc) {
            throw new AppError('No Document found with that ID', 404);
        }
        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        })

    })
 ```

 #### 2- The API should allow filtering books by genre. How can you achieve this using Mongoose queries?
  ``` js
export const getAll = (model: ModelName) =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const service = serviceMap[model]
        let filter = {}
        if (req.query.genre) filter = { genre: req.query.genre }

        const docs = await service.getAll(filter)

        res.status(200).json({
            status: 'success',
            results: docs.length,
            data: {
                data: docs
            }
        })
    }) 
```


#### 3- A user wants to retrieve books published after a specific date. Which Mongoose query operator can be used for this filtering?

Using Mongoose's $gt operator
``` js
export const getAll = (model: ModelName) =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const service = serviceMap[model]

        let queryString = JSON.stringify(req.query)
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`)

        let filter = JSON.parse(queryString)

        const docs = await service.getAll(filter)

        res.status(200).json({
            status: 'success',
            results: docs.length,
            data: {
                data: docs
            }
        })
    }) 
```
#### 4- The API should allow searching books by a keyword in the title or author fields. How can you achieve this using Mongoose queries? 

``` js
export const getAll = (model: ModelName) =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const service = serviceMap[model]

        let filter = {}
        if (req.query.keyword){
            const keyword = req.query.keyword;
                     filter = { $or: [
            {
                title: { $regex: keyword, $options: 'i' } 
            },{
                author: { $regex: keyword, $options: 'i' } 
            }
        ]}


        }
        const docs = await service.getAll(filter)

        res.status(200).json({
            status: 'success',
            results: docs.length,
            data: {
                data: docs
            }
        })
    }) 
```



#### 5- Write a manual implementation of the rate limiting middleware. The middleware should limit the number of requests from a single IP address to 100 requests per hour. If the limit is exceeded, return a 429 status code with a message indicating that the rate limit has been exceeded.

``` js

const data = new Map();
const window = 60 * 60 * 1000; // 1 hour
const maxRequests = 100;
export const reteLimit = (req, res, next) => {
    const ip = req.ip;
    if(!data.has(ip)){
        data.set(ip, {count: 1, start: Date.now()})
        return next()
    }
    const request = data.get(ip)
    
    if(date.now() - request.start > window){
        data.set(ip, {count: 1, start: Date.now()})
        return next()
    }
    request.count ++ ;

    if(request.count > maxRequests){
        res.status(429).json({
            status: 'error',
            message: 'Rate limit exceeded. Try again later.'
        });
    }else next()
    
}


```


 The article link: 
[xss](https://medium.com/@a7medelgaml11a/cross-site-scripting-xss-21c3da28c31d)