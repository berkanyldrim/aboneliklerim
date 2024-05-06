import { Application,MongoClient } from "./deps.ts";
import router from "./routes/routes.ts";

const app = new Application();
const PORT = 8081;

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Deno project Started");
console.log("--------------------------------");
console.log(`Server running on port ${PORT}`);


const client = new MongoClient();
await client.connect("mongodb://localhost:27017/oak-test");
const db = client.database();
console.log("Database connected",db);

await app.listen({ port: PORT });
