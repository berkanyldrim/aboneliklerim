import { Router } from "../deps.ts";
import { getUsers, createUser } from "../controllers/userController.ts";
import { migrate } from "../migrations/migrate.ts";
import { getCurrencies } from "../controllers/currenciesController.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

//NOTE - Migrastion routes
 router.get("/mig", migrate);

//NOTE - Users routes
router.get("/users", getUsers);
router.post("/users", createUser);

//NOTE - Currencies routes
router.get("/currencies", getCurrencies);

export default router;
