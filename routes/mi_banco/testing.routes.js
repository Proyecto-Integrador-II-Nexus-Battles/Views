import { Router } from "express";

import { defaultR, defaultR2, defaultR3 } from '../../controllers/mi_Banco/testing.controller.js'

const router = Router();
router.get("/mi_banco", defaultR);
router.get("/deck", defaultR2);
router.post("/saveDeck", defaultR3);



export default router;
