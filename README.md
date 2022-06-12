# Test And Tag

## Description

Test And Tag App for UniSA.
The user can request an equipment to be tested.
The authorised person will receive the request then test the equipment.

## Table Of Contents

1. [Description](##Description)
2. [Installation](##Installation)
   - [Software](###Software)
3. [Start Running Server Locally](##Run)
4. [Retrieve Code](##Retrieve)
5. [Contributor](##Contributor)
6. [Technolgies Used](##Technologies)

## Installation

Before pulling code make sure you have the following Software Downloaded

### Software

Required: <br />
[Visual Studio Code](https://visualstudio.microsoft.com/)<br />
[Git Bash](https://gitforwindows.org/)<br />
[Node.js](https://nodejs.org/en/)<br />
[Mongodb](https://www.mongodb.com/try/download/community)<br />

After software has been downloaded and set up you can download the repository

## Retrieve

You may retrieve the code on Github.com at this [Repository](https://github.com/LIASY032/TestAndTag)

## Run

Make sure you are in the right folder path when following these steps

1. Before starting server make sure you start the mongodb server using the following command in your gitbash

   > mongod

2. Create a file called default.json in server/config

```
{
    "key": "your key for encryption",
    "db":"your mongodb link",
    "emailAuth":{
         "email": "your gmail",
         "password": "your password"
     }

}
```

3. Install dependencies using the following command

   &nbsp; &nbsp; &nbsp; navigate to client folder

   > cd client<br />
   > npm install<br />

   &nbsp; &nbsp; &nbsp; navigate to server folder

   > cd server<br />
   > npm install<br />

   &nbsp; &nbsp; &nbsp; if you change server port number, you need change the file in client/package.json

   > ```
   >  {
   > "name": "testandtag",
   > "proxy": "http://localhost:6001/api/", // change to your port number
   > "version": "0.1.0",
   > "private": true,
   > ```

4. Start the server using either of these commands

> cd server<br />
> npm start<br />

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;or

> node server.js

5. Start the frontend using these commands

> cd client<br />
> npm start

6. Open local host and add/remove anything you please

## Contributor

You may contribute by following [Shiwei](https://github.com/LIASY032) and [Li](https://github.com/Li-Ke-001) on github.com!

## Technologies

[![Using HTML](https://img.shields.io/badge/Using-HTML-orange)](https://www.w3schools.com/html/)
[![Using CSS](https://img.shields.io/badge/Using-CSS-blue)](https://www.w3schools.com/css/)
[![Using Sass](https://img.shields.io/badge/Using-Sass-pink)](https://www.w3schools.com/css/)
[![Using Javascript](https://img.shields.io/badge/Using-Javascript-yellow)](${https://www.javascript.com/})
[![Using Node](https://img.shields.io/badge/Using-Node-brightgreen)](${https://nodejs.org/en/})
[![Using Express](https://img.shields.io/badge/Using-Express-lightgreen)](${https://nodejs.org/en/})

```

```
