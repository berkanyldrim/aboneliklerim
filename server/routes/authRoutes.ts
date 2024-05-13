// --- Router Import ---
import { Router } from "../deps.ts";
// --- Auth Controller Import ---
import { register, login, } from "../controllers/authController.ts";

// --- Router Instance ---
const router = new Router();

// --- Router Middleware ---
router.post("/register", register);
router.post("/login", login);

// --- Export Router ---
export default router;