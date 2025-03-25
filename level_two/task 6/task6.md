## What are the key differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)? 
### SSR: 
- web page is renderd on the sever before sent to the client.
- faster in initial loading due to the HTML is pre-rendered on the server.
- slower in Subsequents request and transition due to the full page reload which may make delay
- better in SEO(search engine optimization) because pots read and store the whole html easily
- high server load due to rendering in each request
### CSR: 
- web page is renderd on the client side in the browser using js,  
- slower in initial loading due to waiting js to execute  fetch data before rendering.
- faster in Subsequents request and transition because it only fetches the data without full reloads.
- poorer in SEO(search engine optimization) because search engines must wait for js to execute and fech the data and render content  making it harder to search engines in dynamic data. however, it is not important because csr apps serve authenticated users.
- reduce server load, most processing shifts to the client



## Explain the naming conventions for RESTful APIs
- Use nouns to represent resources
- Use HTTP methods for operations
- Use plural nouns for collections
- Use singular nouns for specific resources
- Use hyphens to separate words
-  Endpoint names should be concise, clear, and meaningful.