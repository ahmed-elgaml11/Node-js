 # web development overview
___
`web` : service allow computers to share and change the data .


**هنتكلم عن الموديل اللي من خلاله هنفهم الويب بيشتغل ازاي**

## `client server model `

distributed structure , tasks is done between the provider of resources **server** and maker of requsts **client**


**client:** computers or software systems that send request to ask for service .

**server:** computers or software systems that process request , store resources , send response ,service provider.
___

## the explanation:

1. when you type a web address **url** in your browser , the browser requests **dns** to find the actual address which the website srore **ip**

1. the browser builds ***http*** request and sends it to the server through the internet by caples and optical fibers.

1. the server reads the request, If the server approves the client's request, the server sends response
to the request , and then starts sending the website's files to the 
browser.

1. the browser reads response and display the required data .


____
## static and dynamic webpages:

### `static web page :`

- every user see the same content in each individual page.
- no serer side processing , no interactivity with the user .
- created by html , css manually page by page.
- like documentations , presentation websites , forms.


### `dynamic web page :`

- returns and display the content based on specific **url** (user input)

- server - side processing , involves connecting to databases rather than html files .
- like you tube , netflix.

___
  **`backend:`**
 code runs at the server - side ,clients can never see or modify the code


  **`frontend:`**
 code runs at the client - side ,servers sends satic files.
  
  **`api: `** 
  links between frontend and back end.


___

## you can write HTML inside php files??!!!
علشان احقق ال dynamic site 

 ال server  بيلاحظ ان الملف مكتوب  php فهيطبق الكود و connect with database ويرجعها ك html لل client  فبالتالي الclient مش هيشوف اللي بيحصل في server-side.

 ___
 ## framework:
 هو structure مكتوب فيه اكواد كتير هحتاجها فبدل مكتبها كلها تاني بستخدم الframework فهتوفر معايا مهام كتير

 structured guidlines that provides a platform for developing software applications , it provides a predefined way to build a code and by provididng built-in functions for common tasks like http requests , nanaging databases , handing routting.

 ___
 ## `into web appplication: `
 it's aclient side and server side software program , exist on the server , runs using a web browser.

___
___
___


## `design patterns : `  the design of the web app.

**solution** to a **problem** in a **context**.

context: web app.الحاله اللي انا فيها عايز اعمل .

problem:  عشان اقلل تعقيد الكود  component الخاصه بكل  functionalities  سهل والتواصل فيه جيد ومرن وابسطه عن طريق فصل ال web app عايز ال  

solution:  classes معين وتركيبه معينه من ال  design  اعمله .


## compound dessign patterns :
combines two or more patterns to solve a general probleem. the king of it is ` MVC  `

## ` mvc : ` 
و نموذج بستخدمه عشان اقسم الكود بتاعي الي قطع عشان دماغي متنفجرش و عشان اقددر استخدم كل جزئ في اكتر من مكان 

   1. **`view:`**     controller بيشوفها ويتعامل معاها  وملوش علاقه باي داتا هو مجرد بياخدها من ال  user للي ال 
1. **`model:`**    طريقه تعاملك مع الداتابيز و هو هو نفس المديل مبيتغيرش وبعيد استخدامه مع اكتر من فيو و اي حاجه ليها داتا بيز ممكن اعملها مودل 
2. **`controller:`**  user action ويبعتها للفيو + بيتعامل مع ال variables  للربط بينهم بحيث الداتا من الموديل ويخزنها عنده في 

![mvc](https://th.bing.com/th/id/OIP.H-2tZku5hI_UC62e2ov-tgHaFQ?rs=1&pid=ImgDetMain)

___

 ## ` into HTTP `

-  designed for communication between the server and clients
- it's the messanger of the web.
- it is used to deliver content .
- was designed to fetch html documents from the server to the clients.
- it's connection less.
- it's state less.

## main parts of the http request:

1. **verp** `how` :  resource انا هعمل ايه بال 
- get
- post
- put
- delet 

2. **path** `what`  : عايز اوصل لانهي واحد 

the way to the resource .**URI** 


## main part of the http response:
-  start line :contains status code:
 tell the client if the request succeded or failed .
 - header: 
 1. host:    contains address of the server 
 1. accept-lang  
 1. accept: contains extension.
- body : contains the requested file.

___
**internet:** groups of comouter systems want to communicate by caples or wireless.

group of structured webpages make**website**.

**webpage:** single document which we can access by entering url on a browser.

___
## we use ur`l`,ur`i`,ur`n` to identify the resource
**URL:** what you type on the browser to make the client make http request and sends it to the server,it's considered uri whic just refers to the address.

**URi:** spcefies the name or the address or both of them of the resource we are looking for.

**URn:** uri which spcefies the name of the resource.
___
___


















