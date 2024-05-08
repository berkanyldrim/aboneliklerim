// --- Import Context ---
import { Context } from "../deps.ts";

// --- Import DB Connection ---
import db from "../connection/mongoDB.ts"

//NOTE - Currencies Collection
const currenciesCollection = db.collection("currencies");

//NOTE Migrate Func
export const migrate = async (ctx: Context) => {
  
    const filePath = "./seeds/currencies.json"

    try {
        const fileContent = await Deno.readTextFile(filePath);
        const currencies = JSON.parse(fileContent);
        
        for (const currency of currencies) {
            await currenciesCollection.insertOne(currency);
        }

        ctx.response.status = 200;
        ctx.response.body = { message: "Migration başarıyla tamamlandı." };
    }
    catch (err) {
         console.error("Hata:", err);
        ctx.response.status = 500;
        ctx.response.body = { message: "Migration sırasında bir hata oluştu." };
    }
};