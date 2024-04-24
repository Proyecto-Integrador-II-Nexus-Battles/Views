import { Router } from "express";

import { defaultR } from '../../controllers/mi_Banco/testing.cotroller.js'

const router = Router();
router.get("/mi_banco", defaultR);



export default router;
