import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import usuariosRoutes from "./routes/usuarios.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";
import metricasRoutes from "./routes/metricas.routes.js";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => res.send("API Gestión Comercial OK"));

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/metricas", metricasRoutes);

app.use((_req, res) =>
  res.status(404).json({ error: "no se encutra la ruta" })
);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
