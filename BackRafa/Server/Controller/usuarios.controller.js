import { pool } from '../db.js';

export const getUsuarios = async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * FROM usuarios');
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUsuarioPorID = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);

        if (results.length === 0) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.json(results[0]);
        }
    } catch (error) {
        console.error('Error al obtener el usuario: ' + error);
        res.status(500).send('Error interno del servidor');
    }
}

export const crearUsuario = async (req, res) => {
    const { nombre, apellido, correo_electronico, contrasena } = req.body;
    try {
        await pool.query(
            'INSERT INTO usuarios (nombre, apellido, correo_electronico, contrasena) VALUES (?, ?, ?, ?)',
            [nombre, apellido, correo_electronico, contrasena]
        );
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el usuario: ' + error);
        res.status(500).send('Error interno del servidor');
    }
}

export const actualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, correo_electronico, contrasena } = req.body;
    try {
        await pool.query(
            'UPDATE usuarios SET nombre = ?, apellido = ?, correo_electronico = ?, contrasena = ? WHERE id = ?',
            [nombre, apellido, correo_electronico, contrasena, id]
        );
        res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el usuario: ' + error);
        res.status(500).send('Error interno del servidor');
    }
}

export const eliminarUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el usuario: ' + error);
        res.status(500).send('Error interno del servidor');
    }
}
