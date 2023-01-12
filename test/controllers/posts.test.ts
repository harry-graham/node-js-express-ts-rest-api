import { getMockReq, getMockRes } from "@jest-mock/express";
import controller from "../../src/controllers/posts";
import { post } from "../../mocks/controllers/posts";

const { res, next, mockClear } = getMockRes();

describe("Controller", () => {
  beforeEach(() => mockClear());

  describe("getPost", () => {
    it("should call the API and return a response", async () => {
      const req = getMockReq({ params: { id: post.id.toString() } });

      const response = await controller.getPost(req, res, next);

      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledWith({ message: post });
    });
  });
});
