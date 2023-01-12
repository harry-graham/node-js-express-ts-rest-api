import { rest } from "msw";
import { setupServer } from "msw/node";
import { post, mockPost } from "../mocks/controllers/posts";

const server = setupServer(
  rest.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`, mockPost)
);

export { server };
