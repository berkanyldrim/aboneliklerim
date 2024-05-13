// --- Router Import ---
import { Router } from "../deps.ts";
// --- Currencies Controller Import ---
import { getCurrencies } from "../controllers/currenciesController.ts";
// --- AuthMiddleware Import ---
import { authMiddleware } from "../middleware/auth.ts";

// --- Router Instance ---
const router = new Router();

//NOTE - Currencies routes
router.get("/currencies",authMiddleware, getCurrencies);

// --- Export Router ---
export default router;