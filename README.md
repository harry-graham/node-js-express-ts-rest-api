# node-js-express-ts-rest-api

A practice REST API built using TypeScript, Node.js and Express.

## Setup

First, install Node.js and Postman on your machine.

Next, install the necessary libraries:

```shell
npm install typescript ts-node express morgan axios @types/express @types/morgan @types/axios nodemon
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

## More information about the project libraries

Node.js libraries used:

- <b>TypeScript</b>: A TypeScript compiler with static set type definitions.
- <b>ts-node</b>: Allows us to run and configure Typescript execution environments.
- <b>Express</b>: Node.js web application framework for setting and managing web-based server.
- <b>Morgan</b>: A Node.js HTTP request logger middleware for Node.js.
- <b>Axios</b>: A Node.js promise-based HTTP client library for Node.js, for sending HTTP requests to query and consume resources from APIs.
- <b>Nodemon</b>: A server utility library for monitoring changes of the code on a text editor. It automatically restarts the server whenever code changes are detected.
- <b>Jest</b>: Testing.
- <b>ts-jest</b>: Enables Jest to work with TypeScript.
- <b>@types/express</b>: Type definitions for Express.
- <b>@types/morgan</b>: Type definitions for Morgan.
- <b>@types/Axios</b>: Type definitions for Axios.
- <b>@types/jest</b>: Type definitions for Jest.
