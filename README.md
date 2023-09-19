# Nodejs Todo API with MongoDB and Docker 🎉
 this is an example for learning nodejs

## How to run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000/api/v1/todos` in postman or browser

## How to run with dockerfile and docker-compose
1. Clone this repository
2. Run `docker-compose up -d`
3. Open `http://localhost:3000/api/v1/todos` in postman

## How to insert data to database
1. Open `http://localhost:3000/api/v1/todos` in postman
2. Insert data with method `POST`
3. Example data:
```
{
    "title": "Learn Nodejs",
    "content": "Learn Nodejs for beginner"
}
```
4. Click send button

## How to update data to database
1. Open `http://localhost:3000/api/v1/todos/:id` in postman
2. Update data with method `PATCH`
3. Example data:
```
{
    "title": "Learn Nodejs",
    "content": "Learn Nodejs for beginner"
}
```

## How to delete data to database
1. Open `http://localhost:3000/api/v1/todos/:id` in postman
2. Delete data with method `DELETE`

## How to get data to database
1. Open `http://localhost:3000/api/v1/todos` in postman
2. Get data with method GET
