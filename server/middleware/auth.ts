// Import Context from Oak
import { Context } from "../deps.ts";
// Import Token Verification
import { verifyToken } from "../util/token.ts";

export const authMiddleware = async (ctx: Context, next: any) => {

  const headers: Headers = ctx.request.headers;
  const authorization = headers.get("Authorization");

  if (!authorization) {
    ctx.response.status = 401;
    ctx.response.body = { message: "Unauthorized" };
    return;
  }

  const token = authorization.split(" ")[1];
  const isValid = await verifyToken(token);

  if (!isValid) {
    ctx.response.status = 401;
    ctx.response.body = { message: "Unauthorized" };
    return;
  }

  ctx.state.user = isValid;
  await next();

}