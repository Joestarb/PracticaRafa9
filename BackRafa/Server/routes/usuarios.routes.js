import express from "express";
import {
    actualizarUsuario,
    crearUsuario,
    eliminarUsuario,
    getUsuarioPorID,
    getUsuarios,
} from "../Controller/usuarios.controller.js";

const router = express.Router();

// Rutas para la gestión de usuarios
router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioPorID);
router.post("/usuarios", crearUsuario);
router.put("/usuarios/:id", actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

export default router;
