import { Router } from 'express';
import {
    obtenerVentas,
    obtenerVentaPorId,
    crearVenta
} from '../controllers/ventas.controller.js'; 

const router = Router();

router.get('/', obtenerVentas);
router.get('/:id', obtenerVentaPorId);
router.post('/', crearVenta);
export default router;