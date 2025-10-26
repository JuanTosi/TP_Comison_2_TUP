import express from 'express';
import comedoresRoutes from './routes/comedores.route.js';
import migrationRoutes from './routes/migration.route.js';
import donadoresRoutes from './routes/donadores.route.js';
import productosRoutes from './routes/productos.route.js';
import entregasRoutes from './routes/entregas.route.js';


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());



app.use('/api/migration/', migrationRoutes);
app.use('/api/donadores/', donadoresRoutes);
app.use('/api/comedores/', comedoresRoutes);
app.use("/api/productos/", productosRoutes);
app.use("/api/entregas/", entregasRoutes);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});