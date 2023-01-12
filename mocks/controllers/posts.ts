import { RestRequest, RestContext, ResponseComposition } from "msw";
import { Post } from "../../src/controllers/posts";

const post: Post = {
  userId: 2,
  id: 1,
  title: "Test title",
  body: "Test body"
};

const mockPost = (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(ctx.status(200), ctx.json(post));
};

export { post, mockPost };
