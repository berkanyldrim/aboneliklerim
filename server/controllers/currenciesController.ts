import { Context , MongoClient} from "../deps.ts";
import { Currency } from "../models/currency.ts";

const client = new MongoClient();
await client.connect("mongodb://localhost:27017/oak-test");
const db = client.database();
const currencies = db.collection<Currency[]>("currencies");

export const getCurrencies= async (ctx: Context) => {
    console.log("geldim currency")
  const data = await currencies.find();
    ctx.response.status = 200;
    ctx.response.body = data;
};

export const createUser = async (ctx: Context) => {
  ctx.response.body = "Create user";
  console.log("Create user running");
};
