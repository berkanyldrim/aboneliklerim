// --- Import Router Context ---
import { Context } from "../deps.ts";
// --- Import Currencies Model ---
import currencies from "../models/currency.ts";

//NOTE - Get Currencies
export const getCurrencies = async (ctx: Context) => {
  try {
    const data = await currencies.find({}).toArray();
    ctx.response.status = 200;
    ctx.response.body = { messages: "Currencies Listed", data: data };
  } catch (error) {
    console.error("Error fetching currencies:", error);
    ctx.response.status = 500;
    ctx.response.body = { messages: "Internal Server Error" };
  }
};
