### 1- 
#### SVN:
`Synchronization`: centralized version control system                          
`Branching`: branches are typically created as copies of the entire repository                                 
`Ecosystem`: Strong integration with older tools 

#### git:

`Synchronization`: distributed version control system                          
`Branching`: branches are easy to create, merge, and delet                                 
`Ecosystem`: a largr supporter tools like github.


### 2-
Git is a cloud-based service to store remote repositories                                   
the correct : Github is a cloud-based service to store remote repositories


### 3- 

| Day       | Time                | Course                      | Room     |
|-----------|-------------------- |-----------------------------|--------  |
| Saturdat    | 10:00 AM - 11:30 AM | Introduction to Programming |   101     |
| sunday    | 9:00 AM - 10:30 AM  | Network Security            |   303     |
| Monday    | 2:00 PM - 3:30 PM   | Data Structures             |   202     |
| Tuesday   | 9:00 AM - 10:30 AM  | Web Development             |   105     |
| Wednesday | 11:00 AM - 12:30 PM | Software Engineering        |   203     |
| Thursday  | 10:00 AM - 11:30 AM | Database Systems            |   301     |


### 4- 
You want to add all modified files to git staging without specifying each one of them.
``` bash
git add . 
``` 
You have a local repository and you need to add a remote with name deploy and url https://git.heroku.com/example-app.git.

``` bash 
git remote add deploy https://git.heroku.com/example-app.git
```
You want to get the history of commits in the repository where each commit is represented by one line.
``` bash
git log --oneline
```
You try to make a commit but git asks you to enter your name and email first.
``` bash
i will set my name and the email globally for all repositories
git config --global user.name "ahmed"
git config --global user.email "ahmedelgaml@gmail.com"
```
Your work is present on the branch feature/chat and you want to merge it with the branch development.
``` bash
git switch development
git merge feature/chat
```
You realize that you want to add one more file to the last commit without creating a new commit.
``` bash
git reset  HEAD~1
git restore <file-name>
// adding files
git add .
git commit -m "message"

```











### 5- 
What does the HEAD keyword refer to in git:                     

the object head is a pointer which points to the certain commite which reflect what in the working directory 


### 6- 
in the commit message:                           
the message should start with verb not noun after determining the type and you should descibe the essence of the commit                   

in the commit body:                  
1.  too much changes in one commit , each change should be in one commit.   
2.  the commit should only contains the changed files    
3.  it should be in structurd way like a list of changes you did
4.  random changes and you should describe the reason you make this change for
5.  you should know everything you did.

------------------------------