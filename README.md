# node-js-express-ts-rest-api

A practice REST API built using TypeScript, Node.js and Express.

## Setup

First, install Node.js and Postman on your machine.

Next, install the project's dependencies:

```shell
npm install
```

## Running locally

To start the development server locally:

```shell
npm run dev
```

## Testing the API with Postman

| Method | Example URL                     | Description          |
| ------ | ------------------------------- | -------------------- |
| GET    | `http://localhost:6060/posts`   | Fetch all posts      |
| GET    | `http://localhost:6060/posts/1` | Fetch a single post  |
| PUT    | `http://localhost:6060/posts/1` | Update a single post |
| DELETE | `http://localhost:6060/posts/2` | Delete a single post |
| POST   | `http://localhost:6060/posts`   | Create a single post |

Note: PUT and POST requests require a body containing the necessary information.

To do this for a request in Postman:

- Go to "Body"
- Select "raw"
- Select "JSON" from the dropdown
- Add a JSON body, e.g. below

```json
{
  "title": "Test post",
  "body": "Test post body"
}
```
