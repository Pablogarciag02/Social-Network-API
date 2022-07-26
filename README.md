# Social-Network-API

# Gihub Repository
https://github.com/Pablogarciag02/Social-Network-API

## Youtube Link Showing Functionality
[Youtube Video (Functionality)](https://tech-blog-adineradomx.herokuapp.com/)
## About this Project
-Every fullstack developer must know how to manipualate the exchange of information within a mongodb non relational database environment

-Due to this, i have learned how to make a social network api that allows users to add other users as friends, post their thoughts and react to thoughts of other people.

-This is only the api, request and responses. However, this is the back-bones of any social media website or app. Which can be then turned into an application using handlebars, allowing any developer to make a social media network with his own little twist!

This project uses
[express](https://www.npmjs.com/package/express) Web Framework.
[mongoose](https://www.npmjs.com/package/mongoose) MongoDB object modeling tool, that can work in an asynchronous environment.
[moment](https://www.npmjs.com/package/moment) Library for parsing, validating, manipualting, and formatting dates.




![Example](/Assets/Example1.png)
View all users

![Example2](/Assets/Example2.png)
create a user 

## Table of Contents
-Installation
-Credits
-Licence
-Features
-Contribution



### Installation for dev
*Before starting steps* : Make sure you have mongodb running and open.

*Step 1*: Install all the dependencies by typing in the terminal `npm i `.

*Step 2*: Create a mongoDB database and call it: `SocialNetworkAPI`.

*Step 3*:  open server.js in the integrated terminal and type: `nodemon server.js` OR `node server.js` if you dont have nodemon. This will open the page in localhost:3001. (^-^)

*Step 4*: open localhost:3001 in insomnia and check out all the routes avilable.


### Established routes for the API
#### API Routes

**`/api/users`**

* `GET` all users 

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "Pablo",
  "email": "pgarcia@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

---

**`/api/thoughts/:thoughtId/reactions/:reactionId`**

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value


### Credits
Pablo Eugenio Garcia
Github: [Pablogarciag02](https://github.com/Pablogarciag02)
LinkedIn: [Pablo-Eugenio-Gacía](https://www.linkedin.com/in/pablo-garc%C3%ADa-08842621b/)

## Licence
MIT License

Copyright (c) 2022 Pablo Eugenio Garcia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features
-Sign in and log in
-Individiual sessions for each user
-The ability to view personal uploads and uploads from other people
-Deployed in heroku
-Connected to a database

## Contribution
Feel free to fork and use this project for your personal use. Or if you want to make it better you can ask for a pull request 

