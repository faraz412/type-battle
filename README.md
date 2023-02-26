
# TypeBattle.com

TypeBattle is a multiplayer online browser-based typing game. In TypeBattle, players complete typing tests of various texts as fast as possible, competing against themselves or with other users online

## Features

- Authentication
- Authorization
- Responsive
- Cross platform


## Tech Stack

**Client:** HTML, CSS, Javascript 

**Server:** Node, Express


## Run Locally

Clone the project

```bash
  git clone https://github.com/DanteHaxor/acceptable-straw-3421
```

Go to the project directory

```bash
  cd acceptable-straw-3421
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`key`

`mongourl`

`PORT`


## API Reference

#### Welcome

```http
  GET /api
```
#### User Register

```http
  POST /api/user/register
```
#### User Login

```http
  POST /api/user/login
```
#### Admin Register

```http
  POST /api/admin/register
```
#### Admin Login

```http
  POST /api/admin/login
```
#### All Content

```http
  GET /api/content/
```
#### Add Content

```http
  POST /api/content/addcontent
```
#### Update Content

```http
  PATCH /api/content/update/:id
```
#### Delete Content

```http
  DELETE /api/content/delete/:id
```

## Screenshots

![App Screenshot](https://i.imgur.com/NIW25IN.jpeg)
![App Screenshot](https://i.imgur.com/gIZtuhv.jpeg)
![App Screenshot](https://i.imgur.com/Gqs21cN.jpeg)



## Demo
https://pear-z5ta.onrender.com/
## Authors

- [@DanteHaxor](https://github.com/DanteHaxor)
