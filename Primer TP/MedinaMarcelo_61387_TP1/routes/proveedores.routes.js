const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedores.controllers');

router.post('/', proveedorController.crearProveedor);
router.get('/', proveedorController.obtenerProveedores);
router.get('/:id', proveedorController.obtenerProveedorPorId);
router.put('/:id', proveedorController.actualizarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);

module.exports = router;