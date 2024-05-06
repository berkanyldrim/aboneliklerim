import { Context } from "../deps.ts";
// import { User } from "../models/user.ts";

export const getUsers = async (ctx: Context) => {
  ctx.response.body = "Get users";
  console.log("Get users running");
};

export const createUser = async (ctx: Context) => {
  ctx.response.body = "Create user";
  console.log("Create user running");
};
