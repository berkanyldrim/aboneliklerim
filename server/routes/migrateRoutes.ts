// --- Router Import ---
import { Router } from "../deps.ts";
// --- Migration Import ---
import { migrate } from "../migrations/migrate.ts";

// --- Router Instance ---
const router = new Router();

//NOTE - Migrastion routes
router.get("/mig", migrate);

// --- Export Router ---
export default router;