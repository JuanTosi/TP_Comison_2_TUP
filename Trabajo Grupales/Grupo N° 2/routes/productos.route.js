import { Router } from "express";
import { getProductos, getProductoId, createProducto, updateProducto, deleteProducto } from "../controllers/productos.controller.js";

const router = Router();

router.get('/', getProductos);
router.get('/:id', getProductoId);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

export default router;