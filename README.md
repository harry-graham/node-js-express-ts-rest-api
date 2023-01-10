# node-js-express-ts-rest-api
A practice REST API built using TypeScript, Node.js and Express, following a tutorial.

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

Example requests via Postman:
- `GET: http://localhost:6060/posts`

## References

This project was set up using the following tutorial: https://www.section.io/engineering-education/how-to-create-a-simple-rest-api-using-typescript-and-nodejs/

Some additional tweaks were later added to this project.

## More information about the project

Node.js libraries used:
- <b>TypeScript</b>: A TypeScript compiler with static set type definitions.
- <b>Ts-node</b>: Allows us to run and configure Typescript execution environments.
- <b>Express</b>: Node.js web application framework for setting and managing web-based server.
- <b>Morgan</b>: A Node.js HTTP request logger middleware for Node.js.
- <b>Axios</b>: A Node.js promise-based HTTP client library for Node.js, for sending HTTP requests to query and consume resources from APIs.
- <b>@types/express</b>: Type definitions for Express.
- <b>@types/morgan</b>: Type definitions for Morgan.
- <b>@types/Axios</b>: Type definitions for Axios.
- <b>Nodemon</b>: A server utility library for monitoring changes of the code on a text editor. It automatically restarts the server whenever code changes are detected.

(These descriptions are copied from the referenced tutorial.)
