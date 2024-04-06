import { Router } from "../deps.ts";
import { getUsers, createUser } from "../controllers/userController.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

router.get("/users", getUsers);
router.post("/users", createUser);

export default router;
