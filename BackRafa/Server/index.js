import cors from "cors";
import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
const app = express();

// Configura CORS para permitir solicitudes desde http://localhost:5173
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use(indexRoutes);
app.use(usuariosRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a mi app');
});
app.listen(PORT);
console.log(`Server on port ${PORT}`);
