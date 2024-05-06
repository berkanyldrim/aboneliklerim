import { Context,MongoClient } from "../deps.ts";

const client = new MongoClient();
await client.connect("mongodb://localhost:27017/oak-test");
const db = client.database();
const currenciesCollection = db.collection("currencies");

export const migrate = async (ctx: Context) => {
  
    const filePath = "./seeds/currencies.json"

    try {
        const fileContent = await Deno.readTextFile(filePath);
        const currencies = JSON.parse(fileContent);
        // MongoDB'ye veri ekleme
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