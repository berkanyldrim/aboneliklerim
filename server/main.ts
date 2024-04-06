import { Application } from "./deps.ts";
import router from "./routes/routes.ts";

const app = new Application();
const PORT = 8080;

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Deno project Started");
console.log("--------------------------------");
console.log(`Server running on port ${PORT}`);

await app.listen({ port: PORT });
