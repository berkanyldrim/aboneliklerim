import { Context } from "../deps.ts";
import { Currency } from "../models/currency.ts";
import  db  from "../connection/mongoDB.ts";


const currencies = db.collection<Currency[]>("currencies");

export const getCurrencies= async (ctx: Context) => {

  const data = await currencies.find().toArray();
    ctx.response.status = 200;
    ctx.response.body = data;
};

export const createUser = async (ctx: Context) => {
  ctx.response.body = "Create user";
  console.log("Create user running");
};
