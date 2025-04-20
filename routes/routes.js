import {Router} from 'express';
import { obtenerAutores, crearAutor, ActualizarNuevoAutor, EliminarAutores,librosAutor } from '../controller/AutorController.js';


const router=Router();

router.get('/autores',obtenerAutores);
router.post('/autores',crearAutor);
router.put('/autores/:id',ActualizarNuevoAutor);
router.delete('/autores/:id',EliminarAutores);
router.get('/autores/:id',librosAutor);
export default router;