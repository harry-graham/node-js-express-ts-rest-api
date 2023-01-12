import { rest } from "msw";
import { setupServer } from "msw/node";
import { getMockReq, getMockRes } from "@jest-mock/express";

import controller, { Post } from "../../src/controllers/posts";

const post: Post = { userId: 2, id: 1, title: "Test title", body: "Test body" };

const server = setupServer(
  rest.get(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(post));
    }
  )
);

const { res, next, mockClear } = getMockRes();

describe("Controller", () => {
  beforeEach(() => mockClear());
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("getPost", () => {
    it("should call the API and return a response", async () => {
      const req = getMockReq({ params: { id: post.id.toString() } });

      const response = await controller.getPost(req, res, next);

      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledWith({ message: post });
    });
  });
});
