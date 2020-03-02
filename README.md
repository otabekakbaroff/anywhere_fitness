# anywhere_fitness

# GET REQUESTS # 

```
GET REQUEST https://anywherefitnezz.herokuapp.com/api/instructors <----- GET ALL INSTRUCTORS 
```

```
GET REQUEST https://anywherefitnezz.herokuapp.com/api/instructors/1 <--WILL SELECT FIRST INSTRUCTOR IN THE LIST 
```

```
GET REQUEST  https://anywherefitnezz.herokuapp.com/api/clients <----- GET ALL CLIENTS
```

```
GET REQUEST   https://anywherefitnezz.herokuapp.com/api/clients/1 <--WILL SELECT FIRST CLIENT IN THE LIST
```

```
GET REQUEST https://anywherefitnezz.herokuapp.com/api/classes <----GET ALL CLASSES
```

```
GET REQUEST https://anywherefitnezz.herokuapp.com/api/classes/1 <---- WILL SELECT FIRST CLASS IN THE LIST
```

```
GET REQUEST https://anywherefitnezz.herokuapp.com/api/classes/1/clients <--GET ALL CLIENTS THAT ARE IN THAT CLASS
```


# POST REQUESTS #


```
POST https://anywherefitnezz.herokuapp.com/api/instructor/register <----- REGISTER AS INSTRUCTOR
```

              *****INSTRUCTOR REGISTER INPUT EXAMPLE*****
              
###        

        "name": "Zack", <----------REQUIRED 
        "contactInfo": "Zack@gmail.com", 
        "status": "Sambo Instructor", <------REQUIRED
        "username": "zap",     <-------REQUIRED
        "password": "123"    <------REQUIRED

###


```
POST https://anywherefitnezz.herokuapp.com/api/client/register <------REGISTER AS CLIENT
```


          ## CLIENT REGISTER INPUT EXAMPLE ##
           
           
###
        "name": "Joseph", <---- NOT REQUIRED BUT JUST DO IT, DONT BE LAZY
        "contactInfo": "client1@gmail.com",
        "username": "client1", <------REQUIRED
        "password": "123", <------REQUIRED
        "class_id": 1 <-----ID OF A CLASS YOU WANT TO SIGN UP TO(NOT REQUIRED)
###


```
POST REQUEST https://anywherefitnezz.herokuapp.com/api/instructor/login <---- LOGGING IN AS INSTRUCTOR
```

              ***** ACTUAL INSTRUCTOR WORKING LOGIN *****
              
              
###
  "username": "client1",
  "password": "123"
###


```
POST REQUEST https://anywherefitnezz.herokuapp.com/api/client/login <----LOGGING IN AS CLIENT
```

                 ***** ACTUAL CLIENT WORKING LOGIN *****
                 
                 
###
  "username": "zap",
  "password": "123"
###

```
POST REQUEST https://anywherefitnezz.herokuapp.com/api/classes <-----CREATING CLASSES
```

             ***** CREATING CLASSES EXAMPLE*****


###
        "class_name": "NewGoals2020",  <----------REQUIRED
        "description": "Learn art of Sambo",
        "duration": "2 hours",
        "intensity": "Beginners",
        "location": "Somewhere in US",  <------------------REQUIRED
        "dateAndTime": "11/11/11 2:00PM PST",   <-------------------REQUIRED
        "active": true,
        "instructor_id": 1 <--------------ID OF AN INSTRUCTOR THAT IS TEACHING THE CLASS(REQUIRED)
###




# PUT REQUESTS #




