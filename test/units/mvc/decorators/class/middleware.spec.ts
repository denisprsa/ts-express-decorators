import {Middleware, registerMiddleware} from "../../../../../packages/common/src/mvc";
import {expect} from "../../../../tools";

describe("Middleware", () => {
  it("should use registerMiddleware", () => {
    expect(Middleware()).to.eq(registerMiddleware);
  });
});
