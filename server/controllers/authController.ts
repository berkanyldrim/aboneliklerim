import { Context } from "../deps.ts";
import users from "../models/user.ts";
import { hashPassword, verifyPassword } from "../util/hash.ts";
import { createToken } from "../util/token.ts";

//NOTE - Register
export const register = async (ctx: Context) => {
  try {
    const result =await ctx.request.body();

    if (result.type === "json") {
      const value = await result.value;
      const { name, surname, email, password } = value;
      const hashedPassword = await hashPassword(password);

      //NOTE - Save User
       const insertResult = await users.insertOne({
        name,
        surname,
        email,
        password: hashedPassword
      });

      ctx.response.status = 201;
      ctx.response.body = {
        message: "User created",
        data: { name, surname, email,_id: insertResult.toString()}
      };
    }
     else {
      ctx.response.status = 400;
      ctx.response.body = { message: "Invalid request body" };
  }
    return;
  } catch (error) {
    ctx.response.status = 502;
    ctx.response.body = { status: "Failed to creat user", error: error.message };
  }
};

export const login = async (ctx: Context) => {
  try {
    const result = await ctx.request.body()
    if(result.type === "json"){
      const value = await result.value;
      const { email, password } = value;
      const user = await users.findOne({ email });
      if (!user) {
        ctx.response.status = 401;
        ctx.response.body = { message: "Invalid credentials" };
        return;
      }
      const isPasswordValid = await verifyPassword(password, user.password);

      if (!isPasswordValid) {
        ctx.response.status = 401;
        ctx.response.body = { message: "Invalid credentials" };
        return;
      }
      const token = await createToken( {email, _id: user._id.toString(), name: user.name, surname: user.surname});
      ctx.response.status = 200;
      ctx.response.body = { message:"Login Succesfuly", token };
    }
  } catch (error) {
    ctx.response.status = 502;
    ctx.response.body = { status: "Login Failed", error: error.message };
  }
};