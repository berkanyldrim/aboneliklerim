// --- Application Import ---
import { Application } from "./deps.ts";
// --- Routes Import ---
import authRoutes from "./routes/authRoutes.ts";
import currenciesRoutes from "./routes/currenciesRoutes.ts";
import migrateRoutes from "./routes/migrateRoutes.ts";
// --- Import Oak Cors ---
import { oakCors } from "./deps.ts";

// --- DB Connection Import ---
import db from "./connection/mongoDB.ts";

const app = new Application();
app.use(oakCors());
const PORT = 8081;
//NOTE - Auth Routes
app.use(authRoutes.routes());
app.use(authRoutes.allowedMethods());
//NOTE - Migrate Routes
app.use(migrateRoutes.routes());
app.use(migrateRoutes.allowedMethods());
//NOTE - Currencies Routes
app.use(currenciesRoutes.routes());
app.use(currenciesRoutes.allowedMethods());


console.log("Deno project Started");
console.log("--------------------------------");
console.log(`Server running on port ${PORT}`);
await app.listen({ port: PORT });
