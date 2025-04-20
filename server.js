import express from 'express';
import rutas from './routes/routes.js';
import cors from 'cors';

const app = express();

// Usar el puerto proporcionado por Clever Cloud o 3001 por defecto
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/api', rutas);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});
