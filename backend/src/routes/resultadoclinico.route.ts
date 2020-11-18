import { Router } from "express"; 
import resultadoclinicoController from '../controllers/resultadoclinico.controller'


const router = Router();

router.get('/', resultadoclinicoController.getAll);
router.get('/:id', resultadoclinicoController.getResultadoClinico);
router.post('/new',resultadoclinicoController.newResultadoClinico);
router.put('/update/:id', resultadoclinicoController.updateResultadoClinico);

//Exportamos router para usar rutas en app.ts
export default router;